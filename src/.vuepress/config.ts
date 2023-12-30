import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "败犬文档库",
  description: "记录技术理论以及项目方案的文档库.",

  theme,
  
  plugins: [
    autoCatalogPlugin({
      // 配置选项
    }),

    // 搜索插件
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      hotReload: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    
    // 阅读时间与字数统计生成插件
    readingTimePlugin({
      // 你的选项
    }),
    
    // Markdown增强功能插件
    mdEnhancePlugin({
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
    }),
    // 博客功能插件
    blogPlugin({
      //插件选项
    }),

  ],
});
