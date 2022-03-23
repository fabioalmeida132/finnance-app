<template>
  <div>
    <div class="grid grid-cols-2 justify-between gap-5 sm:grid-cols-4">
      <BaseInput type="date" id="data-transacao" label="Data da Transação"/>
      <BaseInput type="money" id="valor" label="Valor" v-model="money" :value="money"/>
      <BaseInput type="text" id="descricao" label="Descrição"/>
      <BaseSelect id="categoria" label="Categoria" :options="options" v-model="optionSelected"/>
    </div>
    <div class="text-right mt-3">
      <BaseButton title="Excluir" type="cancel" @click="$emit('cancel')"/>
      <BaseButton title="Salvar"/>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import BaseInput from "~/components/bases/BaseInput.vue";
import BaseButton from "~/components/bases/BaseButton.vue";
import BaseSelect from "~/components/bases/BaseSelect.vue";

export default Vue.extend({
  components: {BaseSelect, BaseButton, BaseInput},
  data(){
    return {
      optionSelected: '',
      money: 0,
      options: [
        {
          id: 1,
          category: 'Casa'
        },
        {
          id: 2,
          category: 'Diversão'
        },
      ]
    }
  },
  methods: {

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
