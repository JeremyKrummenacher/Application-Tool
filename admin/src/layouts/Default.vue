<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { app } from "../stores/app";
import { applicantStore } from "../stores/applicantStore";

const isDrawerActive = ref(false);
const store = app();
const applicants = applicantStore();

onMounted(() => {
  applicants.getAuftrage();
});
</script>

<template>
  <div>
    <q-layout view="hHh Lpr lff" style="height: 300px">
      <q-header>
        <q-toolbar>
          <div class="kx-app-header">
            <div class="uk-app-header-content">
              <div class="kx-app-suit">
                <div class="kx-logo-text">M120/226b</div>
                <div class="kx-logo-app">School-Planner</div>
              </div>
              <div class="kx-app-header-body-menu">
                <a
                  class="kx-button-icon"
                  @click="isDrawerActive = !isDrawerActive"
                >
                </a>
              </div>
            </div>
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="isDrawerActive"
        show-if-above
        :width="260"
        :breakpoint="500"
        bordered
      >
        <q-list no-border link inset-delimiter>
          <q-item
            to="/uebersicht"
            exact
            active-class="kx-navigationitem-active"
          >
            <q-item-section avatar>
              <q-icon name="splitscreen" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Übersicht</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            to="/pruefungen"
            exact
            active-class="kx-navigationitem-active"
          >
            <q-item-section avatar>
              <q-icon name="note_add" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Prüfung erstellen</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            to="/hausaufgaben"
            exact
            active-class="kx-navigationitem-active"
          >
            <q-item-section avatar>
              <q-icon name="description" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Hausaufgabe erstellen</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
      <q-page-container
        style="height: 100vh; padding-top: 70px"
        class="kx-content"
      >
        <div class="kx-content-page">
          <div class="kx-content-page-title">School-Planner</div>
          <div class="kx-content-page-information">
            <q-breadcrumbs class="text-brown breadcrum-padding" separator="---">
              <template v-slot:separator>/</template>
              <q-breadcrumbs-el
                v-for="crumb in store.getCurrentBreadcrumb"
                :key="crumb.Url"
                :label="decodeURI(crumb.Text)"
                :to="crumb.Url"
              ></q-breadcrumbs-el>
            </q-breadcrumbs>
          </div>
        </div>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
