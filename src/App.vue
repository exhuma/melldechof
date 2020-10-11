<template>
  <v-app>
    <v-main>
      <MarkPresence
        :gathering="gathering"
        @presenceChanged="setPresence"
      />
    </v-main>
  </v-app>
</template>

<script>
import MarkPresence from './components/MarkPresence';

export default {
  name: 'App',

  components: {
    MarkPresence,
  },

  methods: {
    setPresence: function (payload) {
      console.log(payload)
    }
  },

  data: () => ({
    gathering: {
      id: 'sample-uuid',
      title: 'Rehearsal',
      starts: '2020-01-01',
    }
  }),
};
</script>
