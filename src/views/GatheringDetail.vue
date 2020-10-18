<template>
  <v-card>
    <v-card-title> {{ gathering.name }}</v-card-title>
    <v-card-text>
      {{ gathering.start }}<br />
      {{ gathering.end }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GatheringDetail",
  data: () => ({}),
  props: {
    gatherings: {
      type: Array,
      required: true,
    },
  },
  computed: {
    gathering: function () {
      let gathering = this.gatherings.find(
        (element) => element.id === this.$route.params.id
      );
      return gathering;
    },
  },
};
</script>
