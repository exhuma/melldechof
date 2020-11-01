<template>
  <v-sheet>
    <center><h1>{{ currentDateLocalised }}</h1></center>
    <v-sheet
        tile
        height="54"
        class="d-flex"
      >
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.prev()"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn @click="goToToday()" text class="ma-2">
          <v-icon class="mr-2">mdi-calendar</v-icon> Go to Today
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.next()"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet>
    <v-calendar
      type="month"
      ref="calendar"
      color="primary"
      v-model="date"
      :events="gatherings"></v-calendar>
  </v-sheet>
</template>

<script>
import { DateTime } from 'luxon';
export default {
  name: "Calendar",
  props: {
    gatherings: {
      type: Array,
      required: true,
    },
  },
  computed: {
    currentDateLocalised: function () {
      const date = DateTime.fromISO(this.date)
      return date.toLocaleString({month: 'long', year: 'numeric'})
    }
  },
  methods: {
    goToToday () {
      const today = DateTime.fromJSDate(new Date())
      this.date = today.toISODate()
    },
  },
  created () {
    this.goToToday()
  },
  data: () => ({
    date: ''
  }),
};
</script>
