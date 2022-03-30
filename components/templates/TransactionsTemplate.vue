<template>
  <div class="container mx-auto mt-4">
    <div class="flex justify-end">
      <BaseButton @click="isShowing = !isShowing" title="Nova Transação"/>
    </div>
    <TransactionAdd v-show="isShowing" @cancel="isShowing = false"/>
    <TransactionTotal/>
    <TransactionList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TransactionAdd from "~/components/transactions/TransactionAdd.vue";
import BaseButton from "~/components/bases/BaseButton.vue";
import TransactionList from "~/components/transactions/TransactionList.vue";
import TransactionTotal from "~/components/transactions/TransactionTotal.vue";

export default Vue.extend({
  components: {TransactionTotal, TransactionList, BaseButton, TransactionAdd},
  data(){
    return{
      isShowing: false,
    }
  }
})
</script>
