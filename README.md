# Linux 与 Git 指令速查指南

> 🌐 **在线使用**：[https://jiangbei0921.github.io/linux-git-cheatsheet/](https://jiangbei0921.github.io/linux-git-cheatsheet/)（打开即可直接搜索，无需安装）

纯前端、零依赖、全中文的命令行查询与学习工具。面向 AI 时代的初学者：不只是"查命令"，更帮你**读懂、测会、并在模拟面试中练熟** AI 生成的命令。

## 功能特性

- **483 条命令**：Linux 386 条（含 Vim 编辑器 133 条）+ Git 97 条，每条含中文说明、常用参数示例、典型场景、易错警告与命令对比。
- **中文关键词搜索**：输入"删除文件""撤销提交""查看日志"等自然语言片段即可匹配对应命令，同时支持命令名检索。
- **分类导航**：文件操作、进程管理、网络、Vim 编辑器、版本控制等 29 个分类，按 Linux / Git 分组浏览。
- **频率 × 难度双标注**：用 `高/中/低` × `入门/日常/进阶` 帮你区分优先级，初学者先看高频入门。
- **一键复制**：每条命令与示例均可一键复制，界面全中文，离线可用。
- **顶部三大模块**：`命令速查`（原功能）／`熟练度检测`／`模拟面试`，顶部 Tab 一键切换。
- **指令熟练度检测（纯前端）**：选 Linux 或 Git，随机抽 15 题（回忆 / 场景 / 补全三种题型）测记忆与熟练度，按难度加权评分并给出分类掌握度与薄弱点报告。无需联网。
- **AI 模拟面试（需自带 Key）**：选 Linux 或 Git，大模型扮演面试官实时追问，结束生成评价报告；内置市面几乎所有主流大模型——OpenAI、Anthropic(Claude)、Google Gemini、OpenRouter(聚合网关)、DeepSeek、通义千问、智谱 GLM、Kimi(Moonshot)、Groq、Mistral、Together 等，均可浏览器直连，Key 仅存浏览器本地、只发往对应服务商。

## 使用方式

- **在线（推荐）**：直接访问 👉 [https://jiangbei0921.github.io/linux-git-cheatsheet/](https://jiangbei0921.github.io/linux-git-cheatsheet/)，打开即可在浏览器中搜索、浏览、复制所有命令，无需任何安装或配置。
- **本地**：直接双击 `index.html`，即可在浏览器中离线使用（数据通过 `data/commands.js` 注入，无需服务器）。
- **源码仓库**：[https://github.com/jiangbei0921/linux-git-cheatsheet](https://github.com/jiangbei0921/linux-git-cheatsheet)

## 更新日志

> 本项目的每一次改动都会记录于此。在线地址：[https://jiangbei0921.github.io/linux-git-cheatsheet/](https://jiangbei0921.github.io/linux-git-cheatsheet/)（GitHub Pages，基于 `main` 分支自动部署，打开即可搜索）。

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
