<template>
  <v-calendar color="primary" :events="gatherings"> </v-calendar>
</template>

<script>
export default {
  name: "Calendar",
  props: {
    gatherings: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),
};
</script>
