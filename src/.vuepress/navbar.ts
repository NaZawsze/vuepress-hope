import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "分类",
    icon: "lightbulb",
    prefix: "/categories/",
    children: [
      {
        text: "运维",
        icon: "lightbulb",
        prefix: "ops/",
        children: ["Linux", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "开发",
        icon: "lightbulb",
        prefix: "dev/",
        children: ["JAVA", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "Blog",
    icon: "book",
    link: "https://hexo.skybridair.cn",
  },
]);
