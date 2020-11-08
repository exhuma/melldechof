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
          :key="link"
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
          <v-col cols="2">
            <v-sheet rounded="md">                
              TODO<br />
              context-info
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="md"
            >
              <router-view
                class="pa-0"
                :gatherings="gatherings"
                :presenceList="presenceList"
                />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import { Storage } from "@/storage.js";
export default {
  name: "App",

  methods: {
    setPresence: function (payload) {
      console.log(payload);
    },
  },

  data: () => ({
    gatherings: [],
    links: [
      {"icon": "mdi-calendar", "text": "Home", "to": "/"},
    ],
  }),

  created () {
    this.storage = new Storage()
    this.storage.loadGatherings()
    this.storage.loadPresences()
    this.gatherings = this.storage.gatherings
    this.presenceList = this.storage.presenceList
  }
};
</script>


<style scoped>
.dark-bg {
  background-color: #333;
}
</style>