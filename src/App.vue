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
      <ManageGatherings />
    </v-main>
  </v-app>
</template>

<script>
import ManageGatherings from "@/views/ManageGatherings.vue";
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
    gathering: {
      id: "sample-uuid",
      title: "Rehearsal",
      starts: "2020-01-01",
    },
  }),
};
</script>
