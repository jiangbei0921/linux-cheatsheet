/* Linux & Git 命令速查 —— 前端逻辑（纯原生，无依赖，支持 file:// 双击打开） */
(function () {
  "use strict";

  var DATA = window.COMMAND_DATA || { categories: [], commands: [] };
  var CATS = DATA.categories || [];
  var CMDS = DATA.commands || [];
  var catMap = {};
  CATS.forEach(function (c) { catMap[c.id] = c; });

  var state = { q: "", group: "all", cat: "all", freq: "all", diff: "all", detail: null };

  var $search = document.getElementById("search");
  var $sidebar = document.getElementById("sidebar");
  var $content = document.getElementById("content");
  var $groupFilters = document.getElementById("groupFilters");

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function hl(text) {
    var q = state.q.trim();
    var e = esc(text);
    if (!q) return e;
    try {
      return e.replace(new RegExp("(" + escRe(esc(q)) + ")", "gi"), "<mark>$1</mark>");
    } catch (e) { return e; }
  }
  function groupLabel(g) { return g === "linux" ? "Linux" : g === "git" ? "Git" : "全部"; }
  function groupOf(cmd) { return catMap[cmd.category] ? catMap[cmd.category].group : ""; }

  function inGroup(cmd) {
    var g = groupOf(cmd);
    return state.group === "all" || g === state.group;
  }
  function matchCmd(cmd) {
    if (!inGroup(cmd)) return false;
    if (state.cat !== "all" && cmd.category !== state.cat) return false;
    if (state.freq !== "all" && cmd.frequency !== state.freq) return false;
    if (state.diff !== "all" && cmd.difficulty !== state.diff) return false;
    var q = state.q.trim().toLowerCase();
    if (!q) return true;
    var hay = [cmd.name, cmd.description].concat(cmd.keywords || []).join(" ").toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function filtered() { return CMDS.filter(matchCmd); }

  /* ---------- Sidebar ---------- */
  function renderSidebar() {
    var html = "";
    ["linux", "git"].forEach(function (g) {
      if (state.group !== "all" && state.group !== g) return;
      var cats = CATS.filter(function (c) { return c.group === g; });
      if (!cats.length) return;
      html += '<div class="side-group-title ' + g + '"><span class="dot"></span>' + groupLabel(g) + "</div>";
      var allCount = CMDS.filter(function (c) {
        return (state.group === "all" || groupOf(c) === g);
      }).length;
      html += sideItem("all@" + g, "全部（" + groupLabel(g) + "）", allCount, state.group === g && state.cat === "all");
      cats.forEach(function (c) {
        var n = CMDS.filter(function (x) { return x.category === c.id; }).length;
        if (n === 0) return;
        html += sideItem(c.id, c.name, n, state.cat === c.id);
      });
    });
    $sidebar.innerHTML = html;
  }
  function sideItem(key, name, count, active) {
    return '<button class="side-cat' + (active ? " active" : "") + '" data-cat="' + esc(key) + '">' +
      '<span>' + esc(name) + '</span><span class="cnt">' + count + "</span></button>";
  }

  /* ---------- Content ---------- */
  function renderContent() {
    if (state.detail) { renderDetail(state.detail); return; }
    var list = filtered();

    // 搜索态：扁平结果
    if (state.q.trim()) { renderFlat(list); return; }

    // 特定分类态
    if (state.cat !== "all") {
      renderCategory(list); return;
    }

    // 首页态：hero + 分组区块
    renderHome(list);
  }

  function renderFlat(list) {
    var total = CMDS.filter(inGroup).length;
    var head = '<div class="stat-bar">当前分组共 <strong>' + total + "</strong> 条命令，匹配 <strong>" + list.length + "</strong> 条</div>";
    if (!list.length) {
      $content.innerHTML = head + '<div class="empty">没有匹配的命令，换个关键词试试？</div>';
      return;
    }
    $content.innerHTML = head + gridHtml(list);
  }

  function renderCategory(list) {
    var cat = catMap[state.cat];
    var html = '<div class="cat-header">' +
      '<div class="cat-header-main">' +
      '<span class="cat-badge ' + (cat.group === "linux" ? "linux" : "git") + '">' + groupLabel(cat.group) + "</span>" +
      "<h2>" + esc(cat.name) + "</h2></div>" +
      '<div class="cat-meta">' + list.length + " 条命令</div></div>";
    if (!list.length) { $content.innerHTML = html + '<div class="empty">该分类下暂无匹配当前筛选条件的命令。</div>'; return; }
    $content.innerHTML = html + gridHtml(list);
  }

  function renderHome(list) {
    var groups = state.group === "all" ? ["linux", "git"] : [state.group];
    var total = CMDS.filter(inGroup).length;
    var catCount = CATS.filter(function (c) {
      return state.group === "all" || c.group === state.group;
    }).length;

    var html = '<section class="hero">' +
      '<span class="hero-badge">免费 · 中文 · 离线可用</span>' +
      '<h1 class="hero-title">读懂每一条命令</h1>' +
      '<p class="hero-sub">中文搜索、分类导航、使用案例与一键复制，帮你在 AI 生成命令的时代安全执行每一条指令。</p>' +
      '<div class="hero-stats">' +
        statCard(total, "条命令") +
        statCard(catCount, "个分类") +
        statCard("2", "大类别 · Linux / Git") +
      "</div>" +
      '<div class="chips" id="chips">' +
        '<span class="chip-label">频率</span>' +
        chip("freq", "高", "高频") +
        chip("freq", "中", "中频") +
        chip("freq", "低", "低频") +
        '<span class="chip-label">难度</span>' +
        chip("diff", "入门", "入门") +
        chip("diff", "日常", "日常") +
        chip("diff", "进阶", "进阶") +
        (state.freq !== "all" || state.diff !== "all" ? '<button class="chip chip-clear" data-clear="1">重置筛选</button>' : "") +
      "</div>" +
      "</section>";

    groups.forEach(function (g) {
      CATS.filter(function (c) { return c.group === g; }).forEach(function (cat) {
        var items = list.filter(function (x) { return x.category === cat.id; });
        if (!items.length) return;
        html += '<section class="cat-section">' +
          '<div class="cat-section-head">' +
            '<span class="cat-section-dot ' + g + '"></span>' +
            "<h3>" + esc(cat.name) + "</h3>" +
            '<span class="cat-section-count">' + items.length + "</span>" +
          "</div>" +
          gridHtml(items) +
        "</section>";
      });
    });

    $content.innerHTML = html;
  }

  function statCard(num, label) {
    return '<div class="stat-card"><div class="stat-num">' + num + '</div><div class="stat-label">' + label + "</div></div>";
  }
  function chip(kind, val, label) {
    var active = state[kind] === val ? " active" : "";
    return '<button class="chip' + active + '" data-' + kind + '="' + val + '">' + label + "</button>";
  }

  function gridHtml(list) {
    var grid = '<div class="cmd-grid">';
    list.forEach(function (c, idx) {
      var g = groupOf(c);
      var badges =
        '<span class="badge freq-' + c.frequency + '">' + c.frequency + "</span>" +
        '<span class="badge diff-' + c.difficulty + '">' + c.difficulty + "</span>";
      grid += '<div class="cmd-card ' + g + '" data-name="' + esc(c.name) + '" style="animation-delay:' + Math.min(idx * 18, 360) + 'ms">' +
        '<div class="cmd-card-top">' +
          '<span class="cmd-group-tag ' + g + '">' + (g === "linux" ? "LINUX" : "GIT") + "</span>" +
        "</div>" +
        '<div class="name">' + hl(c.name) + "</div>" +
        '<div class="desc">' + hl(c.description) + "</div>" +
        '<div class="badges">' + badges + "</div></div>";
    });
    grid += "</div>";
    return grid;
  }

  function renderDetail(name) {
    var c = CMDS.filter(function (x) { return x.name === name; })[0];
    if (!c) { state.detail = null; renderContent(); return; }
    var cat = catMap[c.category];
    var g = groupOf(c);
    var html = '<button class="back-btn" id="backBtn">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>' +
      '返回列表</button>';
    html += '<div class="detail-head">' +
      '<div class="detail-title-wrap">' +
        '<span class="cmd-group-tag ' + g + '">' + (g === "linux" ? "LINUX" : "GIT") + "</span>" +
        "<h2>" + esc(c.name) + "</h2>" +
        '<div class="cat-line">' + (cat ? esc(cat.name) : "") + "</div>" +
      "</div>" +
      '<button class="copy-cmd-btn" data-copy="' + esc(c.name) + '">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
        "复制命令</button>" +
      "</div>";
    html += '<div class="lead">' + esc(c.description) + "</div>";
    html += '<div class="badges">' +
      '<span class="badge freq-' + c.frequency + '">使用频率：' + c.frequency + "</span>" +
      '<span class="badge diff-' + c.difficulty + '">难度：' + c.difficulty + "</span></div>";

    html += '<div class="section-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>使用案例</div><div class="ex-list">';
    (c.examples || []).forEach(function (ex) {
      html += '<div class="ex-item">' +
        '<div class="ex-cmd-row"><code class="ex-cmd">' + esc(ex.cmd) + "</code>" +
        '<button class="copy-btn" data-copy="' + esc(ex.cmd) + '">复制</button></div>' +
        '<div class="ex-desc">' + esc(ex.desc) + "</div></div>";
    });
    html += "</div>";

    if (c.pitfalls) {
      html += '<div class="section-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>易错警告</div>' +
        '<div class="note-box warn"><b>!</b><span>' + esc(c.pitfalls) + "</span></div>";
    }
    if (c.compare) {
      html += '<div class="section-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>命令对比</div>' +
        '<div class="note-box info"><b>i</b><span>' + esc(c.compare) + "</span></div>";
    }
    if (c.keywords && c.keywords.length) {
      html += '<div class="section-title">相关关键词</div><div class="tags">';
      c.keywords.forEach(function (k) { html += '<span class="tag">' + esc(k) + "</span>"; });
      html += "</div>";
    }
    $content.innerHTML = '<div class="detail">' + html + "</div>";
    var back = document.getElementById("backBtn");
    if (back) back.onclick = function () { state.detail = null; renderContent(); };
    Array.prototype.forEach.call($content.querySelectorAll(".copy-btn, .copy-cmd-btn"), function (btn) {
      btn.onclick = function () { copyText(btn.getAttribute("data-copy"), btn); };
    });
  }

  function copyText(text, btn) {
    var done = function () {
      var old = btn.textContent;
      btn.textContent = "已复制";
      btn.classList.add("done");
      setTimeout(function () { btn.textContent = old; btn.classList.remove("done"); }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else { fallbackCopy(text); done(); }
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---------- Events ---------- */
  $search.addEventListener("input", function () {
    state.q = $search.value;
    if (state.detail) state.detail = null;
    renderContent();
  });
  $groupFilters.addEventListener("click", function (e) {
    var b = e.target.closest(".gbtn"); if (!b) return;
    Array.prototype.forEach.call($groupFilters.children, function (x) { x.classList.remove("active"); });
    b.classList.add("active");
    state.group = b.getAttribute("data-group");
    state.cat = "all";
    state.detail = null;
    renderSidebar();
    renderContent();
  });
  $sidebar.addEventListener("click", function (e) {
    var b = e.target.closest(".side-cat"); if (!b) return;
    var cat = b.getAttribute("data-cat");
    if (cat.indexOf("all@") === 0) { state.group = cat.slice(4); state.cat = "all"; }
    else { state.cat = cat; }
    state.detail = null;
    renderSidebar();
    renderContent();
  });
  $content.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (chip) {
      if (chip.dataset.clear) { state.freq = "all"; state.diff = "all"; }
      else if (chip.dataset.freq) { state.freq = state.freq === chip.dataset.freq ? "all" : chip.dataset.freq; }
      else if (chip.dataset.diff) { state.diff = state.diff === chip.dataset.diff ? "all" : chip.dataset.diff; }
      renderContent();
      return;
    }
    var card = e.target.closest(".cmd-card");
    if (card) {
      state.detail = card.getAttribute("data-name");
      renderContent();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  });

  /* ---------- Theme toggle (light/dark) ---------- */
  (function setupTheme() {
    var root = document.documentElement;
    var toggle = document.getElementById("themeToggle");
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = saved || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.addEventListener("click", function () {
        var cur = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
        var next = cur === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
      });
    }
  })();

  /* ---------- Init ---------- */
  renderSidebar();
  renderContent();
})();
