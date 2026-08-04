/* Linux 命令速查 —— 前端逻辑（纯原生，无依赖，支持 file:// 双击打开） */
(function () {
  "use strict";

  var DATA = window.COMMAND_DATA || { categories: [], commands: [] };
  var CATS = DATA.categories || [];
  var CMDS = DATA.commands || [];
  var catMap = {};
  CATS.forEach(function (c) { catMap[c.id] = c; });

  var state = { q: "", group: "linux", cat: "all", freq: "all", diff: "all", detail: null };

  var $search = document.getElementById("search");
  var $sidebar = document.getElementById("sidebar");
  var $content = document.getElementById("content");
  var $groupFilters = document.getElementById("groupFilters");

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\$]/g, "\\$&"); }
  // 将多行文本转为 <p> 段落（按换行拆分，空行忽略）
  function paras(s) {
    return String(s == null ? "" : s).split("\n").map(function (line) {
      var t = line.trim();
      return t ? "<p>" + esc(line) + "</p>" : "";
    }).join("");
  }
  // 终端输出：转义后高亮 $ 提示符与输入命令行
  function renderSampleOutput(text) {
    return String(text == null ? "" : text).split("\n").map(function (line) {
      var safe = esc(line);
      if (/^\s*\$ /.test(line)) {
        var html = safe.replace(/^(\s*)\$ /, '$1<span class="prompt">$</span> ');
        return '<span class="cmd-line">' + html + "</span>";
      }
      return '<span class="out-line">' + safe + "</span>";
    }).join("\n");
  }
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
      if (state.group !== g) return;
      var cats = CATS.filter(function (c) { return c.group === g; });
      if (!cats.length) return;
      html += '<div class="side-group-title ' + g + '"><span class="dot"></span>' + groupLabel(g) + "</div>";
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
    var groups = state.group === "all" ? ["linux"] : [state.group];

    var html = '<section class="hero">' +
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

    if (c.sample && c.sample.output) {
      html += '<div class="section-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 17 6-6-6-6"/><path d="M12 19h8"/></svg>执行示例与输出解释</div>';
      html += '<div class="sample-block">';
      html += '<div class="sample-term"><div class="sample-term-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="sample-term-title">bash</span></div><pre class="sample-output">' + renderSampleOutput(c.sample.output) + "</pre></div>";
      html += '<div class="sample-explain"><div class="sample-explain-head">输出结果解释</div>' + paras(c.sample.explain) + "</div>";
      html += "</div>";
    }

    if (c.options && c.options.length) {
      html += '<div class="section-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/></svg>选项速查</div>' +
        '<div class="opt-table">';
      html += '<div class="opt-row opt-head"><div class="opt-flag">选项</div><div class="opt-default">默认值</div><div class="opt-desc">说明（含义 / 适用场景 / 边界）</div></div>';
      c.options.forEach(function (o) {
        html += '<div class="opt-row">' +
          '<div class="opt-flag"><code>' + esc(o.flag) + '</code><button class="copy-btn opt-copy" data-copy="' + esc(o.flag) + '">复制</button></div>' +
          '<div class="opt-default"><span class="opt-default-tag">' + esc(o.default) + "</span></div>" +
          '<div class="opt-desc">' + esc(o.desc) + "</div></div>";
      });
      html += "</div>";
    }

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
    state.cat = b.getAttribute("data-cat");
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

  /* ============================================================
     新增：顶部 Tab 路由 / 熟练度检测 / AI 模拟面试 / 设置
     ============================================================ */

  var $tabseg = document.getElementById("tabseg");
  var $settingsBtn = document.getElementById("settingsBtn");
  var pendingIvGroup = null;

  function setView(v) {
    document.body.setAttribute("data-tab", v);
    Array.prototype.forEach.call($tabseg.children, function (b) {
      b.classList.toggle("active", b.getAttribute("data-tab") === v);
    });
    if (v === "lookup") {
      state.detail = null;
      renderSidebar();
      renderContent();
    } else if (v === "quiz") {
      renderQuizHome();
    } else if (v === "interview") {
      renderInterviewHome();
    } else if (v === "explain") {
      renderExplainHome();
    } else if (v === "generate") {
      renderGenerateHome();
    }
    window.scrollTo({ top: 0 });
  }

  /* ---------- 指令含义查询 ---------- */
  var explainGroup = "linux", genGroup = "linux";
  function segBtn(g, cur) {
    var label = g === "all" ? "全部" : g === "linux" ? "Linux" : "Git";
    return '<button type="button" class="seg-btn' + (g === cur ? " on" : "") + '" data-group="' + g + '">' + label + "</button>";
  }
  function bindGroupSeg(id, cb) {
    var $seg = document.getElementById(id);
    if (!$seg) return;
    Array.prototype.forEach.call($seg.querySelectorAll(".seg-btn"), function (b) {
      b.onclick = function () {
        Array.prototype.forEach.call($seg.querySelectorAll(".seg-btn"), function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        cb(b.getAttribute("data-group"));
      };
    });
  }
  function findCmdByName(name) {
    var n = (name || "").trim().toLowerCase();
    if (!n) return null;
    for (var i = 0; i < CMDS.length; i++) {
      if (CMDS[i].name.toLowerCase() === n) return CMDS[i];
    }
    return null;
  }
  function findCmdByTokens(tokens) {
    var best = null, bestLen = 0, s = "";
    for (var i = 0; i < tokens.length; i++) {
      s = (s ? s + " " : "") + tokens[i];
      var c = findCmdByName(s);
      if (c) { best = c; bestLen = i + 1; }
    }
    if (!best) return { cmd: null, args: tokens };
    return { cmd: best, args: tokens.slice(bestLen) };
  }
  function optMatchesExample(o, e) {
    if ((" " + e.cmd + " ").indexOf(" " + o + " ") !== -1) return true;
    if (o.length === 2 && o.charAt(0) === "-") {
      var letter = o.charAt(1);
      var ts = e.cmd.split(/\s+/);
      for (var i = 0; i < ts.length; i++) {
        var t = ts[i];
        if (t.charAt(0) === "-" && t.charAt(1) !== "-" && t.indexOf(letter) !== -1) return true;
      }
    }
    return false;
  }
  function shellTokenize(str) {
    var tokens = [], cur = "", q = null, i = 0, s = (str || "").trim();
    while (i < s.length) {
      var ch = s.charAt(i);
      if (q) { if (ch === q) q = null; else cur += ch; }
      else if (ch === '"' || ch === "'") { q = ch; }
      else if (/\s/.test(ch)) { if (cur) { tokens.push(cur); cur = ""; } }
      else { cur += ch; }
      i++;
    }
    if (cur) tokens.push(cur);
    return tokens;
  }
  function fuzzySuggest(name, group) {
    var n = (name || "").trim().toLowerCase();
    if (!n) return [];
    return CMDS.filter(function (c) {
      if (group && group !== "all" && groupOf(c) !== group) return false;
      return c.name.toLowerCase().indexOf(n) !== -1 ||
        (c.keywords || []).join(" ").toLowerCase().indexOf(n) !== -1;
    }).slice(0, 8);
  }
  function parseArgs(args, cmd) {
    var out = [], exs = cmd.examples || [];
    args.forEach(function (a) {
      if (/^-/.test(a)) {
        var opts = [];
        if (a.charAt(0) === "-" && a.charAt(1) !== "-" && a.length > 2) {
          for (var i = 1; i < a.length; i++) opts.push("-" + a.charAt(i));
        } else { opts.push(a); }
        opts.forEach(function (o) {
          var matches = exs.filter(function (e) {
            return optMatchesExample(o, e);
          });
          var meaning;
          if (matches.length) {
            meaning = "该选项出现在以下用法中：" + matches.slice(0, 3).map(function (m) {
              return '<code>' + esc(m.cmd) + "</code>（" + esc(m.desc) + "）";
            }).join("；");
          } else {
            meaning = "库内未单独收录该选项的说明，可参考下方「使用案例」理解其作用。";
          }
          out.push({ tok: o, meaning: meaning });
        });
      } else {
        out.push({ tok: a, meaning: "位置参数 / 目标（通常是文件、目录或取值）。" });
      }
    });
    return out;
  }
  function renderExplainDetail(cmd, args) {
    var g = groupOf(cmd), cat = catMap[cmd.category];
    var html = '<div class="detail">' +
      '<div class="detail-head">' +
        '<div class="detail-title-wrap">' +
          '<span class="cmd-group-tag ' + g + '">' + (g === "linux" ? "LINUX" : "GIT") + "</span>" +
          "<h2>" + esc(cmd.name) + "</h2>" +
          '<div class="cat-line">' + (cat ? esc(cat.name) : "") + "</div>" +
        "</div>" +
        '<button class="copy-cmd-btn" data-copy="' + esc(cmd.name) + '">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>复制命令</button>' +
      "</div>" +
      '<div class="lead">' + esc(cmd.description) + "</div>" +
      '<div class="badges">' +
        '<span class="badge freq-' + cmd.frequency + '">使用频率：' + cmd.frequency + "</span>" +
        '<span class="badge diff-' + cmd.difficulty + '">难度：' + cmd.difficulty + "</span></div>";

    var parsed = parseArgs(args, cmd);
    if (parsed.length) {
      html += '<div class="section-title">参数解析（你输入的命令拆解为）</div><div class="ex-args">';
      parsed.forEach(function (p) {
        html += '<div class="arg-row"><code class="arg-tok">' + esc(p.tok) + '</code>' +
          '<div class="arg-mean">' + p.meaning + "</div></div>";
      });
      html += "</div>";
    }

    if (cmd.examples && cmd.examples.length) {
      html += '<div class="section-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>使用案例</div><div class="ex-list">';
      cmd.examples.forEach(function (ex) {
        html += '<div class="ex-item">' +
          '<div class="ex-cmd-row"><code class="ex-cmd">' + esc(ex.cmd) + '</code>' +
          '<button class="copy-btn" data-copy="' + esc(ex.cmd) + '">复制</button></div>' +
          '<div class="ex-desc">' + esc(ex.desc) + "</div></div>";
      });
      html += "</div>";
    }
    if (cmd.pitfalls) {
      html += '<div class="section-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>易错警告</div>' +
        '<div class="note-box warn"><b>!</b><span>' + esc(cmd.pitfalls) + "</span></div>";
    }
    if (cmd.compare) {
      html += '<div class="section-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>命令对比</div>' +
        '<div class="note-box info"><b>i</b><span>' + esc(cmd.compare) + "</span></div>";
    }
    if (cmd.keywords && cmd.keywords.length) {
      html += '<div class="section-title">相关关键词</div><div class="tags">';
      cmd.keywords.forEach(function (k) { html += '<span class="tag">' + esc(k) + "</span>"; });
      html += "</div>";
    }
    html += "</div>";
    return html;
  }
  function renderExplainHome() {
    $content.innerHTML =
      '<section class="explain">' +
        '<div class="explain-head">' +
          "<h2>指令含义查询</h2>" +
          "<p>粘贴或输入一条完整命令，例如 <code>find . -name \"*.log\" -delete</code>、<code>chmod 755 app.sh</code> 或 <code>top -b -n 1</code>，查看它每一步在做什么、以及各参数的作用。</p>" +
        "</div>" +
        '<div class="explain-bar">' +
          '<div class="explain-field"><input id="explainInput" class="explain-input" type="text" autocomplete="off" spellcheck="false" placeholder="在此输入一条命令，如 ls -lah /var/log" /></div>' +
          '<button id="explainBtn" class="btn-primary" type="button">查询含义</button>' +
        "</div>" +
        '<div id="explainResult" class="explain-result"></div>' +
      "</section>";
    var $input = document.getElementById("explainInput");
    var $btn = document.getElementById("explainBtn");
    var run = function () { explainRun($input.value); };
    $btn.onclick = run;
    $input.addEventListener("keydown", function (e) { if (e.key === "Enter") run(); });
    $input.focus();
  }
  function explainRun(raw) {
    var $res = document.getElementById("explainResult");
    if (!$res) return;
    if (!raw || !raw.trim()) {
      $res.innerHTML = '<div class="explain-hint">请输入一条命令后再点击「查询含义」。</div>';
      return;
    }
    var tokens = shellTokenize(raw);
    var found = findCmdByTokens(tokens);
    var cmd = found.cmd;
    if (!cmd) {
      var cmdName = tokens[0];
      var sug = fuzzySuggest(cmdName, explainGroup);
      var sHtml = sug.length
        ? '<div class="cmd-grid">' + sug.map(function (c) {
            var g = groupOf(c);
            return '<div class="cmd-card ' + g + '" data-name="' + esc(c.name) + '">' +
              '<div class="cmd-card-top"><span class="cmd-group-tag ' + g + '">' + (g === "linux" ? "LINUX" : "GIT") + "</span></div>" +
              '<div class="name">' + esc(c.name) + "</div>" +
              '<div class="desc">' + esc(c.description) + "</div></div>";
          }).join("") + "</div>"
        : '<div class="explain-hint">指令库中也没有与「' + esc(cmdName) + '」相关的命令，试试更通用的关键词。</div>';
      $res.innerHTML = '<div class="explain-notfound">' +
        '<div class="section-title">未收录命令「' + esc(cmdName) + '」</div>' +
        '<p class="explain-sub">是否想查询以下相近命令？（点击卡片可查看含义）</p>' +
        sHtml + "</div>";
      bindExplainResult();
      return;
    }
    $res.innerHTML = renderExplainDetail(cmd, tokens);
    bindExplainResult();
  }
  function bindExplainResult() {
    var $res = document.getElementById("explainResult");
    if (!$res) return;
    Array.prototype.forEach.call($res.querySelectorAll(".copy-btn, .copy-cmd-btn"), function (btn) {
      btn.onclick = function (e) { e.stopPropagation(); copyText(btn.getAttribute("data-copy"), btn); };
    });
    Array.prototype.forEach.call($res.querySelectorAll(".cmd-card"), function (card) {
      card.onclick = function () { explainRun(card.getAttribute("data-name")); };
    });
  }

  $tabseg.addEventListener("click", function (e) {
    var b = e.target.closest(".tab"); if (!b) return;
    setView(b.getAttribute("data-tab"));
  });
  if ($settingsBtn) {
    $settingsBtn.addEventListener("click", function () { openSettings(); });
  }

  /* ---------- 任务 → 指令生成 ---------- */
  var genIndex = null;
  var TASK_INTENTS = [
    ["删除", ["删除", "移除", "清空", "delete", "rm"]],
    ["查找", "搜索", "找", ["查找", "搜索", "找", "find", "grep", "locate", "search"]],
    ["复制", "拷贝", ["复制", "拷贝", "copy", "cp"]],
    ["移动", "重命名", ["移动", "重命名", "rename", "mv"]],
    ["压缩", ["压缩", "compress", "tar", "gzip", "zip"]],
    ["解压", "解压缩", ["解压", "解压缩", "extract", "untar", "unzip", "unxz"]],
    ["查看", "显示", "读", ["查看", "显示", "读", "view", "cat", "show", "less"]],
    ["编辑", ["编辑", "edit", "vim"]],
    ["权限", ["权限", "permission", "chmod", "chown"]],
    ["进程", ["进程", "process", "ps", "kill"]],
    ["网络", ["网络", "network", "ping", "curl", "wget", "ss", "netstat"]],
    ["磁盘", "空间", ["磁盘", "空间", "disk", "df", "du"]],
    ["提交", ["提交", "commit"]],
    ["分支", ["分支", "branch"]],
    ["合并", ["合并", "merge"]],
    ["回滚", "撤销", "复原", ["回滚", "撤销", "复原", "reset", "revert"]],
    ["暂存", "储藏", ["暂存", "储藏", "stash"]],
    ["远程", "推送", "拉取", "同步", ["远程", "推送", "拉取", "同步", "remote", "push", "pull"]],
    ["标签", ["标签", "tag"]],
    ["日志", "历史", ["日志", "历史", "log"]],
    ["创建", "新建", ["创建", "新建", "create", "mkdir", "touch"]],
    ["用户", ["用户", "user", "adduser"]],
    ["安装", ["安装", "install", "apt", "yum", "dnf"]],
    ["更新", ["更新", "update", "upgrade"]],
    ["监控", ["监控", "monitor", "top", "htop", "watch"]],
    ["关机和重启", ["关机", "重启", "shutdown", "reboot", "poweroff"]],
    ["环境变量", ["环境变量", "environment", "export", "env"]],
    ["定时", "计划任务", ["定时", "计划任务", "cron", "schedule"]],
    ["端口", ["端口", "port"]],
    ["连接", ["连接", "ssh", "connect"]],
    ["下载", ["下载", "download", "wget", "curl"]],
    ["上传", ["上传", "upload", "scp"]],
    ["对比", ["对比", "比较", "diff"]],
    ["统计", ["统计", "计数", "count", "wc"]],
    ["排序", ["排序", "sort"]],
    ["去重", ["去重", "unique", "uniq"]],
    ["截取", ["截取", "截取行", "head", "tail"]],
    ["替换", ["替换", "sed", "replace"]],
    ["提权", ["提权", "sudo"]],
    ["打包", ["打包", "archive", "tar"]]
  ];
  function cjkBigrams(s) {
    var runs = [], cur = "";
    for (var i = 0; i < s.length; i++) {
      var code = s.charCodeAt(i);
      if (code >= 0x4e00 && code <= 0x9fff) { cur += s.charAt(i); }
      else { if (cur) { runs.push(cur); cur = ""; } }
    }
    if (cur) runs.push(cur);
    var out = [];
    runs.forEach(function (r) {
      for (var i = 0; i + 1 < r.length; i++) out.push(r.substr(i, 2));
    });
    return out;
  }
  function buildGenIndex() {
    if (genIndex) return genIndex;
    genIndex = CMDS.map(function (c) {
      var cat = catMap[c.category];
      var text = [c.name, c.description, (c.keywords || []).join(" "), cat ? cat.name : "",
        (c.examples || []).map(function (e) { return e.cmd + " " + e.desc; }).join(" ")
      ].join(" ").toLowerCase();
      return { c: c, text: text, bg: cjkBigrams(text) };
    });
    return genIndex;
  }
  function genScore(item, qBg, qLower, qTokens) {
    var s = 0, c = item.c;
    (c.keywords || []).forEach(function (kw) {
      if (qLower.indexOf(kw.toLowerCase()) !== -1) s += 3;
    });
    // 抑制与当前任务无关的 Vim 单字符动作命令（a/b/o/O/G/0 等及 /pattern）造成的噪声
    if (c.name.length === 1 || c.name.charAt(0) === "/" || c.name.charAt(0) === ":") {
      if (qLower.indexOf("vim") === -1 && qLower.indexOf("编辑") === -1 && qLower.indexOf("vi") === -1) s -= 6;
    }
    if (qLower.indexOf(c.name.toLowerCase()) !== -1) s += 6;
    var cat = catMap[c.category];
    if (cat && qLower.indexOf(cat.name.toLowerCase()) !== -1) s += 1;
    TASK_INTENTS.forEach(function (grp) {
      var triggers = grp.slice(0, grp.length - 1);
      var targets = grp[grp.length - 1];
      var hit = triggers.some(function (t) { return qLower.indexOf(String(t).toLowerCase()) !== -1; });
      if (hit) {
        targets.forEach(function (tg) {
          if (item.text.indexOf(String(tg).toLowerCase()) !== -1) s += 2;
        });
      }
    });
    (c.examples || []).forEach(function (e) {
      e.cmd.toLowerCase().split(/\s+/).forEach(function (t) {
        if (t && qTokens.indexOf(t) !== -1) s += 2;
      });
    });
    var overlap = 0;
    item.bg.forEach(function (b) { if (qBg.indexOf(b) !== -1) overlap++; });
    s += overlap;
    return s;
  }
  function extractTarget(query) {
    var m = query.match(/"([^"]+)"/) || query.match(/'([^']+)'/);
    if (m) return m[1];
    var toks = shellTokenize(query);
    for (var i = 0; i < toks.length; i++) {
      if (/[\/.]/.test(toks[i]) && !/^-/.test(toks[i])) return toks[i];
    }
    return null;
  }
  function buildSuggestion(cmd, query) {
    var exs = cmd.examples || [];
    if (!exs.length) return { cmd: cmd.name, filled: false, base: "" };
    var qBg = cjkBigrams(query.toLowerCase());
    var best = exs[0], bestScore = -1;
    exs.forEach(function (e) {
      var bg = cjkBigrams(e.desc.toLowerCase());
      var ov = 0; bg.forEach(function (b) { if (qBg.indexOf(b) !== -1) ov++; });
      if (ov > bestScore) { bestScore = ov; best = e; }
    });
    var cmdStr = best.cmd;
    var target = extractTarget(query);
    if (target) {
      var parts = cmdStr.split(/(\s+)/);
      var ph = [];
      parts.forEach(function (p, i) {
        if (p && /^[\u4e00-\u9fff]+$/.test(p)) ph.push(i);
      });
      if (ph.length === 1) {
        parts[ph[0]] = target;
        return { cmd: parts.join(""), filled: true, base: best.cmd };
      }
    }
    return { cmd: cmdStr, filled: false, base: best.cmd };
  }
  function genChip(t) {
    return '<button class="gen-chip" type="button" data-task="' + esc(t) + '">' + esc(t) + "</button>";
  }
  function renderGenerateHome() {
    $content.innerHTML =
      '<section class="generate">' +
        '<div class="generate-head">' +
          "<h2>任务 → 指令生成</h2>" +
          "<p>用一句话描述你想完成的任务，例如「删除当前目录所有 .log 文件」「把本地修改提交并推送到远程」，系统会从全库命令中匹配最相关的指令，并给出可直接执行的示例。</p>" +
        "</div>" +
        '<div class="generate-bar">' +
          '<div class="generate-field"><input id="genInput" class="generate-input" type="text" autocomplete="off" spellcheck="false" placeholder="描述你的任务，例如：查找包含 error 的日志文件" /></div>' +
          '<button id="genBtn" class="btn-primary" type="button">生成指令</button>' +
        "</div>" +
        '<div class="gen-chips">' +
          genChip("删除当前目录所有 .log 文件") +
          genChip("查看大文件占用空间") +
          genChip("把修改提交并推送到远程") +
          genChip("查找包含 error 的日志") +
          genChip("解压 tar.gz 到当前目录") +
          genChip("修改文件权限为 755") +
        "</div>" +
        '<div id="genResult" class="generate-result"></div>' +
      "</section>";
    var $input = document.getElementById("genInput");
    var $btn = document.getElementById("genBtn");
    var run = function () { generateRun($input.value); };
    $btn.onclick = run;
    $input.addEventListener("keydown", function (e) { if (e.key === "Enter") run(); });
    Array.prototype.forEach.call($content.querySelectorAll(".gen-chip"), function (ch) {
      ch.onclick = function () { $input.value = ch.getAttribute("data-task"); generateRun($input.value); };
    });
    $input.focus();
  }
  function generateRun(raw) {
    var $res = document.getElementById("genResult");
    if (!$res) return;
    if (!raw || !raw.trim()) {
      $res.innerHTML = '<div class="generate-hint">请先描述你想完成的任务，再点击「生成指令」。</div>';
      return;
    }
    var idx = buildGenIndex();
    var qLower = raw.toLowerCase();
    var qTokens = shellTokenize(raw).map(function (t) { return t.toLowerCase(); });
    var qBg = cjkBigrams(qLower);
    var scored = idx.map(function (item) {
      return { item: item, score: genScore(item, qBg, qLower, qTokens) };
    }).filter(function (x) { return x.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 6);
    if (!scored.length) {
      var sug = fuzzySuggest(qTokens[0] || raw, genGroup);
      var sHtml = sug.length
        ? '<div class="cmd-grid">' + sug.map(function (c) {
            var g = groupOf(c);
            return '<div class="cmd-card ' + g + '" data-name="' + esc(c.name) + '">' +
              '<div class="cmd-card-top"><span class="cmd-group-tag ' + g + '">' + (g === "linux" ? "LINUX" : "GIT") + "</span></div>" +
              '<div class="name">' + esc(c.name) + "</div>" +
              '<div class="desc">' + esc(c.description) + "</div></div>";
          }).join("") + "</div>"
        : '<div class="generate-hint">指令库中也没有与「' + esc(raw) + '」相关的命令，试试更具体的动词（如 删除 / 查找 / 压缩 / 提交）。</div>';
      $res.innerHTML = '<div class="generate-notfound">' +
        '<div class="section-title">未匹配到合适的命令</div>' +
        '<p class="gen-sub">没有找到与「' + esc(raw) + '」相关的指令，可试着换更具体的说法。</p>' +
        sHtml + "</div>";
      bindGenerateResult();
      return;
    }
    var html = '<div class="gen-summary">共匹配到 <b>' + scored.length + '</b> 条相关命令，按相关度排序（点击「查看含义」可展开完整说明）：</div>';
    scored.forEach(function (x, i) {
      var c = x.item.c;
      var g = groupOf(c);
      var sug = buildSuggestion(c, raw);
      var cls = i === 0 ? "gen-card top" : "gen-card";
      html += '<div class="' + cls + '">' +
        '<div class="gen-card-head">' +
          '<span class="gen-rank">#' + (i + 1) + '</span>' +
          '<span class="cmd-group-tag ' + g + '">' + (g === "linux" ? "LINUX" : "GIT") + '</span>' +
          '<span class="gen-name">' + esc(c.name) + '</span>' +
          '<button class="copy-cmd-btn" data-copy="' + esc(sug.cmd) + '">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>复制命令</button>' +
          '<button class="gen-detail-btn" data-name="' + esc(c.name) + '">查看含义 ›</button>' +
        "</div>" +
        '<div class="lead">' + esc(c.description) + "</div>" +
        '<div class="badges"><span class="badge freq-' + c.frequency + '">使用频率：' + c.frequency + '</span>' +
          '<span class="badge diff-' + c.difficulty + '">难度：' + c.difficulty + '</span></div>' +
        '<div class="gen-reco">' +
          '<div class="gen-reco-label">推荐命令' + (sug.filled ? '（已按你的任务填充参数）' : '') + '</div>' +
          '<div class="gen-cmd-row"><code class="gen-cmd">' + esc(sug.cmd) + '</code>' +
          '<button class="copy-btn" data-copy="' + esc(sug.cmd) + '">复制</button></div>' +
        "</div>";
      var others = (c.examples || []).filter(function (e) { return e.cmd !== sug.base; });
      if (others.length) {
        html += '<div class="gen-examples"><div class="gen-ex-label">其它常见用法</div>';
        others.slice(0, 3).forEach(function (e) {
          html += '<div class="gen-ex-item"><code class="gen-ex-cmd">' + esc(e.cmd) + '</code><span class="gen-ex-desc">' + esc(e.desc) + "</span></div>";
        });
        html += "</div>";
      }
      html += "</div>";
    });
    $res.innerHTML = html;
    bindGenerateResult();
  }
  function bindGenerateResult() {
    var $res = document.getElementById("genResult");
    if (!$res) return;
    Array.prototype.forEach.call($res.querySelectorAll(".copy-btn, .copy-cmd-btn"), function (btn) {
      btn.onclick = function (e) { e.stopPropagation(); copyText(btn.getAttribute("data-copy"), btn); };
    });
    function openExplain(name) {
      setView("explain");
      var $in = document.getElementById("explainInput");
      if ($in) { $in.value = name; explainRun(name); }
    }
    Array.prototype.forEach.call($res.querySelectorAll(".gen-detail-btn, .cmd-card"), function (el) {
      el.onclick = function (e) { e.stopPropagation(); openExplain(el.getAttribute("data-name")); };
    });
  }

  /* ---------- 熟练度检测（A 自测清单 + B 实战任务） ---------- */
  function cmdsByGroup(g) { return CMDS.filter(function (c) { return groupOf(c) === g; }); }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function dedupe(a) { var seen = {}, out = []; a.forEach(function (x) { if (!seen[x]) { seen[x] = 1; out.push(x); } }); return out; }

  var profState = { g: null, mode: "self", marks: {} };

  function renderQuizHome() {
    var html = '<div class="mod-home">' +
      '<div class="mod-head"><h2>指令熟练度检测</h2>' +
      '<p>不打选择题——用「自测清单」逐条自评，或用「实战任务」在场景里手写命令，真正测出你会不会。</p></div>' +
      '<div class="grp-pick">' +
        grpPickBtn("linux", "Linux 自测", "Linux（含 Vim）命令") +
      '</div>' +
      '<div class="mod-note">两种模式均纯本地运行，无需联网或 Key：<b>自测清单</b>帮你生成掌握度地图；<b>实战任务</b>给出中文场景，由你手写命令并即时校验。</div>' +
      '</div>';
    $content.innerHTML = html;
    Array.prototype.forEach.call($content.querySelectorAll(".grp-pick-btn"), function (b) {
      b.onclick = function () { profState.g = b.getAttribute("data-g"); profState.mode = "self"; renderProfPanel(); };
    });
  }
  function grpPickBtn(g, title, sub) {
    return '<button class="grp-pick-btn ' + g + '" data-g="' + g + '">' +
      '<span class="gp-title">' + title + '</span><span class="gp-sub">' + sub + '</span></button>';
  }

  function renderProfPanel() {
    var gLabel = profState.g === "linux" ? "Linux" : "Git";
    $content.innerHTML = '<div class="mod-home">' +
      '<div class="prof-bar">' +
        '<button class="prof-back" id="profBack">← 返回选择</button>' +
        '<span class="prof-tag">当前分组：' + gLabel + '</span>' +
      '</div>' +
      '<div class="prof-subtabs">' +
        '<button class="subtab ' + (profState.mode === "self" ? "active" : "") + '" data-mode="self">自测清单</button>' +
        '<button class="subtab ' + (profState.mode === "practice" ? "active" : "") + '" data-mode="practice">实战任务</button>' +
      '</div>' +
      '<div id="profBody"></div>' +
      '</div>';
    document.getElementById("profBack").onclick = function () { profState.g = null; renderQuizHome(); };
    Array.prototype.forEach.call($content.querySelectorAll(".subtab"), function (b) {
      b.onclick = function () { profState.mode = b.getAttribute("data-mode"); renderProfPanel(); };
    });
    if (profState.mode === "self") renderSelfCheck();
    else { practiceState = null; renderPractice(); }
  }

  /* ===== A 自测清单 + 掌握度地图 ===== */
  function selfWeight(v) { return v === "known" ? 1 : v === "fuzzy" ? 0.5 : 0; }
  function renderSelfCheck() {
    var g = profState.g;
    var cmds = cmdsByGroup(g);
    var total = cmds.length, marked = 0, sum = 0;
    cmds.forEach(function (c) { var v = profState.marks[c.id]; if (v) { marked++; sum += selfWeight(v); } });
    var mastery = total ? Math.round(sum / total * 100) : 0;

    var byCat = {};
    cmds.forEach(function (c) { (byCat[c.category] = byCat[c.category] || []).push(c); });
    var catOrder = CATS.filter(function (c) { return c.group === g; });

    var catHtml = catOrder.map(function (cat) {
      var list = byCat[cat.id] || [];
      if (!list.length) return "";
      var rows = list.map(function (c) {
        var v = profState.marks[c.id];
        return '<div class="self-row" data-id="' + esc(c.id) + '">' +
          '<div class="self-cmd"><code>' + esc(c.name) + '</code><span>' + esc(c.description || "") + '</span></div>' +
          '<div class="mk-btns">' +
            '<button class="mk-btn ' + (v === "known" ? "on-known" : "") + '" data-v="known">已掌握</button>' +
            '<button class="mk-btn ' + (v === "fuzzy" ? "on-fuzzy" : "") + '" data-v="fuzzy">模糊</button>' +
            '<button class="mk-btn ' + (v === "unknown" ? "on-unknown" : "") + '" data-v="unknown">不会</button>' +
          '</div></div>';
      }).join("");
      return '<div class="self-cat"><div class="self-cat-head"><h4>' + esc(cat.name) + '</h4>' +
        '<span class="cat-count">' + list.length + ' 条</span>' +
        '<span class="cat-quick"><button class="mini-btn" data-catall="' + esc(cat.id) + '" data-v="known">全标已掌握</button>' +
        '<button class="mini-btn" data-catall="' + esc(cat.id) + '" data-v="unknown">全标不会</button></span></div>' +
        rows + '</div>';
    }).join("");

    var body = document.getElementById("profBody");
    body.innerHTML = '<div class="self-summary">' +
      '<div class="self-ring">' + mastery + '<small>% 掌握度</small></div>' +
      '<div class="self-meta">已自评 ' + marked + ' / ' + total + ' 条<br>已掌握=100% · 模糊=50% · 不会=0%</div>' +
      '<div class="self-actions">' +
        (marked ? '<button class="btn-primary" id="selfReport">生成掌握度地图</button>' : '') +
        '<button class="btn-ghost sm" id="selfReset">重置</button>' +
      '</div></div>' + catHtml;
    if (marked) document.getElementById("selfReport").onclick = renderSelfReport;
    document.getElementById("selfReset").onclick = function () { profState.marks = {}; renderSelfCheck(); };

    Array.prototype.forEach.call(body.querySelectorAll(".mk-btn"), function (b) {
      b.onclick = function () {
        var row = b.closest(".self-row"); var id = row.getAttribute("data-id");
        var v = b.getAttribute("data-v");
        if (profState.marks[id] === v) delete profState.marks[id]; else profState.marks[id] = v;
        renderSelfCheck();
      };
    });
    Array.prototype.forEach.call(body.querySelectorAll(".mini-btn"), function (b) {
      b.onclick = function () {
        var catId = b.getAttribute("data-catall"); var v = b.getAttribute("data-v");
        (byCat[catId] || []).forEach(function (c) { profState.marks[c.id] = v; });
        renderSelfCheck();
      };
    });
  }
  function renderSelfReport() {
    var g = profState.g;
    var cmds = cmdsByGroup(g);
    var total = cmds.length, sum = 0, mastered = 0, covered = 0;
    cmds.forEach(function (c) {
      var v = profState.marks[c.id];
      if (v) { covered++; sum += selfWeight(v); if (v === "known") mastered++; }
    });
    var mastery = total ? Math.round(sum / total * 100) : 0;
    var level = mastery >= 85 ? "精通" : mastery >= 65 ? "熟练" : mastery >= 40 ? "了解" : "初学者";

    var byCat = {};
    cmds.forEach(function (c) {
      byCat[c.category] = byCat[c.category] || { t: 0, c: 0 };
      byCat[c.category].t++;
      if (profState.marks[c.id] === "known") byCat[c.category].c++;
    });
    var catOrder = CATS.filter(function (c) { return c.group === g; });
    var catHtml = catOrder.map(function (cat) {
      var s = byCat[cat.id]; if (!s || !s.t) return "";
      var pct = Math.round(s.c / s.t * 100);
      return '<div class="cat-bar"><span class="cb-name">' + esc(cat.name) + '</span>' +
        '<span class="cb-track"><span class="cb-fill" style="width:' + pct + '%"></span></span>' +
        '<span class="cb-pct">' + pct + '%</span></div>';
    }).join("");

    var weak = cmds.filter(function (c) { var v = profState.marks[c.id]; return v === "fuzzy" || v === "unknown"; });
    var weakHtml = weak.length
      ? weak.map(function (c) {
          var tag = profState.marks[c.id] === "fuzzy" ? "模糊" : "不会";
          return '<div class="weak-item"><code>' + esc(c.name) + '</code><span>[' + tag + '] ' + esc(c.description || "") + '</span></div>';
        }).join("")
      : '<div class="weak-none">自评无薄弱点，掌握扎实。</div>';

    $content.innerHTML = '<div class="quiz-report">' +
      '<div class="rep-head"><div class="rep-level">' + level + '</div>' +
        '<div class="rep-score">掌握度（按自评加权）<b>' + mastery + '%</b><br><span class="rep-sub">已掌握 ' + mastered + ' / ' + total + ' 条 · 自评覆盖 ' + covered + ' 条</span></div></div>' +
      '<div class="rep-section"><h4>分类掌握度（已掌握占比）</h4>' + catHtml + '</div>' +
      '<div class="rep-section"><h4>薄弱命令（建议复习）</h4>' + weakHtml + '</div>' +
      '<div class="rep-actions"><button class="btn-primary" id="selfBack">返回清单继续自评</button>' +
        '<button class="btn-ghost" id="selfHome">返回选择</button></div>' +
      '</div>';
    document.getElementById("selfBack").onclick = function () { renderSelfCheck(); };
    document.getElementById("selfHome").onclick = function () { profState.g = null; renderQuizHome(); };
  }

  /* ===== B 实战任务模拟 ===== */
  function taskTokens(c) {
    var base = (c.name || "").trim();
    var primary = [];
    if (c.examples && c.examples[0]) {
      c.examples[0].cmd.split(/\s+/).forEach(function (t) { if (/^-/.test(t)) primary.push(t); });
    }
    primary = dedupe(primary);
    return { base: base, primary: primary };
  }
  function validateCmd(input, tk) {
    var s = (input || "").trim().toLowerCase();
    if (!s) return { ok: false, reason: "未输入命令" };
    var tokens = s.split(/\s+/);
    var baseToks = tk.base.toLowerCase().split(/\s+/).filter(Boolean);
    var missBase = baseToks.filter(function (t) { return tokens.indexOf(t) < 0; });
    if (missBase.length) return { ok: false, reason: "缺少核心命令：" + missBase.join(" ") };
    var missFlag = tk.primary.filter(function (f) { return tokens.indexOf(f.toLowerCase()) < 0; });
    if (missFlag.length) return { ok: false, reason: "命令正确，但缺少必要参数：" + missFlag.join(" ") };
    return { ok: true, reason: "正确" };
  }

  var practiceState = null;
  function buildPracticePool(g) {
    var cmds = cmdsByGroup(g).filter(function (c) { return c.description; });
    return shuffle(cmds).slice(0, Math.min(10, cmds.length)).map(function (c) {
      return { cmd: c, tk: taskTokens(c), scenario: c.description, answered: false, result: null };
    });
  }
  function renderPractice() {
    if (!practiceState || practiceState.g !== profState.g) {
      practiceState = { g: profState.g, tasks: buildPracticePool(profState.g), idx: 0, correct: 0, results: [] };
    }
    if (!practiceState.tasks.length) { document.getElementById("profBody").innerHTML = '<div class="empty">该分组暂无可用场景任务。</div>'; return; }
    if (practiceState.idx >= practiceState.tasks.length) { renderPracticeReport(); return; }
    var t = practiceState.tasks[practiceState.idx];
    var n = practiceState.idx + 1, total = practiceState.tasks.length;
    var body = document.getElementById("profBody");
    body.innerHTML = '<div class="practice-q">' +
      '<div class="practice-progress">第 ' + n + ' / ' + total + ' 题 · 已答对 ' + practiceState.correct + '</div>' +
      '<div class="practice-scenario">请在下方写出完成该任务的命令：<br><b>' + esc(t.scenario) + '</b></div>' +
      '<input class="practice-input" id="pInput" type="text" autocomplete="off" placeholder="例如：' + esc(t.tk.base) + (t.tk.primary.length ? ' ' + t.tk.primary.join(' ') : '') + ' …" />' +
      '<div class="practice-foot">' +
        '<button class="btn-primary" id="pSubmit">提交</button>' +
        '<button class="btn-ghost sm" id="pSkip">跳过</button>' +
        '<button class="btn-ghost sm" id="pEnd">结束并出报告</button>' +
      '</div>' +
      '<div id="pFeedback"></div>' +
      '</div>';
    var $input = document.getElementById("pInput");
    $input.focus();
    function next() {
      practiceState.idx++;
      if (practiceState.idx >= practiceState.tasks.length) renderPracticeReport();
      else renderPractice();
    }
    function submit() {
      if (t.answered) return;
      t.answered = true;
      var res = validateCmd($input.value, t.tk);
      t.result = res;
      if (res.ok) practiceState.correct++;
      practiceState.results.push({ cmd: t.cmd, input: $input.value, res: res });
      var fb = document.getElementById("pFeedback");
      fb.className = "practice-feedback " + (res.ok ? "ok" : "bad");
      fb.innerHTML = (res.ok ? "✓ 正确！" : "✗ " + esc(res.reason)) +
        '<div class="practice-hint">参考命令：<code>' + esc(t.cmd.name) + (t.tk.primary.length ? ' ' + t.tk.primary.join(' ') : '') + '</code>' +
        (t.cmd.examples && t.cmd.examples[0] ? ' &nbsp;示例：<code>' + esc(t.cmd.examples[0].cmd) + '</code>' : '') + '</div>';
      $input.disabled = true;
      document.getElementById("pSubmit").disabled = true;
      var skip = document.getElementById("pSkip");
      skip.textContent = "下一题 →";
      skip.onclick = next;
    }
    function skip() {
      if (t.answered) { next(); return; }
      t.answered = true;
      practiceState.results.push({ cmd: t.cmd, input: $input.value, res: { ok: false, reason: "已跳过" } });
      next();
    }
    document.getElementById("pSubmit").onclick = submit;
    $input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    document.getElementById("pSkip").onclick = skip;
    document.getElementById("pEnd").onclick = renderPracticeReport;
  }
  function renderPracticeReport() {
    var total = practiceState.results.length;
    var acc = total ? Math.round(practiceState.correct / total * 100) : 0;
    var level = acc >= 85 ? "精通" : acc >= 65 ? "熟练" : acc >= 40 ? "了解" : "初学者";
    var weak = practiceState.results.filter(function (r) { return !r.res.ok; });
    var weakHtml = weak.length
      ? weak.map(function (r) {
          return '<div class="weak-item"><code>' + esc(r.cmd.name) + '</code><span>你的输入：' + esc(r.input || "（跳过）") + ' · ' + esc(r.res.reason) + '</span></div>';
        }).join("")
      : '<div class="weak-none">实战任务全部答对，命令运用熟练。</div>';
    $content.innerHTML = '<div class="quiz-report">' +
      '<div class="rep-head"><div class="rep-level">' + level + '</div>' +
        '<div class="rep-score">正确率<b>' + acc + '%</b><br><span class="rep-sub">答对 ' + practiceState.correct + ' / ' + total + ' 题</span></div></div>' +
      '<div class="rep-section"><h4>薄弱命令（建议复习）</h4>' + weakHtml + '</div>' +
      '<div class="rep-actions"><button class="btn-primary" id="pAgain">再来一组（' + (practiceState.g === "linux" ? "Linux" : "Git") + '）</button>' +
        '<button class="btn-ghost" id="pHome">返回选择</button></div>' +
      '</div>';
    document.getElementById("pAgain").onclick = function () { practiceState = null; renderPractice(); };
    document.getElementById("pHome").onclick = function () { profState.g = null; practiceState = null; renderQuizHome(); };
  }

  /* ---------- AI 模拟面试 ---------- */
  // 已内置市面上几乎所有主流大模型。kind: openai=OpenAI 兼容接口 / gemini=Google 原生 / anthropic=Anthropic 原生
  var PROVIDERS = {
    openrouter: {
      name: "OpenRouter（聚合网关 · 覆盖几乎所有模型）",
      url: "https://openrouter.ai/api/v1/chat/completions", kind: "openai",
      models: ["anthropic/claude-3.5-sonnet", "openai/gpt-4o", "openai/gpt-4o-mini", "google/gemini-2.0-flash-001", "meta-llama/llama-3.3-70b-instruct", "deepseek/deepseek-chat", "mistralai/mixtral-8x7b-instruct", "qwen/qwen-72b-instruct"]
    },
    openai: {
      name: "OpenAI（GPT-4o / o1 等）",
      url: "https://api.openai.com/v1/chat/completions", kind: "openai",
      models: ["gpt-4o", "gpt-4o-mini", "o1-mini", "o3-mini", "gpt-4-turbo"],
      note: "官方 API 默认禁止浏览器跨域，如遇 CORS 错误请改用 OpenRouter 或经代理中转"
    },
    anthropic: {
      name: "Anthropic（Claude）",
      url: "https://api.anthropic.com/v1/messages", kind: "anthropic",
      models: ["claude-3-5-sonnet-latest", "claude-3-5-haiku-latest", "claude-3-opus-latest"],
      note: "需 anthropic-version 头，浏览器直连可能受 CORS 限制"
    },
    deepseek: {
      name: "DeepSeek（深度求索）",
      url: "https://api.deepseek.com/v1/chat/completions", kind: "openai",
      models: ["deepseek-chat", "deepseek-reasoner"]
    },
    moonshot: {
      name: "Moonshot（Kimi）",
      url: "https://api.moonshot.cn/v1/chat/completions", kind: "openai",
      models: ["moonshot-v1-8k", "moonshot-v1-32k", "moonshot-v1-128k"]
    },
    qwen: {
      name: "通义千问（阿里 Qwen）",
      url: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", kind: "openai",
      models: ["qwen-plus", "qwen-max", "qwen-turbo", "qwen2.5-72b-instruct"]
    },
    zhipu: {
      name: "智谱 GLM（Zhipu）",
      url: "https://open.bigmodel.cn/api/paas/v4/chat/completions", kind: "openai",
      models: ["glm-4-plus", "glm-4-air", "glm-4-flash"]
    },
    groq: {
      name: "Groq（Llama 高速推理）",
      url: "https://api.groq.com/openai/v1/chat/completions", kind: "openai",
      models: ["llama-3.3-70b-versatile", "llama-3.1-8b-instant", "mixtral-8x7b-32768"]
    },
    gemini: {
      name: "Google Gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/models/", kind: "gemini",
      models: ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-2.0-flash"]
    },
    mistral: {
      name: "Mistral AI",
      url: "https://api.mistral.ai/v1/chat/completions", kind: "openai",
      models: ["mistral-large-latest", "mistral-small-latest", "open-mistral-7b"]
    },
    together: {
      name: "Together AI（聚合）",
      url: "https://api.together.xyz/v1/chat/completions", kind: "openai",
      models: ["meta-llama/Llama-3.3-70B-Instruct-Turbo", "deepseek-ai/DeepSeek-V3", "Qwen/Qwen2.5-72B-Instruct-Turbo"]
    }
  };
  function loadSettings() {
    try { return JSON.parse(localStorage.getItem("ivSettings") || "null"); } catch (e) { return null; }
  }
  function saveSettings(s) { try { localStorage.setItem("ivSettings", JSON.stringify(s)); } catch (e) {} }
  // 归一化：容忍旧配置里过期的服务商/模型名，避免直接访问 PROVIDERS[x].models 时崩溃
  function safeSettings(raw) {
    if (!raw || !raw.key) return null;
    var p = PROVIDERS[raw.provider];
    if (!p) p = PROVIDERS.openrouter;
    var model = (raw.model && p.models.indexOf(raw.model) !== -1) ? raw.model : p.models[0];
    return { provider: (PROVIDERS[raw.provider] ? raw.provider : "openrouter"), model: model, key: raw.key };
  }

  var ivState = null;

  function renderInterviewHome() {
    var s = safeSettings(loadSettings());
    var note = (s && s.key)
      ? '<div class="mod-note ok">已配置：' + ((PROVIDERS[s.provider] && PROVIDERS[s.provider].name) || s.provider || "未配置") + "（" + esc(s.model || "") + "）</div>"
      : '<div class="mod-note warn">尚未配置 API Key，点击右上角 ⚙ 设置后开始。</div>';
    $content.innerHTML = '<div class="mod-home">' +
      '<div class="mod-head"><h2>AI 模拟面试</h2>' +
      '<p>大模型扮演面试官，围绕 Linux 实时追问。需你自带 LLM API Key（浏览器直连，Key 仅发往对应服务商，站点不收集）。</p></div>' +
      '<div class="grp-pick">' +
        grpPickBtn("linux", "Linux 面试", "命令行 / 系统 / Vim 方向") +
      "</div>" + note + "</div>";
    Array.prototype.forEach.call($content.querySelectorAll(".grp-pick-btn"), function (b) {
      b.onclick = function () { startInterview(b.getAttribute("data-g")); };
    });
  }
  function startInterview(g) {
    var s = loadSettings();
    if (!s || !s.key) { pendingIvGroup = g; openSettings(); return; }
    ivState = { g: g, messages: [], ended: false };
    var dir = g === "linux" ? "Linux" : "Git";
    var sys = "你是一位资深的 " + dir + " 技术面试官，面向初学者与日常使用者。" +
      "请基于常见 " + dir + " 命令与原理，循序渐进地提问并追问，考察对方对命令的记忆、理解与实际排错能力。" +
      "每次只问一个问题，等对方回答后再追问。用简体中文，语气专业但友好。不要直接给答案，引导思考。";
    ivState.messages.push({ role: "system", content: sys });
    ivState.messages.push({ role: "user", content: "（请开始面试，提出第一个问题）" });
    $content.innerHTML = '<div class="iv-wrap">' +
      '<div class="iv-bar"><span class="iv-dir">' + dir + ' 模拟面试</span>' +
        '<button class="btn-ghost sm" id="ivEnd">结束并生成报告</button>' +
        '<button class="btn-ghost sm" id="ivQuit">退出</button></div>' +
      '<div class="iv-chat" id="ivChat"></div>' +
      '<div class="iv-inputbar"><textarea id="ivInput" rows="1" placeholder="输入你的回答…"></textarea>' +
        '<button class="btn-primary" id="ivSend">发送</button></div>' +
      "</div>";
    document.getElementById("ivEnd").onclick = endInterview;
    document.getElementById("ivQuit").onclick = function () { ivState = null; renderInterviewHome(); };
    var input = document.getElementById("ivInput");
    var send = document.getElementById("ivSend");
    function doSend() {
      var v = input.value.trim(); if (!v) return;
      input.value = "";
      appendMsg("user", v);
      ivState.messages.push({ role: "user", content: v });
      streamBot();
    }
    send.onclick = doSend;
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); doSend(); }
    });
    streamBot();
  }
  function appendMsg(role, text) {
    var chat = document.getElementById("ivChat");
    var div = document.createElement("div");
    div.className = "iv-msg " + role;
    div.innerHTML = '<div class="iv-bubble">' + (role === "bot" ? "" : esc(text)) + "</div>";
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
    return div.querySelector(".iv-bubble");
  }
  function streamBot() {
    var s = loadSettings();
    var btn = document.getElementById("ivSend"); if (btn) btn.disabled = true;
    var bubble = appendMsg("bot", "");
    var full = "";
    callLLM(s, ivState.messages, function (token) {
      full += token; bubble.textContent = full;
      var chat = document.getElementById("ivChat"); if (chat) chat.scrollTop = chat.scrollHeight;
    }, function () {
      ivState.messages.push({ role: "assistant", content: full });
      if (btn) btn.disabled = false;
    }, function (err) {
      bubble.textContent = "出错了：" + err;
      if (btn) btn.disabled = false;
    });
  }
  function endInterview() {
    if (!ivState || ivState.ended) return;
    ivState.ended = true;
    var input = document.getElementById("ivInput");
    var send = document.getElementById("ivSend");
    var endBtn = document.getElementById("ivEnd");
    if (input) input.disabled = true;
    if (send) send.disabled = true;
    if (endBtn) endBtn.style.display = "none";
    ivState.messages.push({ role: "user", content: "面试到此结束。请基于上面的对话，给出一份评价报告，包含：1) 技术深度评分（0-100）；2) 知识盲区；3) 表达与思路建议。用中文，分点列出。" });
    var chat = document.getElementById("ivChat");
    var wrap = document.createElement("div");
    wrap.className = "iv-msg bot";
    wrap.innerHTML = '<div class="iv-bubble iv-report-bubble">生成评价报告中…</div>';
    chat.appendChild(wrap);
    var bubble = wrap.querySelector(".iv-bubble");
    chat.scrollTop = chat.scrollHeight;
    var full = "";
    callLLM(loadSettings(), ivState.messages, function (token) {
      full += token; bubble.textContent = full; chat.scrollTop = chat.scrollHeight;
    }, function () {
      bubble.classList.add("report");
      var back = document.createElement("button");
      back.className = "btn-ghost sm"; back.textContent = "返回";
      back.onclick = function () { ivState = null; renderInterviewHome(); };
      bubble.appendChild(document.createElement("br"));
      bubble.appendChild(back);
    }, function (err) { bubble.textContent = "出错了：" + err; });
  }

  function callLLM(s, messages, onToken, onDone, onError) {
    if (!s || !s.key) { onError("尚未配置 API Key"); return; }
    var p = PROVIDERS[s.provider];
    if (!p) { onError("未知服务商"); return; }
    // 容忍旧配置中过期的模型名：回退到该服务商首个可用模型，避免直接 4xx
    if (p.models.indexOf(s.model) === -1) {
      s = { provider: s.provider, model: p.models[0], key: s.key };
    }
    var sysText = (messages.filter(function (m) { return m.role === "system"; })[0] || {}).content || "";
    var chat = messages.filter(function (m) { return m.role !== "system"; });
    var headers = { "Content-Type": "application/json" };
    var url = p.url, body;

    if (p.kind === "openai") {
      headers["Authorization"] = "Bearer " + s.key;
      body = { model: s.model, messages: messages, stream: true, temperature: 0.7 };
    } else if (p.kind === "gemini") {
      var contents = chat.map(function (m) {
        return { role: m.role === "user" ? "user" : "model", parts: [{ text: m.content }] };
      });
      body = {
        contents: contents,
        systemInstruction: { parts: [{ text: sysText }] },
        generationConfig: { temperature: 0.7 }
      };
      url = p.url + s.model + ":streamGenerateContent?alt=sse&key=" + encodeURIComponent(s.key);
    } else { // anthropic
      headers["x-api-key"] = s.key;
      headers["anthropic-version"] = "2023-06-01";
      var anthropicMsgs = chat.map(function (m) {
        return { role: m.role === "user" ? "user" : "assistant", content: m.content };
      });
      body = { model: s.model, max_tokens: 2048, system: sysText, messages: anthropicMsgs, stream: true };
    }

    function tokenFromJson(json) {
      if (p.kind === "openai") {
        return (json.choices && json.choices[0] && json.choices[0].delta && json.choices[0].delta.content) || "";
      } else if (p.kind === "gemini") {
        return (json.candidates && json.candidates[0] && json.candidates[0].content && json.candidates[0].content.parts && json.candidates[0].content.parts[0] && json.candidates[0].content.parts[0].text) || "";
      }
      return (json.delta && json.delta.text) || ""; // anthropic
    }

    var ctrl = null, timer = null;
    function cleanup() { if (timer) { clearTimeout(timer); timer = null; } }
    if (typeof AbortController !== "undefined") {
      ctrl = new AbortController();
      timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 90000);
    }
    var reqOpts = { method: "POST", headers: headers, body: JSON.stringify(body) };
    if (ctrl) reqOpts.signal = ctrl.signal;
    fetch(url, reqOpts).then(function (r) {
      if (!r.ok) { return r.text().then(function (t) { throw new Error("HTTP " + r.status + " " + t.slice(0, 300)); }); }
      var reader = r.body.getReader();
      var dec = new TextDecoder();
      var buf = "";
      function pump() {
        return reader.read().then(function (res) {
          if (res.done) { cleanup(); onDone(); return; }
          buf += dec.decode(res.value, { stream: true });
          var lines = buf.split("\n");
          buf = lines.pop();
          lines.forEach(function (line) {
            line = line.trim();
            if (line.indexOf("data:") !== 0) return;
            var data = line.slice(5).trim();
            if (data === "[DONE]") return;
            try {
              var json = JSON.parse(data);
              var tok = tokenFromJson(json);
              if (tok) onToken(tok);
            } catch (e) {}
          });
          return pump();
        });
      }
      return pump();
    }).catch(function (e) {
      cleanup();
      if (e && e.name === "AbortError") onError("请求超时（90 秒），请检查网络或服务商状态");
      else onError(e.message || String(e));
    });
  }

  /* ---------- 设置弹窗 ---------- */
  function openSettings() {
    var s = safeSettings(loadSettings()) || { provider: "openrouter", model: PROVIDERS.openrouter.models[0], key: "" };
    var providerOpts = Object.keys(PROVIDERS).map(function (k) {
      return '<option value="' + k + '"' + (k === s.provider ? " selected" : "") + ">" + PROVIDERS[k].name + "</option>";
    }).join("");
    var modelOpts = PROVIDERS[s.provider].models.map(function (m) {
      return '<option value="' + m + '"' + (m === s.model ? " selected" : "") + ">" + m + "</option>";
    }).join("");
    var mask = document.createElement("div");
    mask.innerHTML = '<div class="modal-mask" id="modalMask"><div class="modal-card">' +
      '<div class="modal-head"><h3>面试设置（API Key）</h3><button class="modal-x" id="modalX" aria-label="关闭">×</button></div>' +
      '<p class="modal-desc">Key 仅保存在你的浏览器本地，只发往你选择的服务商，站点不收集。已内置 OpenAI / Anthropic / Google / DeepSeek / 通义千问 / 智谱 / Kimi / Groq / Mistral / Together 等市面主流大模型。</p>' +
      '<div class="field"><label>服务商</label><select id="setProvider">' + providerOpts + "</select></div>" +
      '<div class="modal-note" id="setNote"></div>' +
      '<div class="field"><label>模型</label><select id="setModel">' + modelOpts + "</select></div>" +
      '<div class="field"><label>API Key</label><input id="setKey" type="password" placeholder="粘贴你的 API Key" value="' + esc(s.key) + '"></div>' +
      '<div class="modal-help">获取 Key：OpenRouter → openrouter.ai/keys · OpenAI → platform.openai.com/api-keys · Anthropic → console.anthropic.com · Gemini → aistudio.google.com/apikey · DeepSeek → platform.deepseek.com · Moonshot/Kimi → platform.moonshot.cn · 通义千问 → dashscope.console.aliyun.com · 智谱 GLM → open.bigmodel.cn</div>' +
      '<div class="modal-actions"><button class="btn-ghost" id="setCancel">取消</button><button class="btn-primary" id="setSave">保存</button></div>' +
      "</div></div>";
    document.body.appendChild(mask.firstChild);
    var maskEl = document.getElementById("modalMask");
    function removeMask() { if (maskEl && maskEl.parentNode) maskEl.parentNode.removeChild(maskEl); }
    function onCancel() {
      removeMask();
      pendingIvGroup = null;
      if (document.body.getAttribute("data-tab") === "interview") renderInterviewHome();
    }
    document.getElementById("modalX").onclick = onCancel;
    document.getElementById("setCancel").onclick = onCancel;
    maskEl.addEventListener("click", function (e) { if (e.target === maskEl) onCancel(); });
    document.getElementById("setProvider").onchange = function () {
      var p = PROVIDERS[this.value];
      document.getElementById("setModel").innerHTML = p.models.map(function (m) { return '<option value="' + m + '">' + m + "</option>"; }).join("");
      var noteEl = document.getElementById("setNote");
      if (noteEl) noteEl.textContent = p.note || "";
    };
    (function initNote() {
      var p = PROVIDERS[s.provider];
      var noteEl = document.getElementById("setNote");
      if (noteEl) noteEl.textContent = p.note || "";
    })();
    document.getElementById("setSave").onclick = function () {
      var prov = document.getElementById("setProvider").value;
      var mdl = document.getElementById("setModel").value;
      var key = document.getElementById("setKey").value.trim();
      if (!key) { alert("请填写 API Key"); return; }
      saveSettings({ provider: prov, model: mdl, key: key });
      removeMask();
      if (pendingIvGroup) { var g = pendingIvGroup; pendingIvGroup = null; startInterview(g); }
      else if (document.body.getAttribute("data-tab") === "interview") renderInterviewHome();
    };
  }

  /* ---------- Init ---------- */
  document.body.setAttribute("data-tab", "lookup");
  renderSidebar();
  renderContent();
})();
