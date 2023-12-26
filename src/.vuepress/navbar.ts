import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "分类",
    icon: "categoryselected",
    //prefix: "/categories",
    children: [
      {
        text: "开发",
        icon: "customize",
        prefix: "dev/",
        children: [
          { text: "Java", icon: "java", link: "back-end/java" },
          { text: "python", icon: "python", link: "back-end/python" },
        ],
      },
      {
        text: "运维",
        icon: "server",
        prefix: "ops/",
        children: [
          { text: "Linux", icon: "linux", link: "software/linux" },
          { text: "Windows", icon: "windows", link: "software/windows" },
        ], 
      },
    ],
  },
  {
    text: "Blog",
    icon: "book",
    link: "https://hexo.skybridair.cn",
  },
]);
