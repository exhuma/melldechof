<template>
  <v-container>
    <Calendar :gatherings="gatherings" />
    <GatheringList :gatherings="gatherings" />
  </v-container>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
import GatheringList from "@/components/GatheringList.vue";
export default {
  name: "ManageGatherings",
  props: {
    gatherings: {
      type: Array,
      required: true,
    }
  },
  components: {
    Calendar,
    GatheringList,
  },
};
</script>
