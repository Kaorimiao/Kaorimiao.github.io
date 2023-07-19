import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for Kaori",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "Kaori的博客演示",
    },
    "/ja/":{
      lang:"ja-JP",
      title:"ブログプレゼンです",
      description:"Kaoriのブログプレゼンテーションです",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
