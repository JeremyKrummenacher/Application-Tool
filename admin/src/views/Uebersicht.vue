<script setup lang="ts">
import { ref } from "vue";
import { applicantStore } from "../stores/applicantStore";
import type { IAuftrag } from "../stores/types";
const applicantsStore = applicantStore();
const pagination = {
  rowsPerPage: 10,
};

const columns: any = [
  {
    name: "id",
    label: "id",
    align: "left",
    field: (row: IAuftrag) => row.id,
    sortable: true,
  },
  {
    name: "kategorie",
    required: true,
    label: "Kategorie",
    align: "left",
    field: (row: IAuftrag) => row.kategorie,
    sortable: true,
  },
  {
    name: "fach",
    required: true,
    label: "Fach",
    align: "left",
    field: "fach",
    sortable: true,
  },
  {
    name: "titel",
    required: true,
    label: "Titel",
    align: "left",
    field: "titel",
    sortable: true,
  },
  {
    name: "date",
    required: true,
    label: "Datum",
    align: "left",
    field: "date",
    sortable: true,
  },
  {
    name: "beschreibung",
    required: true,
    label: "Beschreibung",
    align: "left",
    field: "beschreibung",
    sortable: true,
  },
];
</script>

<template :props="props">
  <div class="kx-card q-mt-sm" style="max-width: 1400px">
    <div class="kx-card-title kx-card-title-extend">
      <div class="kx-card-title-left">Zu Erledigen</div>
    </div>
    <div class="kx-card-body">
      <q-table
        :rows="applicantsStore.getAllAuftrage"
        :columns="columns"
        row-key="name"
        :pagination="pagination"
        :visible-columns="[
          'kategorie',
          'fach',
          'titel',
          'date',
          'beschreibung',
        ]"
      >
        <template v-slot:body-cell-rats="props">
          <q-td :props="props">
            <q-rating
              v-model="props.row.rating"
              size="1.5em"
              color="primary"
              :max="5"
              icon="star_border"
              icon-selected="star"
              readonly
            />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>
