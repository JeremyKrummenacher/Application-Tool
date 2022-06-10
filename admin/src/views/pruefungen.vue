<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { Auftrag } from "../stores/types";
import { applicantStore } from "../stores/applicantStore";
import router from "../router";

const store = applicantStore();
const auftrag = ref(new Auftrag());

async function onSubmit() {
  store.createPruefung(auftrag.value);
  console.log(auftrag.value);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  router.push({ name: "uebersicht" });
}
</script>

<template>
  <div class="kx-card q-mt-sm" style="max-width: 700px">
    <div class="kx-card-title kx-card-title-extend">
      <div class="kx-card-title-left">Prüfung erstellen</div>
    </div>
    <div class="q-pa-md">
      <q-stepper v-model="store.step" vertical color="primary" animated>
        <q-step
          :name="1"
          title="erstellen sie eine neue Prüfung"
          icon="settings"
        >
          <div class="kx-card-body">
            <q-form>
              <div class="row items-start">
                <div class="col-12 col-md-6 q-pr-md-md">
                  <label class="text-h6 text-weight-light" for="machine"
                    >Titel</label
                  >
                  <q-input
                    square
                    filled
                    v-model="auftrag.titel"
                    label="Titel"
                    lazy-rules
                  />
                </div>
                <div class="col-12 col-md-6 q-pr-md-md">
                  <label class="text-h6 text-weight-light" for="machine"
                    >Fach</label
                  >
                  <q-select
                    filled
                    v-model="auftrag.fach"
                    :options="['M242', 'M226b', 'M120', 'Physik', 'Deutsch']"
                    label="Fach"
                  />
                </div>
              </div>
              <div class="row items-start">
                <div class="col-12 col-md-6 q-pr-md-md">
                  <label class="text-h6 text-weight-light" for="machine"
                    >Datum</label
                  >
                  <q-input
                    filled
                    v-model="auftrag.date"
                    mask="date"
                    :rules="['date']"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qDateProxy"
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="auftrag.date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-12 col-md-6 q-pr-md-md">
                  <label class="text-h6 text-weight-light" for="machine"
                    >Beschreibung</label
                  >
                  <q-input
                    square
                    filled
                    v-model="auftrag.beschreibung"
                    label="beschreibung"
                  />
                </div>
              </div>
            </q-form>
          </div>
          <q-stepper-navigation>
            <q-btn @click="onSubmit" color="primary" label="erstellen" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>
