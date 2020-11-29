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
      :events="storage.gatherings"></v-calendar>
  </v-sheet>
</template>

<script>
import { AppLocale } from '@/applocale.js'
export default {
  name: "Calendar",
  props: {
    storage: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentDateLocalised: function () {
      return AppLocale.formatCalendarTitle(this.date)
    }
  },
  methods: {
    goToToday () {
      this.date = AppLocale.toISODate(new Date())
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
