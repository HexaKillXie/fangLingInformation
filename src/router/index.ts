import { createWebHistory, createRouter } from "vue-router"
import commonRoutes from "./commonRoutes";

import LoginView from "@/views/Login.vue";
import RegisterView from "@/views/Register.vue";


export const Layout = () => import("../layout/index.vue");
const routes = [
    { path: '/',redirect: '/home' },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    {
        path: '',
        component: Layout,
        name: 'Layout',
        redirect: '/home',
        children: [
      
            {
              path: "/home",
              component: () => import("@/views/home/HomePage.vue"),
              name: "homePage",
              meta: {
                title: "首页",
                fullPath: "/home",
                affix: true
              },
            },
            // {
            //     path: "/menumgt",
            //     component: () => import("@/views/menuAuth/MenuAuth.vue"),
            //     name: "menuAuth",
            //     meta: {
            //       title: "首页",
            //       fullPath: "/home",
            //       affix: true
            //     },
            //   },
          ],
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
 // 是否显示重新登录
 export const isRelogin = { show: false };
 const whiteList = ["/login", "/register"];
export default router