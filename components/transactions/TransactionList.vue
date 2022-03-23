<template>
  <div>
    <h1 class="font-bold text-2xl">Transações</h1>
    <TransactionItem valor="0"/>
    <TransactionItem valor="150"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TransactionItem from "~/components/transactions/TransactionItem.vue";

export default Vue.extend({
  components: {TransactionItem}
})
</script>

<style scoped>

</style>
