import Vue from "vue";
import VueRouter from "vue-router";
import GatheringDetail from "../views/GatheringDetail.vue";
import ManageGatherings from "@/views/ManageGatherings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ManageGatherings,
  },
  {
    path: "/gathering/:id",
    name: "Gathering Detail",
    component: GatheringDetail,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
