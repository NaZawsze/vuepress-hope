import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { hopeTheme } from "vuepress-theme-hope";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "败犬文档库",
  description: "记录技术理论以及项目方案的文档库.",

  theme: hopeTheme({
    iconAssets: [
      "https://at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      "iconfont",
    ],
  }),

  plugins: [autoCatalogPlugin()],
  // Enable it with pwa
  // shouldPrefetch: false,
});
