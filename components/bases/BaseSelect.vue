<template>
  <div class="flex flex-col space-y-1 w-full">
    <label :for="id">{{label}}</label>
    <select :id="id" v-model="localValue">
      <option value="" selected disabled>Selecione uma categoria</option>
      <option :value="option.id" v-for="(option, index) in options" :key="index" :selected="categoryId === option.id">
        {{option.category}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    categoryId: {
      type: [String,Number],
      default: ''
    },
    label: String,
    value: {
      type: [String,Number]
    }
  },
  data(){
    return {
      id: ''
    }
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
    options(){
      return this.$store.state.categories
    },
  },
  methods: {
    updateValue(event: { target: HTMLInputElement }) {
      this.$emit('input', event.target.value)
    }
  },
  mounted () {
    this.id = this.lodash.uniqueId();
  }
})
</script>

<style scoped>
  select{
    @apply px-5 py-1 rounded-md border border-gray-300
  }
</style>
