import { createRouter, createWebHistory } from "vue-router";
import { app } from "@/stores/app";
import Default from "../layouts/Default.vue";
import ApplicantsList from "../views/Uebers.vue";
import CreateApplicants from "../views/CreateApplicants.vue";
import CreateMeetings from "../views/CreateMeetings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Default,
      children: [
        {
          path: "",
          redirect: "/uebersicht",
        },
        {
          path: "/uebersicht",
          name: "uebersicht",
          component: ApplicantsList,
        },
        {
          path: "/pruefungen",
          name: "Pruefungen",
          component: CreateApplicants,
        },
        {
          path: "/hausaufgaben",
          name: "Hausaufgaben",
          component: CreateMeetings,
        },
      ],
    },
  ],
});

router.afterEach((to) => {
  const store = app();
  store.setCurrentBreadcrumb(to);
});

export default router;
