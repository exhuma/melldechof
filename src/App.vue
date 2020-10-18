<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Mell Dech Of</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Manage Gatherings </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>
    <v-main>
      <router-view 
        :gatherings="gatherings"
        />
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
    gatherings: []
  }),

  created () {
    this.storage = new Storage()
    this.storage.loadGatherings()
    this.gatherings = this.storage.gatherings
  }
};
</script>
