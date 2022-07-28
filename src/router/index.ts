import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from '~/pages/index.vue'
import reg from '~/components/reg.vue';
import Login from '~/pages/login.vue';
import NotFound from '~/components/404.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reg",
    name: "Reg",
    component: reg,
  },
  {
    path: "/:pathMatch(.*)*", 
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
