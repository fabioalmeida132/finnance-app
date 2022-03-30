<template>
  <transition name="slide-fade">
    <div class="bg-blue-100 border-dashed border-2 border-indigo-200 rounded-md my-3 px-5 py-5">
      <div class="grid grid-cols-2 justify-between gap-5 sm:grid-cols-4 ">
        <BaseInput type="date" id="data-transacao" label="Data da Transação" v-model="date"/>
        <BaseInput type="money" id="valor" label="Valor" v-model="money" :value="money"/>
        <BaseInput type="text" id="descricao" label="Descrição" v-model="descricao"/>
        <BaseSelect id="categoria" label="Categoria" v-model="optionSelected" :category-id="optionSelected"/>
      </div>
      <div class="text-right mt-3">
        <BaseButton title="Cancelar" type="cancel" @click="$emit('cancel')"/>
        <BaseButton title="Adicionar" @click="add"/>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseInput from "~/components/bases/BaseInput.vue";
import BaseButton from "~/components/bases/BaseButton.vue";
import BaseSelect from "~/components/bases/BaseSelect.vue";
import { mapActions } from 'vuex'

export default Vue.extend({
  components: {BaseSelect, BaseButton, BaseInput},
  data(){
    return {
      optionSelected: '',
      money: 0,
      descricao: '',
      date: ''
    }
  },
  methods: {
    ...mapActions(['addTransaction']),
    add(){
      if (this.optionSelected !== '') {
        const transaction = {
          description: this.descricao,
          value: this.money,
          date: this.date,
          category: this.optionSelected
        }
        this.addTransaction(transaction)
        this.money = 0;
        this.descricao = '';
        this.date = '';
        this.optionSelected = '';
        this.$emit('cancel')
      }
    },
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
