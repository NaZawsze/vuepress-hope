import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "败犬文档库",
  description: "记录技术理论以及项目方案的文档库.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
