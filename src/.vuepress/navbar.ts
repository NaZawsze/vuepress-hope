import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "分类",
    icon: "categoryselected",
    prefix: "/categories",
    children: [
      {
        text: "开发",
        icon: "customize",
        prefix: "开发/",
        children: [{ text: "Java", icon: "java", link: "后端/java" }],
        //children: ["Linux", { text: "Linux", icon: "ellipsis", link: "" }], 
      },
      {
        text: "运维",
        icon: "server",
        prefix: "运维/",
        children: [{ text: "Linux", icon: "linux", link: "软件/linux" }], 
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
