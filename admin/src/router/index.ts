import { createRouter, createWebHistory } from "vue-router";
import { app } from "@/stores/app";
import Default from "../layouts/Default.vue";
import Uebersicht from "../views/Uebersicht.vue";
import Pruefungen from "../views/pruefungen.vue";
import Hausaufgaben from "../views/hausaufgaben.vue";

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
          component: Uebersicht,
        },
        {
          path: "/pruefungen",
          name: "Pruefungen",
          component: Pruefungen,
        },
        {
          path: "/hausaufgaben",
          name: "Hausaufgaben",
          component: Hausaufgaben,
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
