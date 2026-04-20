# PptxGenJS 转 PPT 自动化工作流

## 来源说明

本文件由原项目中的 `slides-0415` 工作流抽象而来。原始版本绑定了本机路径和特定项目目录，不适合直接上传 GitHub；这里改写为通用版本。

## 目标

将结构化 Markdown，尤其是 `PPT完整内容.md`，转换为可编辑的 `.pptx`，并保留可复现的 JavaScript 源文件。

适用场景：

- 根据 `PPT完整内容.md` 生成初版组会 PPT。
- 根据模板复刻页面风格。
- 批量调整重复页型。
- 检查文字溢出、遮挡、字体替换等版面问题。

## 推荐目录约定

在具体项目中建议使用：

```text
project/
├── PPT完整内容.md
├── ppt-template.pptx
├── slides_workdir/
│   ├── generate_deck.js
│   ├── package.json
│   └── data/
└── output/
    ├── seminar_deck.pptx
    └── seminar_deck.source.js
```

公开 GitHub 仓库中不要提交：

- `node_modules/`
- 生成的 `.pptx`，除非作为发布产物。
- 解包后的 PowerPoint XML。
- 含版权风险的论文图片。
- 含私人信息或限制性品牌标识的 PPT 模板。

## 核心规则

1. 使用 `PptxGenJS` 生成幻灯片；不要把 `python-pptx` 作为默认内容生产工具。
2. 每次生成 PPT 时，同时保留：
   - 最终演示文件：`.pptx`
   - 可复现源文件：`.js`
3. 先在工作目录生成和检查，通过后再移动到最终输出目录。
4. 默认使用 16:9，即 `LAYOUT_WIDE`，除非用户明确要求其他比例。
5. 每页必须可读，避免文字溢出、遮挡和明显越界。
6. 页面内容应来自 `PPT完整内容.md` 或经过引用标准核验的材料。

## 执行流程

### 1. 识别任务类型

先判断用户要做的是：

- `新建`：从 `PPT完整内容.md` 生成初版 PPT。
- `改稿`：修改已有 PPT 的文字、页型或图表。
- `复刻`：参考模板或已有页，批量生成同风格页面。
- `批量修正`：将人工修改过的代表页样式应用到同类页面。

### 2. 准备输入

至少需要：

- `PPT完整内容.md`
- PPT 模板或版式说明
- 输出文件名

如果页面中有图表，还需要：

- 图片相对路径。
- 原文 `Fig.` 或 `Table` 编号。
- 图表解读文字。

### 3. 生成页面数据

建议先把 Markdown 解析或整理为结构化数据，例如：

```js
const slides = [
  {
    type: "title",
    title: "研究背景",
    subtitle: "储能为什么成为能源经济学问题",
  },
  {
    type: "paper-overview",
    title: "Sioshansi 2009：套利与福利",
    bullets: ["研究问题：...", "方法：...", "核心结论：..."],
  },
];
```

复杂项目可以先生成 `paper_data.json` 或 `slides_data.json`，再由 JS 读取。

### 4. 使用 PptxGenJS 生成页面

推荐做法：

- 定义统一主题色、字体、页边距和标题样式。
- 为常见页型写函数，例如：
  - `addTitleSlide`
  - `addSectionSlide`
  - `addOverviewTableSlide`
  - `addPaperOverviewSlide`
  - `addFigureInterpretationSlide`
- 每个函数只负责一种页面结构。

### 5. 导出与检查

导出后检查：

- 标题是否越界。
- 正文字号是否可读。
- 图表是否变形。
- 表格是否拥挤。
- 中文字体是否被替换。
- 页码、来源说明和引用是否一致。

如有条件，可以把代表页导出为图片进行人工检查。

## 文献综述 PPT 的批量修改策略

文献综述 PPT 通常有大量重复页型。最高效方式是：

1. 先生成初版。
2. 用户人工修改 1-2 页代表性页面。
3. 对比修改前后的页面结构或代码。
4. 将修改后的样式抽象为函数参数。
5. 批量应用到同类型页面。
6. 再检查代表性页面。

常见可批量复用的修改：

- 标题字号和位置。
- 统一页眉页脚。
- 论文概要页字段顺序。
- 图表页图片尺寸和说明位置。
- 表格列宽。
- 颜色和字体。

## 交付清单

完整交付应包括：

- `.pptx` 演示文件。
- `.js` 可复现源文件。
- 如使用结构化数据，保留 `.json` 数据文件。
- 简短说明：输入文件、输出文件、运行命令。

## 示例

本仓库提供了一个最小示例：

```text
scripts/pptxgenjs-example/
├── package.json
└── generate_deck.js
```

运行方式：

```bash
cd scripts/pptxgenjs-example
npm install
npm run build
```

该示例只演示基础结构。真实组会 PPT 应根据 `PPT完整内容.md` 和用户模板进一步扩展。
