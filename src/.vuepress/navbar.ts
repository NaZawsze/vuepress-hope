import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "分类",
    icon: "categoryselected",
    prefix: "/categories",
    children: [
      {
        text: "运维",
        icon: "server",
        prefix: "ops/",
        children: [{ text: "Linux", icon: "linux", link: "" }], 
        //children: ["Linux", { text: "Linux", icon: "ellipsis", link: "" }], 
      },
      {
        text: "开发",
        icon: "customize",
        prefix: "dev/",
        children: [{ text: "Java", icon: "java", link: "" }],
        //children: ["Linux", { text: "Linux", icon: "ellipsis", link: "" }], 
      },
    ],
  },
  {
    text: "Blog",
    icon: "book",
    link: "https://hexo.skybridair.cn",
  },
]);
