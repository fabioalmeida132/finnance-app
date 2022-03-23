<template>
  <div class="flex flex-col space-y-1 w-full">
    <label :for="id">{{label}}</label>
    <select :name="id" :id="id" @input="updateValue">
      <option value="" selected disabled>Selecione uma categoria</option>
      <option :value="option.id" v-for="(option, index) in options" :key="index">
        {{option.category}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    options: Array,
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
  select{
    @apply px-5 py-1 rounded-md border border-gray-300
  }
</style>
