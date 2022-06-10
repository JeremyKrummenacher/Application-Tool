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
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/eintrag`);
      const eintrage: Array<IAuftrag> = result.data;
      this.Autrage = eintrage;
    },
    async createPruefung(newPruefung: IAuftrag) {
      const body = {
        kategorie: "Prüfung",
        titel: newPruefung.titel,
        fach: newPruefung.fach,
        beschreibung: newPruefung.beschreibung,
        date: newPruefung.date,
      };
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/eintrag/register`,
        body
        //headers
      );
      const eintrag: IAuftrag = result.data;
      this.Autrage.push(eintrag);
    },
    async createHausaufgabe(newPruefung: IAuftrag) {
      const body = {
        kategorie: "Hausaufgabe",
        titel: newPruefung.titel,
        fach: newPruefung.fach,
        beschreibung: newPruefung.beschreibung,
        date: newPruefung.date,
      };
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/eintrag/register`,
        body
        //headers
      );
      const eintrag: IAuftrag = result.data;
      this.Autrage.push(eintrag);
    },
  },
});
