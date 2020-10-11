<template>
  <div>
    {{ gathering.title }} {{ gathering.starts }}
    <v-btn block height="300" color="green" @click="markPresence">Present</v-btn>
    <v-btn block height="300" color="red" @click="markAbsence">Absent</v-btn>
  </div>
</template>

<script>
import {Proxy} from '@/proxy.js'

export default {
  name: 'MarkPresence',
  created: function () {
    this.proxy = new Proxy("http://localhost:8000")
  },
  data: () => ({
    proxy: null
  }),
  props: {
    gathering: {
      type: Object,
      required: true,
    }
  },
  methods: {
    markPresence: async function () {
      console.error('123')
      try {
        let foo = await this.proxy.test()
        console.log(foo)
      } catch (e) {
        console.error('boom')
        console.error(e)
      }
      this.$emit('presenceChanged', {
        gathering: this.gathering,
        presence: 'present',
      })
    },
    markAbsence: function () {
      this.$emit('presenceChanged', {
        gathering: this.gathering,
        presence: 'absent',
      })
    }
  },
};
</script>
