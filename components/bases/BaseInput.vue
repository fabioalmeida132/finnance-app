<template>
  <div class="flex flex-col space-y-1 w-full">
    <label :for="id">{{label}}</label>
    <input :type="type" :id="id" :name="id"  :value="value" @input="updateValue" v-if="type !== 'money'">
    <money v-else class="money" :id="id" :name="id" :value="value"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: String,
    id: [String,Number],
    label: String,
    value: {
      type: [String, Number]
    }
  },
  methods: {
    updateValue(event: any) {
      this.$emit('input', event.target.value)
    }
  }
})
</script>

<style scoped>
  input, .money{
    @apply px-5 py-1 rounded-md border border-gray-300
  }
</style>
