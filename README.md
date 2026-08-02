# Linux 与 Git 指令速查指南

> 🌐 **在线使用**：[https://jiangbei0921.github.io/linux-git-cheatsheet/](https://jiangbei0921.github.io/linux-git-cheatsheet/)（打开即可直接搜索，无需安装）

纯前端、零依赖、全中文的命令行查询与学习工具。面向 AI 时代的初学者：不只是"查命令"，更帮你**读懂、测会、并在模拟面试中练熟** AI 生成的命令。

## 功能特性

- **579 条命令**：Linux 478 条（含 Vim 编辑器 133 条）+ Git 101 条，每条含中文说明、常用参数示例、典型场景、易错警告与命令对比。
- **中文关键词搜索**：输入"删除文件""撤销提交""查看日志"等自然语言片段即可匹配对应命令，同时支持命令名检索。
- **分类导航**：文件操作、进程管理、网络、Vim 编辑器、版本控制等 29 个分类，按 Linux / Git 分组浏览。
- **频率 × 难度双标注**：用 `高/中/低` × `入门/日常/进阶` 帮你区分优先级，初学者先看高频入门。
- **一键复制**：每条命令与示例均可一键复制，界面全中文，离线可用。
- **顶部五大模块**：`命令速查`（原功能）／`熟练度检测`／`模拟面试`／`指令查询`／`指令生成`，顶部 Tab 一键切换。
- **指令熟练度检测（纯前端，A+B 双模式）**：选 Linux 或 Git，在「自测清单」中逐条自评（已掌握 / 模糊 / 不会）实时生成掌握度地图与分类进度、薄弱点；或在「实战任务」中面对中文场景亲手写命令，按关键令牌即时校验并给出正确率与薄弱点。无需联网或 Key。
- **AI 模拟面试（需自带 Key）**：选 Linux 或 Git，大模型扮演面试官实时追问，结束生成评价报告；内置市面几乎所有主流大模型——OpenAI、Anthropic(Claude)、Google Gemini、OpenRouter(聚合网关)、DeepSeek、通义千问、智谱 GLM、Kimi(Moonshot)、Groq、Mistral、Together 等，均可浏览器直连，Key 仅存浏览器本地、只发往对应服务商。
- **指令含义查询（纯前端，离线）**：粘贴或输入一条完整命令（如 `git commit -m "init"`、`find . -name "*.log" -delete`、`chmod 755 app.sh`），自动拆解命令名与各参数/选项的作用，并展示使用案例、易错警告与命令对比；支持「全部 / Linux / Git」切换。
- **任务 → 指令生成（纯前端，离线）**：用一句话描述你想完成的任务（如"删除当前目录所有 .log 文件""把本地修改提交并推送到远程"），从全库匹配最相关指令并给出可直接执行的示例与「查看含义」跳转；支持「全部 / Linux / Git」切换。
- **GitHub 仓库链接**：右上角 GitHub 图标，点击直达仓库（Star / Fork 实时计数已不再展示，减少外部依赖与隐私顾虑）。

## 使用方式

- **在线（推荐）**：直接访问 👉 [https://jiangbei0921.github.io/linux-git-cheatsheet/](https://jiangbei0921.github.io/linux-git-cheatsheet/)，打开即可在浏览器中搜索、浏览、复制所有命令，无需任何安装或配置。
- **本地**：直接双击 `index.html`，即可在浏览器中离线使用（数据通过 `data/commands.js` 注入，无需服务器）。
- **源码仓库**：[https://github.com/jiangbei0921/linux-git-cheatsheet](https://github.com/jiangbei0921/linux-git-cheatsheet)
- **五大模块入口**：顶部 Tab 切换「命令速查 / 熟练度检测 / 模拟面试 / 指令查询 / 指令生成」。其中「指令查询」与「指令生成」为纯本地离线模块，输入命令或任务即可获得解析与推荐；「熟练度检测」与「模拟面试」按 Linux / Git 分组。

## 更新日志

> 本项目的每一次改动都会记录于此。在线地址：[https://jiangbei0921.github.io/linux-git-cheatsheet/](https://jiangbei0921.github.io/linux-git-cheatsheet/)（GitHub Pages，基于 `main` 分支自动部署，打开即可搜索）。

### 2026-08-02 — 整合近期改动：移除 Star/Fork 与 Hero 标签、扩充指令库、新增指令查询与指令生成模块（含 Linux/Git 切换）
- **改动**（整合此前 6 次本地修改，统一写入文档）：
  1. **移除 Star/Fork 功能**：删除顶栏 GitHub 徽章中的 Star / Fork 实时计数卡片及其全部逻辑（`loadGitHubStats`/`GH_REPO`/`fmtCount`），仅保留 GitHub 仓库跳转链接。
  2. **删除 Hero 标签**：移除首页 Hero 区的「免费 · 中文 · 离线可用」标签及其样式。
  3. **扩充指令库（+96 条）**：全网检索常用 Git/Linux 命令补充进 `tools/build_commands.py`，总量由 483 增至 **579**（Linux 478 含 Vim 133 + Git 101），严格沿用既有字段结构与命名，已去重；修复 3 处 `c()` 多传 `None` 的参数错位。
  4. **新增「指令查询」模块**（顶部第 4 个 Tab）：输入完整命令查询其含义，自动拆解命令名与参数、结合使用示例解释各选项作用，未命中给出模糊建议；支持「全部 / Linux / Git」切换。
  5. **新增「指令生成」模块**（顶部第 5 个 Tab）：输入任务描述，离线匹配最相关指令并给出可直接执行的示例与「查看含义」跳转；支持「全部 / Linux / Git」切换。
  6. **为上述两模块加 Linux/Git 切换**：分段控件按组过滤查询与生成结果。
- **原因**：清理与"初学者友好、纯本地、零干扰"定位不符的实时计数与营销式标签；补齐常用命令覆盖面；补齐"读懂 / 生成命令"的学习闭环。
- **影响范围**：`index.html`（Tab 增至 5 个；`.gh-badge`→仅 `.gh-brand`）、`styles.css`（移除 `.gh-stat` 等悬空规则与 `.hero-badge`；新增 `.explain*`/`.generate*`/`.grp-seg`/`.seg-btn`）、`app.js`（移除 Star/Fork 逻辑；新增指令查询/生成与分组切换；扩充 `TASK_INTENTS` 意图词表）、`tools/build_commands.py` 与 `data/commands.js` / `data/commands.json`（+96 条）、`README.md`（本次更新）。
- **校验**：`node --check` 通过；命令数 579 / 29 类；`(category,name)` 无重复；`build_commands.py` 复现无差异；代码 grep 确认无 star/fork 与 hero-badge 残留；指令查询多词命令名与组合短选项（如 `git commit`、`-la`）解析正确；指令生成对 12 类中文任务的 top-1 命中位均正确；Linux/Git 切换过滤符合预期；并发起一次基于 DOM 桩的运行时冒烟测试（26 项，含三种 LLM 流式分支、无效/失效服务商配置不崩溃）全部通过。

### 2026-08-02 — 熟练度检测重构为 A+B（自测清单 + 实战任务）并重绘 GitHub 徽章
- **改动**：
  - 熟练度检测**弃用选择题形式**，重构为 A+B 双模式（顶部子标签切换，按 Linux / Git 分组）：
    - **A 自测清单**：列出该组全部命令，逐条自评 `已掌握 / 模糊 / 不会`，实时计算掌握度（已掌握 100% · 模糊 50% · 不会 0%），可按分类「全标已掌握 / 不会」快速自评，一键生成掌握度地图（总掌握度 + 各分类进度条 + 薄弱命令清单）。
    - **B 实战任务**：给出中文场景，由用户手写完整命令，按「核心命令令牌 + 必要参数令牌」即时校验，逐题反馈并给出正确率与薄弱点报告；每轮随机 10 题，可提前结束出报告。
  - GitHub 徽章重绘：原单条连接式 pill 改为「GitHub 标识 + 独立的 Star / Fork 两张迷你卡片」，图标在上、英文标识（Star / Fork）在下，**Star 与 Fork 之间不再用线连接**，悬停 / 选中（hover / focus / active）整体变为黑色（`var(--ink)`），数量实时显示。
- **原因**：用户认为选择题式检测不够贴近真实掌握程度，要求换一种方式；同时希望徽章上 Star / Fork 视觉分离、选中变黑、带英文标识。（注：该 Star/Fork 实时计数已在后续整合改动中移除，现仅保留 GitHub 仓库跳转链接。）
- **影响范围**：`index.html`（`.gh-badge` 结构替代 `.gh-pill`）、`styles.css`（`.gh-badge`/`.gh-stat` 等替代 `.gh-pill`/`.gh-metric`；新增 A+B 组件样式与深浅色适配）、`app.js`（移除 `buildQuizPool`/`startQuiz`/择题渲染，新增 `renderProfPanel`/`renderSelfCheck`/`renderSelfReport`/`renderPractice`/`renderPracticeReport`）。
- **校验**：`node --check` 通过；`styles.css` 无 `.gh-pill`/`.quiz-opt` 悬空规则残留；`loadGitHubStats()` 仍写入 `#ghStars`/`#ghForks`，元素 id 保持不变；命令数为 483 条 / 29 类，自测清单按分类渲染，实战任务每轮抽取 10 题。

### 2026-08-02 — AI 模拟面试接入市面所有主流大模型
- **改动**：将面试模块的 API 服务商从 OpenRouter / Groq / Gemini 三种，扩展为覆盖市面几乎所有主流大模型的 11 家：**OpenAI、Anthropic(Claude)、Google Gemini、OpenRouter、DeepSeek、通义千问、智谱 GLM、Kimi(Moonshot)、Groq、Mistral、Together**。
  - 统一三种接入协议：`openai`（OpenAI 兼容接口）、`gemini`（Google 原生）、`anthropic`（Anthropic 原生，含 `x-api-key` + `anthropic-version` 头与 SSE `delta.text` 解析）。
  - 设置弹窗补全各厂商 API Key 获取链接；对 OpenAI / Anthropic 增加"官方 API 默认禁止浏览器跨域直连"的 CORS 提示，建议改用 OpenRouter 或经代理中转。
- **原因**：原仅支持 3 家服务商，无法满足"接入所有大模型"的需求，且未覆盖国内主流模型（通义千问、智谱、Kimi、DeepSeek）。
- **影响范围**：`app.js`（`PROVIDERS` 数据结构、`callLLM` 流式解析分支）、`styles.css`（新增 `.modal-note` 提示样式）、设置弹窗文案。
- **校验**：`node --check` 通过；脚本校验 11 家服务商 `kind` 全部合法（openai/gemini/anthropic）；`styles.css` 复用既有 `--warn-ink/--warn-bg/--warn-line` 变量，无新增悬空规则。

### 2026-08-02 — 新增「熟练度检测」与「AI 模拟面试」模块（保留命令速查）
- **改动**：在顶部新增 Tab 导航（命令速查 / 熟练度检测 / 模拟面试），**完整保留**原有命令速查全部功能；新增两大模块，均按 git/linux 分离。
  - 熟练度检测：选 Linux/Git → 从题库随机抽 15 题（回忆/场景/补全）→ 按难度加权评分 → 分类掌握度 + 薄弱点报告（纯前端，离线可用）。
  - AI 模拟面试：选 Linux/Git → 用户自带 LLM API Key（OpenRouter/Groq/Gemini 浏览器直连）→ 大模型实时追问 → 结束生成评价报告；设置弹窗将 Key 存于浏览器本地。
- **原因**：在命令速查基础上延伸出"测学会没有"与"模拟实战面试"的学习闭环，契合初学者在 AI 时代的学习习惯。
- **影响范围**：`index.html`（Tab 栏 + 设置入口）、`styles.css`（新增组件样式与深浅色适配）、`app.js`（Tab 路由、检测逻辑、面试流式对话、设置弹窗）；`data/commands.js` 与速查功能未改动。
- **校验**：`node --check` 通过；按分组题库规模 Linux≈882 题、Git≈244 题，单次抽题充足；全局检查修复设置弹窗"取消也进入面试"的逻辑缺陷。

### 2026-08-02 — 头部重构（方案 C）与全局代码检查
- **改动**：顶部重构为单条紧凑 sticky 工具栏——Logo 缩小、搜索框加宽上移、分组胶囊与 GitHub/主题图标同排；副标题收进搜索框 placeholder；调整侧边栏吸顶偏移（168px → 100px）；新增窄屏（≤760px）换行与品牌/图标左右分布规则；`.gitignore` 忽略 `__pycache__`。
- **原因**：原头部视觉沉闷、缺乏层次，且向下浏览时搜索入口不够触手可及。
- **影响范围**：`index.html`、`styles.css`、`.gitignore`；`app.js` 与 `tools/build_commands.py` 未改动。
- **校验**：全局代码检查（语法 / 逻辑 / 未用变量 / 命名一致性 / 兼容性）无新增缺陷；数据产物 483 条 / 29 类校验通过。

## 目录结构

| 文件 | 说明 |
|------|------|
| `index.html` / `styles.css` / `app.js` | 前端页面与交互逻辑 |
| `data/commands.json` | 命令数据源（规范格式） |
| `data/commands.js` | `window.COMMAND_DATA`，供 `file://` 直接加载 |
| `tools/build_commands.py` | 命令数据生成脚本（单一事实来源） |
| `docs/技术文档.md` | 完整技术文档 |

## 数据来源

- Linux 命令：基于 Linuxize《Linux Commands Cheatsheet》归集并扩展。
- Git 命令：基于《Pro Git》官方手册归集。

## 许可

本项目采用 **[MIT 许可证](LICENSE)**，可自由使用、修改、分发（含商业用途），只需保留原始版权声明与许可声明。

© 2026 jiangbei0921 — 命令说明为原创中文解读。
