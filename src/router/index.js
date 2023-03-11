import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobList from "@/views/JobList.vue";
import JobDetail from "@/views/JobDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/joblist",
    name: "job-list",
    component: JobList,
  },
  {
    path: "/jobdetail/:id",
    name: "job-detail",
    component: JobDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
