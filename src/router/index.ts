import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import reg from '~/components/reg.vue';
import login from '~/components/login.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: login,
  },
  {
    path: "/reg",
    component: reg,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
