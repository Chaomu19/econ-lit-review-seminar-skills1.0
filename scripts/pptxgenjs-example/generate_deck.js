const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "econ-lit-review-seminar-skill-cn";
pptx.subject = "从结构化 Markdown 生成文献综述组会 PPT 的示例";
pptx.title = "经济学文献综述组会";
pptx.company = "";
pptx.lang = "zh-CN";
pptx.theme = {
  headFontFace: "Arial",
  bodyFontFace: "Microsoft YaHei",
  lang: "zh-CN",
};

function addTitleSlide(title, subtitle) {
  const slide = pptx.addSlide();
  slide.background = { color: "FFFFFF" };
  slide.addText(title, {
    x: 0.7,
    y: 1.5,
    w: 12,
    h: 0.7,
    fontFace: "Arial",
    fontSize: 30,
    bold: true,
    color: "1F2937",
  });
  slide.addText(subtitle, {
    x: 0.7,
    y: 2.35,
    w: 11,
    h: 0.5,
    fontFace: "Microsoft YaHei",
    fontSize: 16,
    color: "4B5563",
  });
}

function addBullets(title, bullets) {
  const slide = pptx.addSlide();
  slide.background = { color: "FFFFFF" };
  slide.addText(title, {
    x: 0.55,
    y: 0.45,
    w: 12,
    h: 0.45,
    fontSize: 24,
    bold: true,
    color: "1F2937",
  });
  slide.addText(
    bullets.map((text) => ({ text, options: { bullet: { indent: 18 } } })),
    {
      x: 0.85,
      y: 1.3,
      w: 11.7,
      h: 4.8,
      fontSize: 17,
      color: "374151",
      breakLine: true,
      paraSpaceAfterPt: 10,
      fit: "shrink",
    }
  );
}

addTitleSlide("经济学文献综述组会", "从 PPT完整内容.md 生成初版幻灯片");
addBullets("核心流程", [
  "先构建并核验论文池，再开始撰写 PPT。",
  "将确认无误的 PDF 转换为 Markdown，作为证据基础。",
  "按板块逐步生成 PPT 内容，再围绕展示论断反向阅读。",
  "只为可能被追问的论文准备兜底精读笔记。",
]);

pptx.writeFile({ fileName: "example_deck.pptx" });
