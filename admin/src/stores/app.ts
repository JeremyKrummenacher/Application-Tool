import { defineStore } from "pinia";
import type { RouteLocationNormalized } from "vue-router";

export const app = defineStore({
  id: "app",
  state: () => ({
    CurrentBreadcrumb: [{ Text: "", Url: "/" }],
  }),
  getters: {
    getCurrentBreadcrumb(): any {
      return this.CurrentBreadcrumb;
    },
  },
  actions: {
    setCurrentBreadcrumb(route: RouteLocationNormalized) {
      const newBreadcrumb = [{ Text: "", Url: "/" }];
      const segments = route.path.split("/");
      let currentUrl = "";
      for (const segment of segments) {
        if (segment !== "") {
          currentUrl = `${currentUrl}/${segment}`;
          newBreadcrumb.push({ Text: segment, Url: currentUrl });
        }
      }
      this.CurrentBreadcrumb = newBreadcrumb;
    },
  },
});
