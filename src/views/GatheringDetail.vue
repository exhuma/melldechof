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
      >
      <template v-slot:item.presence="{ item }">
        <v-icon :class="presenceColor(item.presence)">
          {{ presenceIcon(item.presence) }}
        </v-icon>
      </template>
    </v-data-table>
  </v-content>
</template>

<script>
import {Presence} from '@/enums.js'
export default {
  name: "GatheringDetail",
  data: () => ({
    headers: [
      {text: 'Presence', value: 'presence', width: "9em", align: "right"},
      {text: 'Name', value: 'name'},
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
  methods: {
    presenceIcon(value) {
      if (value === Presence.PRESENT) {
        return 'mdi-account-check'
       } else if (value === Presence.ABSENT) {
        return 'mdi-account-outline'
       } else {
        return 'mdi-help'
       }
    },
    presenceColor(value){
      if (value === Presence.PRESENT) {
       return 'green--text text--darken-3'
     } else if (value === Presence.ABSENT) {
        return 'green--text text--lighten-3'
     } else {
        return 'grey--text text--lighten-3'
      }
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
