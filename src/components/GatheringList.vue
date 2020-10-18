<template>
  <v-list>
    <v-list-item two-line v-for="gathering in gatherings" :key="gathering.id">
      <v-list-item-content>
        <v-list-item-title>{{ gathering.name }}</v-list-item-title>
        <v-list-item-subtitle
          >{{ toString(gathering.start) }} - {{ toString(gathering.end) }}</v-list-item-subtitle
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
    gatherings: {
      type: Array,
      required: true,
    },
  },
};
</script>
