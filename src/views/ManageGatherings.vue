<template>
  <v-container>
    <Calendar :events="events" />
    <GatheringList :events="events" />
  </v-container>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
import GatheringList from "@/components/GatheringList.vue";
import { Event } from "@/event.js";
export default {
  name: "ManageGatherings",
  data: () => ({
    events: [
      Event.fromISO("Event 1", "2020-10-01T20:00+0200", "2020-10-01T22:00+0200"),
      Event.fromISO("Event 2", "2020-10-07T20:00+0200", "2020-10-07T22:00+0200"),
      Event.fromISO("Event 3", "2020-10-14T20:00+0200", "2020-10-12T22:00+0200"),
      Event.fromISO("Event 4", "2020-10-22T20:00+0200", "2020-10-22T22:00+0200"),
    ],
  }),
  components: {
    Calendar,
    GatheringList,
  },
};
</script>
