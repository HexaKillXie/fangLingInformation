import type { RouteRecordRaw } from "vue-router"

export const ROUTE_NAME_LAYOUT = Symbol.for("ROUTE_NAME_LAYOUT");

// 公共路由
const commonRoutes: RouteRecordRaw[] = [
    {
      path: "",
      component: () => import("../layout/index.vue"),
      name: ROUTE_NAME_LAYOUT,
      redirect: "home",
      children: [
        {
          path: "home",
          component: () => import("@/views/HomePage.vue"),
          name: "home",
          meta: {
            title: "首页",
            icon: "HomeFilled",
            fullPath: "/home",
          },
        },
      ],
    }
  ];
  export default commonRoutes;