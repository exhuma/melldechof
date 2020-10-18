<template>
  <v-list>
    <v-list-item two-line v-for="event in events" :key="event.id">
      <v-list-item-content>
        <v-list-item-title>{{ event.name }}</v-list-item-title>
        <v-list-item-subtitle
          >{{ toString(event.start) }} - {{ toString(event.end) }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { DateTime } from "luxon";
export default {
  name: "GatheringList",
  data: () => ({}),
  methods: {
    toString(date) {
      const value = DateTime.fromJSDate(date);
      return value.setLocale('de-DE').toLocaleString(DateTime.DATETIME_MED);
    },
  },
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
};
</script>
