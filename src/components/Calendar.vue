<template>
  <v-sheet>
    <v-sheet height="64">
      <v-toolbar flat>
        <v-btn @click="goToToday()" outlined class="mr-4">Today</v-btn>
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.prev()"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.next()"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-toolbar-title>{{ currentDateLocalised }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-sheet>
    <v-calendar
      type="month"
      ref="calendar"
      color="primary"
      v-model="date"
      @click:event="onEventClicked"
      :weekdays="[1, 2, 3, 4, 5, 6, 0]"
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
    onEventClicked ({event}) {
      this.$router.push(`gathering/${event.id}`)
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
