import { arraySidebar } from "vuepress-theme-hope";

export const code = arraySidebar([
    "",
    {
        text: "QT",
        icon: "golang1",
        prefix: "QT/",
        collapsible: true,
        children: [
            "2024.md"
        ],
    },
    
    
    
    {
        text: "项目",
        icon: "xiangmu",
        prefix: "project/",
        collapsible: true,
        children: [
            "",
            "mio-search",
            "mio-init",
            "mio-api"
        ],
    },
    
    {
        text: "其他",
        icon: "other1",
        prefix: "other/",
        collapsible: true,
        children: [
            "",
            "port",
            "redis",
        ],
    },
]);