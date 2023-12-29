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
        prefix: "dev/",
        children: [
          { text: "Java", icon: "java", link: "backstage/java" },
          { text: "Python", icon: "python", link: "backstage/python" },
        ],
      },
      {
        text: "运维",
        prefix: "ops/",
        children: [
          { text: "Linux", icon: "linux", link: "software/linux" },
          { text: "Windows", icon: "windows", link: "software/windows" },
        ], 
      },
    ],
  },
  {
    text: "标签",
    icon: "tag",
    link: "tag",
  },
  {
    text: "最新更新",
    icon: "refresh",
    link: "update",
  },
  {
    text: "博客",
    icon: "blog",
    link: "https://hexo.skybridair.cn",
  },
]);
