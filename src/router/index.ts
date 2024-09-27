import { createRouter, createWebHistory } from "vue-router";
import commonRoutes from "./commonRoutes";

// 路由
const router = createRouter({
    history:createWebHistory(),
    routes: commonRoutes
})

 
 // 是否显示重新登录
export const isRelogin = { show: false };
const whiteList = ["/login", "/register"];

//TODO:router.beforeEach路由守卫


// 导出

export default router