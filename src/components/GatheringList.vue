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
            >{{ toString(gathering.start, gathering.end) }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { AppLocale } from '@/applocale.js'
export default {
  name: "GatheringList",
  data: () => ({}),
  methods: {
    toString(start, end) {
      return AppLocale.formatDateTimeRange(start, end)
    },
  },
  computed: {
    upcomingGatherings: function () {
      const output = [];
      const now = new Date();
      this.storage.gatherings.forEach((element) => {
        if (element.end >= now) {
          output.push(element);
        }
      });
      return output;
    },
  },
  props: {
    storage: {
      type: Object,
      required: true,
    },
  },
};
</script>
