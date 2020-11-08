<template>
  <v-content>
    <v-card flat>
      <v-card-title> {{ gathering.name }}</v-card-title>
      <v-card-text>
        {{ gathering.start }}<br />
        {{ gathering.end }}
      </v-card-text>
    </v-card>
    <v-data-table
        :headers="headers"
        :items="tableItems"
      ></v-data-table>
  </v-content>
</template>

<script>
export default {
  name: "GatheringDetail",
  data: () => ({
    headers: [
      {text: 'Name', value: 'name'},
      {text: 'Presence', value: 'presence'},
    ],
  }),
  props: {
    gatherings: {
      type: Array,
      required: true,
    },
    presenceList: {
      type: Object,
      required: true
    }
  },
  computed: {
    tableItems: function () {
      return this.presenceList[this.$route.params.id]
    },
    gathering: function () {
      let gathering = this.gatherings.find(
        (element) => element.id === this.$route.params.id
      );
      return gathering;
    }
  },
};
</script>
