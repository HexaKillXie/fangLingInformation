import type { RouteRecordRaw } from "vue-router"

export const ROUTE_NAME_LAYOUT = Symbol.for("ROUTE_NAME_LAYOUT");
/* Layout */
export const Layout = () => import("../layout/index.vue");
// 公共路由
const commonRoutes: RouteRecordRaw[] = [
    {path: '/',redirect: '/home' },
    {
      path: "",
      component: Layout,
      name: ROUTE_NAME_LAYOUT,
      redirect: "home",
      children: [
        {
          path: "/home",
          component: () => import("@/views/home/HomePage.vue"),
          name: "homepage",
          meta: {
            title: "首页",
            fullPath: "/home",
          },
        },
          
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/Login.vue"),
      name: "login",
      meta: {
        title: "登录",
        icon: "login",
        fullPath: "/login",
      },
    },
  ];
  export default commonRoutes;