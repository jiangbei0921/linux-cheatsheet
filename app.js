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
    }
    window.scrollTo({ top: 0 });
  }

  $tabseg.addEventListener("click", function (e) {
    var b = e.target.closest(".tab"); if (!b) return;
    setView(b.getAttribute("data-tab"));
  });
  if ($settingsBtn) {
    $settingsBtn.addEventListener("click", function () { openSettings(); });
  }

  /* ---------- 熟练度检测 ---------- */
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
  function pickDistinct(pool, correct, n) {
    return shuffle(pool.filter(function (x) { return x !== correct; })).slice(0, n);
  }
  function diffWeight(d) { return d === "入门" ? 1 : d === "日常" ? 1.2 : 1.5; }

  function buildQuizPool(g) {
    var cmds = cmdsByGroup(g);
    var pool = [];
    cmds.forEach(function (c) {
      if (c.description) {
        pool.push({
          type: "回忆",
          stem: "命令 <code>" + esc(c.name) + "</code> 的作用是？",
          answer: c.description,
          options: shuffle(dedupe([c.description].concat(pickDistinct(cmds.map(function (x) { return x.description; }), c.description, 3)))),
          cmd: c
        });
        pool.push({
          type: "场景",
          stem: esc(c.description) + '<br><span class="q-hint">应选用哪条命令？</span>',
          answer: c.name,
          options: shuffle(dedupe([c.name].concat(pickDistinct(cmds.map(function (x) { return x.name; }), c.name, 3)))),
          cmd: c
        });
      }
      (c.examples || []).forEach(function (ex) {
        var toks = ex.cmd.split(/\s+/);
        var fi = -1;
        for (var i = 0; i < toks.length; i++) { if (/^-/.test(toks[i]) && toks[i] !== "-") { fi = i; break; } }
        if (fi < 0) return;
        var correct = toks[fi];
        var masked = toks.slice(); masked[fi] = "____";
        var flags = [];
        cmds.forEach(function (x) {
          (x.examples || []).forEach(function (e) {
            e.cmd.split(/\s+/).forEach(function (t) { if (/^-/.test(t) && t !== correct) flags.push(t); });
          });
        });
        if (!flags.length) return;
        pool.push({
          type: "补全",
          stem: "补全命令：<code>" + esc(masked.join(" ")) + "</code>",
          answer: correct,
          options: shuffle(dedupe([correct].concat(pickDistinct(flags, correct, 3)))),
          cmd: c
        });
      });
    });
    return pool;
  }

  var quizState = null;

  function renderQuizHome() {
    var html = '<div class="mod-home">' +
      '<div class="mod-head"><h2>指令熟练度检测</h2>' +
      '<p>从题库随机抽题，测你对命令的记忆与熟练度。纯本地运行，无需联网或 Key。</p></div>' +
      '<div class="grp-pick">' +
        grpPickBtn("linux", "Linux 检测", "测试 Linux（含 Vim）命令") +
        grpPickBtn("git", "Git 检测", "测试 Git 命令") +
      '</div>' +
      '<div class="mod-note">每次随机抽取 15 题，覆盖回忆 / 场景 / 补全三种题型，按难度加权评分并给出薄弱点。</div>' +
      '</div>';
    $content.innerHTML = html;
    Array.prototype.forEach.call($content.querySelectorAll(".grp-pick-btn"), function (b) {
      b.onclick = function () { startQuiz(b.getAttribute("data-g")); };
    });
  }
  function grpPickBtn(g, title, sub) {
    return '<button class="grp-pick-btn ' + g + '" data-g="' + g + '">' +
      '<span class="gp-title">' + title + '</span><span class="gp-sub">' + sub + '</span></button>';
  }
  function startQuiz(g) {
    var pool = buildQuizPool(g);
    if (!pool.length) { $content.innerHTML = '<div class="empty">该分组暂无可用题目。</div>'; return; }
    var qs = shuffle(pool).slice(0, Math.min(15, pool.length));
    qs.forEach(function (q) { q.user = null; });
    quizState = { g: g, qs: qs, idx: 0, correct: 0, weighted: 0, totalWeight: 0, wrong: [], answered: false };
    renderQuizQuestion();
  }
  function renderQuizQuestion() {
    var q = quizState.qs[quizState.idx];
    var n = quizState.idx + 1, total = quizState.qs.length;
    var opts = q.options.map(function (o, i) {
      return '<button class="quiz-opt" data-o="' + i + '"><span class="opt-k">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="opt-v">' + esc(o) + "</span></button>";
    }).join("");
    $content.innerHTML = '<div class="quiz-q">' +
      '<div class="quiz-progress">第 ' + n + ' / ' + total + ' 题<span class="q-type type-' + q.type + '">' + q.type + "题</span></div>" +
      '<div class="quiz-stem">' + q.stem + "</div>" +
      '<div class="quiz-opts">' + opts + "</div>" +
      '<div class="quiz-foot"><button class="btn-ghost" id="quizQuit">退出检测</button></div>' +
      "</div>";
    var optBtns = $content.querySelectorAll(".quiz-opt");
    Array.prototype.forEach.call(optBtns, function (b) {
      b.onclick = function () {
        if (quizState.answered) return;
        quizState.answered = true;
        var chosen = q.options[+b.getAttribute("data-o")];
        var correct = chosen === q.answer;
        Array.prototype.forEach.call(optBtns, function (ob) {
          var ov = q.options[+ob.getAttribute("data-o")];
          if (ov === q.answer) ob.classList.add("correct");
          else if (ob === b) ob.classList.add("wrong");
          ob.disabled = true;
        });
        var w = diffWeight(q.cmd.difficulty);
        quizState.totalWeight += w;
        if (correct) { quizState.correct++; quizState.weighted += w; }
        else { quizState.wrong.push(q); }
        setTimeout(function () {
          quizState.idx++; quizState.answered = false;
          if (quizState.idx >= quizState.qs.length) renderQuizReport();
          else renderQuizQuestion();
        }, 900);
      };
    });
    var quit = document.getElementById("quizQuit");
    if (quit) quit.onclick = function () { quizState = null; renderQuizHome(); };
  }
  function renderQuizReport() {
    var acc = quizState.totalWeight ? Math.round(quizState.weighted / quizState.totalWeight * 100) : 0;
    var level = acc >= 85 ? "精通" : acc >= 65 ? "熟练" : acc >= 40 ? "了解" : "初学者";
    var byCat = {};
    quizState.qs.forEach(function (q) {
      byCat[q.cmd.category] = byCat[q.cmd.category] || { c: 0, t: 0 };
      byCat[q.cmd.category].t++;
      if (quizState.wrong.indexOf(q) < 0) byCat[q.cmd.category].c++;
    });
    var catHtml = Object.keys(byCat).map(function (cid) {
      var s = byCat[cid]; var pct = s.t ? Math.round(s.c / s.t * 100) : 0;
      var cat = catMap[cid];
      return '<div class="cat-bar"><span class="cb-name">' + esc(cat ? cat.name : cid) + "</span>" +
        '<span class="cb-track"><span class="cb-fill" style="width:' + pct + '%"></span></span>' +
        '<span class="cb-pct">' + pct + "%</span></div>";
    }).join("");
    var weakHtml = quizState.wrong.length
      ? quizState.wrong.map(function (q) {
          return '<div class="weak-item"><code>' + esc(q.cmd.name) + "</code><span>" + esc(q.cmd.description) + "</span></div>";
        }).join("")
      : '<div class="weak-none">本题组无薄弱点，掌握扎实。</div>';
    $content.innerHTML = '<div class="quiz-report">' +
      '<div class="rep-head"><div class="rep-level">' + level + "</div>" +
        '<div class="rep-score">正确率（难度加权）<b>' + acc + '%</b><br><span class="rep-sub">答对 ' + quizState.correct + " / " + quizState.qs.length + " 题</span></div></div>" +
      '<div class="rep-section"><h4>分类掌握度</h4>' + catHtml + "</div>" +
      '<div class="rep-section"><h4>薄弱命令（建议复习）</h4>' + weakHtml + "</div>" +
      '<div class="rep-actions"><button class="btn-primary" id="quizAgain">再来一次（' + (quizState.g === "linux" ? "Linux" : "Git") + '）</button>' +
        '<button class="btn-ghost" id="quizBack">返回选择</button></div>' +
      "</div>";
    document.getElementById("quizAgain").onclick = function () { startQuiz(quizState.g); };
    document.getElementById("quizBack").onclick = function () { quizState = null; renderQuizHome(); };
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

  var ivState = null;

  function renderInterviewHome() {
    var s = loadSettings();
    var note = (s && s.key)
      ? '<div class="mod-note ok">已配置：' + PROVIDERS[s.provider].name + "（" + esc(s.model) + "）</div>"
      : '<div class="mod-note warn">尚未配置 API Key，点击右上角 ⚙ 设置后开始。</div>';
    $content.innerHTML = '<div class="mod-home">' +
      '<div class="mod-head"><h2>AI 模拟面试</h2>' +
      '<p>大模型扮演面试官，围绕 Linux / Git 实时追问。需你自带 LLM API Key（浏览器直连，Key 仅发往对应服务商，站点不收集）。</p></div>' +
      '<div class="grp-pick">' +
        grpPickBtn("linux", "Linux 面试", "命令行 / 系统 / Vim 方向") +
        grpPickBtn("git", "Git 面试", "版本控制 / 协作方向") +
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
    var p = PROVIDERS[s.provider];
    if (!p) { onError("未知服务商"); return; }
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

    fetch(url, { method: "POST", headers: headers, body: JSON.stringify(body) }).then(function (r) {
      if (!r.ok) { return r.text().then(function (t) { throw new Error("HTTP " + r.status + " " + t.slice(0, 300)); }); }
      var reader = r.body.getReader();
      var dec = new TextDecoder();
      var buf = "";
      function pump() {
        return reader.read().then(function (res) {
          if (res.done) { onDone(); return; }
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
    }).catch(function (e) { onError(e.message || String(e)); });
  }

  /* ---------- 设置弹窗 ---------- */
  function openSettings() {
    var s = loadSettings() || { provider: "openrouter", model: PROVIDERS.openrouter.models[0], key: "" };
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

  /* ---------- GitHub star/fork badge ---------- */
  var GH_REPO = "jiangbei0921/linux-git-cheatsheet";
  function fmtCount(n) {
    if (n == null || isNaN(n)) return "—";
    if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k";
    return String(n);
  }
  function loadGitHubStats() {
    var $stars = document.getElementById("ghStars");
    var $forks = document.getElementById("ghForks");
    if (!$stars || !$forks) return;
    try {
      var cached = JSON.parse(localStorage.getItem("gh_stats_cache") || "null");
      var now = Date.now();
      if (cached && cached.t && now - cached.t < 10 * 60 * 1000) {
        $stars.textContent = fmtCount(cached.stars);
        $forks.textContent = fmtCount(cached.forks);
        return;
      }
    } catch (e) {}
    fetch("https://api.github.com/repos/" + GH_REPO, { headers: { "Accept": "application/vnd.github+json" } })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (d) {
        var stars = d.stargazers_count, forks = d.forks_count;
        $stars.textContent = fmtCount(stars);
        $forks.textContent = fmtCount(forks);
        try {
          localStorage.setItem("gh_stats_cache", JSON.stringify({ t: Date.now(), stars: stars, forks: forks }));
        } catch (e) {}
      })
      .catch(function () {
        // 网络/CORS/限流失败时静默保留占位符，链接仍可正常跳转
      });
  }

  /* ---------- Init ---------- */
  document.body.setAttribute("data-tab", "lookup");
  renderSidebar();
  renderContent();
  loadGitHubStats();
})();
