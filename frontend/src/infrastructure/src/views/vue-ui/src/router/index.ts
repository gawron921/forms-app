import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomePage from "../components/pages/HomePage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
