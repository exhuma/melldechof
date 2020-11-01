<template>
  <v-container>
    <h1>Upcoming Gatherings</h1>
    <v-list>
      <v-list-item
        two-line
        v-for="gathering in upcomingGatherings"
        :key="gathering.id"
      >
        <v-list-item-content>
          <v-list-item-title
            ><router-link :to="`/gathering/${gathering.id}`">{{
              gathering.name
            }}</router-link></v-list-item-title
          >
          <v-list-item-subtitle
            >{{ toString(gathering.start) }} -
            {{ toString(gathering.end) }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { DateTime } from "luxon";
export default {
  name: "GatheringList",
  data: () => ({}),
  methods: {
    toString(date) {
      const value = DateTime.fromJSDate(date);
      return value.setLocale("de-DE").toLocaleString(DateTime.DATETIME_MED);
    },
  },
  computed: {
    upcomingGatherings: function () {
      const output = [];
      const now = new Date();
      this.gatherings.forEach((element) => {
        if (element.end >= now) {
          output.push(element);
        }
      });
      return output;
    },
  },
  props: {
    gatherings: {
      type: Array,
      required: true,
    },
  },
};
</script>
