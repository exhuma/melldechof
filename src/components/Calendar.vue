<template>
  <v-calendar :events="events"> </v-calendar>
</template>

<script>
export default {
  name: "Calendar",
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),
  created () {
      console.log(this.events)
  }
};
</script>
