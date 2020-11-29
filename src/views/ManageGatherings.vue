<template>
  <v-container>
    <Calendar :storage="storage" />
    <GatheringList :storage="storage" />
  </v-container>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
import GatheringList from "@/components/GatheringList.vue";
export default {
  name: "ManageGatherings",
  props: {
    storage: {
      type: Object,
      required: true,
    }
  },
  components: {
    Calendar,
    GatheringList,
  },
};
</script>
