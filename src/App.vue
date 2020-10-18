<template>
  <v-app>
    <v-navigation-drawer app permanent>
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
      <ManageGatherings
        :gatherings="gatherings"
         />
    </v-main>
  </v-app>
</template>

<script>
import ManageGatherings from "@/views/ManageGatherings.vue";
import { Event } from "@/event.js";
export default {
  name: "App",

  components: {
    ManageGatherings,
  },

  methods: {
    setPresence: function (payload) {
      console.log(payload);
    },
  },

  data: () => ({
    gatherings: [
      Event.fromISO("Event 1", "2020-10-01T20:00+0200", "2020-10-01T22:00+0200"),
      Event.fromISO("Event 2", "2020-10-07T20:00+0200", "2020-10-07T22:00+0200"),
      Event.fromISO("Event 3", "2020-10-14T20:00+0200", "2020-10-12T22:00+0200"),
      Event.fromISO("Event 4", "2020-10-22T20:00+0200", "2020-10-22T22:00+0200"),
    ]
  }),
};
</script>
