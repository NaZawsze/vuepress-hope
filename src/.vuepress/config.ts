import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { blogPlugin } from "vuepress-plugin-blog2";


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
      filter: ({ filePathRelative, frontmatter }) => {
        // 舍弃那些不是从 Markdown 文件生成的页面
        if (!filePathRelative) return false;

        // 舍弃 `archives` 文件夹的页面
        if (filePathRelative.startsWith("ai/")) return false;
        if (filePathRelative.startsWith("dev/")) return false;
        if (filePathRelative.startsWith("network/")) return false;
        if (filePathRelative.startsWith("ops/")) return false;

        // 舍弃那些没有使用默认布局的页面
        if (frontmatter.home || frontmatter.layout) return false;

        return true;
      },
      // 获取页面信息
      getInfo: ({ frontmatter, git = {}, data = {} }) => {
        const info: Record<string, any> = {
        //  author: frontmatter.author || "",
          categories: frontmatter.categories || [],
        // date: frontmatter.date || git.createdTime || null,
          tags: frontmatter.tags || [],
        //  excerpt: data.excerpt || "",
        };

        return info;
      },
    }),

  ],
});
