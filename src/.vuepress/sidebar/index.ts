import {sidebar} from "vuepress-theme-hope";
import {code} from "./code";


export const zhSidebar = sidebar({
    
    "/code/": code,
    "/": ["", "code/"],
});
