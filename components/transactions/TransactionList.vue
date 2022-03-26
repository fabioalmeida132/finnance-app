<template>
  <div>
    <h1 class="font-bold text-2xl">Transações</h1>
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

export default Vue.extend({
  components: {TransactionItem},
  computed: {
    ...mapGetters({
      transactions: 'transactions'
    })
  }
})
</script>

<style scoped>

</style>
