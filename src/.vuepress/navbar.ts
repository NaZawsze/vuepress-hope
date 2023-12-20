import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "分类",
    //icon: "lightbulb",
    prefix: "/categories",
    children: [
      {
        text: "运维",
        //icon: "lightbulb",
        prefix: "ops/",
        link: "ops/",
        //children: ["Linux", { text: "...", icon: "ellipsis", link: "" }], 
        children: ["Linux","Windows"],
      },
      {
        text: "开发",
        //icon: "lightbulb",
        prefix: "dev/",
        link: "dev/",
        //children: ["JAVA", { text: "...", icon: "ellipsis", link: "" }],
        children: ["C","JAVA"],
      },
    ],
  },
  {
    text: "Blog",
    icon: "book",
    link: "https://hexo.skybridair.cn",
  },
]);
