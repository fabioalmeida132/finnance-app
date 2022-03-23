<template>
  <button class="px-3 py-1 rounded-md" :class="type === 'cancel' ? 'text-red-600' : 'bg-blue-600 text-white'" @click="$emit('click')">
    {{title}}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props:{
    title: String,
    type: String
  }
})
</script>

<style lang="scss" scoped>

</style>
