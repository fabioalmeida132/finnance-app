<template>
  <div  class="grid grid-cols-2  sm:grid-cols-3 justify-center mb-4 mt-4 gap-8">
    <div class="bg-red-400 px-12 py-8 space-y-2 flex flex-col items-center rounded-2xl">
      <h1 class="text-white text-2xl">Despesas</h1>
      <p class="text-white text-xl font-bold">{{ despenses }}</p>
    </div>
    <div class="bg-green-400 px-12 py-8 space-y-2 flex flex-col items-center rounded-2xl">
      <h1 class="text-white text-2xl">Receitas</h1>
      <p class="text-white text-xl font-bold">{{ received }}</p>
    </div>
    <div class="col-span-2 sm:col-span-1 bg-blue-400 px-12 py-8 space-y-2 flex flex-col items-center rounded-2xl">
      <h1 class="text-white text-2xl">Saldo</h1>
      <p class="text-white text-xl font-bold">{{ final }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      despenses: "totalDespenses",
      received: "totalReceived",
      final: "totalFinal",
    })
  },
})
</script>

<style lang="scss" scoped>

</style>
