import type { IAuftrag } from "./types";
import axios, { type AxiosRequestHeaders } from "axios";
import { defineStore } from "pinia";

export const applicantStore = defineStore({
  id: "apprentice",
  state: () => ({
    Autrage: new Array<IAuftrag>(),
    medium: false,
    step: 1,
  }),
  getters: {
    getAllAuftrage(state) {
      return state.Autrage;
    },
  },
  actions: {
    async getAuftrage() {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/applicant`
      );
      const applicants: Array<IAuftrag> = result.data;
      this.Autrage = applicants;
    },
    async createPruefung(newPruefung: IAuftrag) {
      const body = {
        kategorie: "Prüfung",
        titel: newPruefung.titel,
        fach: newPruefung.fach,
        beschreibung: newPruefung.beschreibung,
      };
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/meeting/register`,
        body
        //headers
      );
      const meeting: IAuftrag = result.data;
      this.Autrage.push(meeting);
    },
    async createHausaufgabe(newPruefung: IAuftrag) {
      const body = {
        kategorie: "Hausaufgabe",
        titel: newPruefung.titel,
        fach: newPruefung.fach,
        beschreibung: newPruefung.beschreibung,
      };
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/meeting/register`,
        body
        //headers
      );
      const meeting: IAuftrag = result.data;
      this.Autrage.push(meeting);
    },
  },
});
