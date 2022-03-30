<template>
  <div>
    <h1 class="font-bold text-2xl">Transações</h1>
    <TransactionFilter class="w-2/12"/>
    <div>
      <TransactionItem
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import TransactionItem from "~/components/transactions/TransactionItem.vue";
import TransactionFilter from "~/components/transactions/TransactionFilter.vue";

export default Vue.extend({
  components: {TransactionFilter, TransactionItem},
  computed: {
    ...mapGetters({
      transactions: 'transactions'
    })
  }
})
</script>

<style scoped>

</style>
