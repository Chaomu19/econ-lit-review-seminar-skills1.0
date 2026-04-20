# 经济学文献综述组会 Skill｜Econ Literature Review Seminar Skill CN

这个仓库提供一个面向中文用户、兼顾英文检索的 Codex/Cursor 风格 skill，用于准备经济学文献综述组会材料。

English: A Chinese-first skill for economics literature review seminars, paper grouping, PDF-to-Markdown workflows, PPT content generation, and PptxGenJS slide automation.

它的核心思路是：先服务最终汇报，再反向组织阅读，而不是一开始就为每篇论文写完整长笔记。

## 作者主页

如果这个 skill 帮你提高了文献综述或组会汇报效率，欢迎关注作者的小红书主页：

<https://www.xiaohongshu.com/user/profile/629cb86d00000000210228de>

## 这个 Skill 适合谁

适合正在准备以下材料的中文用户：

- 经济学、能源经济学、管理学、公共政策等方向的文献综述组会。
- 需要从一批论文中整理研究主线、精讲文献和 PPT 结构。
- 希望用 AI 提高效率，但又担心 AI 胡编、误引、下载错论文。
- 不想先逐篇写长笔记，而是希望围绕最终展示内容进行高效阅读。

关键词：经济学文献综述、组会汇报、论文精讲、PPT 自动化、PDF 转 Markdown、能源经济学、公共政策、管理学、literature review、seminar presentation、PptxGenJS。

## 5 分钟快速开始

如果你是第一次使用，只看这 4 个文件就够了：

1. 先看 [新手使用指南](templates/新手使用指南.md)：了解完整路线。
2. 复制 [论文池模板](templates/paper-pool-template.md)：整理候选论文。
3. 使用 [PDF 转 Markdown 检查清单](templates/pdf-to-md-checklist.md)：核验转换质量。
4. 使用 [PPT完整内容模板](templates/ppt-complete-content-template.md)：开始生成逐页内容。

最推荐的起手提示词：

```md
我正在准备一场经济学文献综述组会。请按这个 skill 的流程帮我工作：
1. 先根据我的主题和候选论文，帮我审阅论文池；
2. 再帮我按研究问题自动分组；
3. 标出精讲、重点阅读、补充阅读；
4. 最后按板块逐步生成 PPT完整内容.md。

请不要为每篇论文都生成长篇组会呈现笔记，除非我单独要求。
```

## 推荐流程

1. 使用多个 AI 回合辅助构建和审阅论文池。
2. 人工核验并整理确认无误的 PDF。
3. 在本地将 PDF 转换为 Markdown。
4. 让 AI 生成研究板块、论文优先级和组会结构。
5. 按板块逐步撰写 `PPT完整内容.md`。
6. 只审核和阅读会进入 PPT 的内容、图表和核心论断。
7. 生成并迭代幻灯片。
8. 只为可能被老师追问的论文准备兜底精读笔记。

默认不提交原始 PDF、生成图片、PPT 文件和本地自动化中间产物。

## 文件怎么读

新手不需要一次读完所有文件。按你的任务选择：

| 你现在要做什么 | 先看哪个文件 |
|---|---|
| 不知道从哪些论文开始 | [paper-pool-and-pdf-to-md.md](references/paper-pool-and-pdf-to-md.md) |
| 已经有 PDF，想转成 AI 可读材料 | [pdf-to-md-checklist.md](templates/pdf-to-md-checklist.md) |
| 想让 AI 自动分组和判断精讲文献 | [outline-grouping-and-selection.md](references/outline-grouping-and-selection.md) |
| 想生成某个板块的综述 | [section-synthesis.md](references/section-synthesis.md) |
| 想开始写 PPT 完整内容 | [seminar-ppt-workflow.md](references/seminar-ppt-workflow.md) |
| 想把 Markdown 内容转成 PPT | [pptxgenjs-slide-generation.md](references/pptxgenjs-slide-generation.md) |
| 想统一精讲论文页面格式 | [ppt-page-templates.md](references/ppt-page-templates.md) |
| 担心引用不严谨 | [citation-standards.md](references/citation-standards.md) |
| 担心老师追问某篇论文 | [deep-reading-fallback.md](references/deep-reading-fallback.md) |

## 产出物顺序

推荐按这个顺序产出：

```text
论文池表
-> PDF 转 Markdown 检查清单
-> 论文分组与优先级表
-> 板块综合
-> PPT完整内容.md
-> 初版 PPT
-> 兜底精读笔记
```

其中 `兜底精读笔记` 不是每篇论文都要写，只给高风险、会被追问、或 PPT 中重点展示的论文准备。

## 目录结构

```text
SKILL.md
references/
templates/
examples/
scripts/
assets/
```

`SKILL.md` 刻意保持简洁。详细流程放在 `references/`，可复用填空格式放在 `templates/`。

## 关于转 PPT 的说明

本项目已经把原项目中的 `slides-0415` 转 PPT 经验整理为通用版：

- 工作流说明：[pptxgenjs-slide-generation.md](references/pptxgenjs-slide-generation.md)
- 示例代码：[scripts/pptxgenjs-example](scripts/pptxgenjs-example)

原来的 `slides-0415` 里包含本机绝对路径，因此不直接搬运到公开仓库，而是改写成可复用、可配置的版本。
