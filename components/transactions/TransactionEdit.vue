<template>
  <div>
    <div class="grid grid-cols-2 justify-between gap-5 sm:grid-cols-4">
      <BaseInput type="date" label="Data da Transação" v-model="date"/>
      <BaseInput type="money" label="Valor" v-model="money" :value="money"/>
      <BaseInput type="text" label="Descrição" v-model="descricao"/>
      <BaseSelect label="Categoria" v-model="optionSelected" :category-id="optionSelected"/>
    </div>
    <div class="text-right mt-3">
      <BaseButton title="Excluir" type="cancel" @click="exclude"/>
      <BaseButton title="Salvar" @click="save"/>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import BaseInput from "~/components/bases/BaseInput.vue";
import BaseButton from "~/components/bases/BaseButton.vue";
import BaseSelect from "~/components/bases/BaseSelect.vue";

export default Vue.extend({
  props: ['transaction'],
  components: {BaseSelect, BaseButton, BaseInput},
  data(){
    return {
      date: this.transaction.date,
      money: Number(this.transaction.value),
      descricao: this.transaction.description,
      optionSelected: this.transaction.categoryId
    }
  },
  methods: {
    ...mapActions(['removeTransaction','updateTransaction']),
    exclude(){
      this.removeTransaction(this.transaction)
    },
    save(){
      this.updateTransaction({
        id: this.transaction.id,
        date: this.date,
        value: this.money,
        description: this.descricao,
        category: this.optionSelected
      })
    }
  }
})
</script>
<style>
.slide-fade-enter-active {
  transition: all .5s ease-out;
}

.slide-fade-enter {
  transform: translateY(-40px);
  opacity: 0;
}

.slide-fade-leave-active {
  transition: all .5s ease-out;
}

.slide-fade-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>
