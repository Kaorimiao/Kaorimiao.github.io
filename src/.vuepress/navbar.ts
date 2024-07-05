import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "代码笔记",
    icon: "code",
    prefix: "/code/",
    children: [
      { text: "代码笔记", link: "", icon: "code", activeMatch: "^/code/$" },
      {
        text: "C++相关",
        icon: "code",
        children: [
          { text: "QT", link: "", icon: "notepad", activeMatch: "^/QT/$" }
        ],
      },    
      { text: "项目内容", link: "project/", icon: "xiangmu", activeMatch: "^/project/$" },
      {text: "其他", link: "other/", icon: "other1", activeMatch: "^/other/$" },
      
    ]
  },
  {
    text: "随笔",
    icon: "notepad",
    prefix: "/note/",
    children: [
      

      { text: "动画", link: "anime/", icon: "a-zujiantianchong_huaban1fuben7", activeMatch: "^/anime/$" },
      { text: "游戏", link: "game/", icon: "game", activeMatch: "^/game/$" },

      
    ],
  },
]);
