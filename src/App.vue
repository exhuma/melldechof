<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          text
        >
          <v-icon>{{ link.icon }}</v-icon>
          {{ link.text }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="dark-bg">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="md"
            >
              <router-view
                class="pa-0"
                :storage="storage"
                @presenceClicked="onPresenceClicked"
                />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import Vue from "vue";
import { Storage } from "@/storage.js";
import { PresenceManager } from "@/presenceManager.js";
export default {
  name: "App",

  methods: {
    setPresence: function (payload) {
      console.log(payload);
    },
    onPresenceClicked: function (presence, eventId) {
      this.presenceManager.togglePresence(this.storage, presence, eventId)
    }
  },

  data: () => ({
    links: [
      {"icon": "mdi-calendar", "text": "Home", "to": "/"},
    ],
  }),

  async created () {
    this.storage = Vue.observable(new Storage())
    this.presenceManager = new PresenceManager()
    this.storage.loadGatherings()
    this.storage.loadPresences()
  },
  
};
</script>


<style scoped>
.dark-bg {
  background-color: #333;
}
</style>