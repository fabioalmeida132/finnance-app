<template>
  <div class="bg-white border-dashed rounded-md my-3 px-5 py-5 shadow-md">
    <span class="bg-violet-500 text-white px-2 py-0.5 rounded-md"> {{ transaction.category }}</span>
    <div class="flex justify-between">
      <span>{{ transaction.description }}</span>
      <div>
        <div class="font-bold flex items-center gap-2.5">
          <font-awesome-icon icon="fa-solid fa-minus" class="text-red-600" v-if="transaction.value <= 0"/>
          <font-awesome-icon icon="fa-solid fa-plus" class="text-green-600" v-else/>
          <span>{{ transaction.valueMoney }}</span>
          <font-awesome-icon icon="fa-solid fa-chevron-up" v-if="isShowing" @click.prevent="isShowing = !isShowing"/>
          <font-awesome-icon icon="fa-solid fa-chevron-down" v-else @click.prevent="isShowing = !isShowing"/>
        </div>
      </div>
    </div>
    <TransactionEdit class="mt-2" v-show="isShowing" @cancel="isShowing = false" :transaction="transaction"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TransactionEdit from "~/components/transactions/TransactionEdit.vue";

export default Vue.extend({
  components: {TransactionEdit},
  props: {
    transaction: {
      type: Object,
      required: true,
    }
  },
  data(){
    return {
      isShowing: false
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
