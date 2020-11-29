<template>
  <v-main>
    <v-card flat>
      <v-card-title> {{ gathering.name }}</v-card-title>
      <v-card-text>
        {{ formatDateTimeRange(gathering.start, gathering.end) }}
      </v-card-text>
    </v-card>
    <v-data-table
        :headers="headers"
        :items="tableItems"
        @click:row="onRowClicked"
      >
      <template v-slot:item.presence="{ item }">
        <v-icon :class="presenceColor(item.presence)">
          {{ presenceIcon(item.presence) }}
        </v-icon>
      </template>
    </v-data-table>
  </v-main>
</template>

<script>
import {Presence} from '@/enums.js'
import { AppLocale } from '@/applocale.js'
import { Event } from '@/event.js'
export default {
  name: "GatheringDetail",
  data: () => ({
    headers: [
      {text: 'Presence', value: 'presence', width: "9em", align: "right"},
      {text: 'Name', value: 'userName'},
    ],
  }),
  props: {
    storage: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDateTimeRange(startValue, endValue) {
      return AppLocale.formatDateTimeRange(startValue, endValue)
    },
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
        return 'grey--text text--lighten-2'
      }
    },
    onRowClicked (item) {
      this.$emit("presenceClicked", item, this.$route.params.id)
    }
  },
  computed: {
    tableItems: function () {
      return this.storage.presenceList[this.$route.params.id]
    },
    gathering: function () {
      let gathering = this.storage.gatherings.find(
        (element) => element.id === this.$route.params.id
      );
      if (!gathering) {
        return new Event()
      }
      return gathering;
    }
  },
};
</script>
