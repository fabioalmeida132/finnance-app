<template>
  <div>
    <BaseSelect id="categoria" label="Categoria" v-model="filter" :disabled="false" :placeholder="'Todas Categorias'"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseSelect from "~/components/bases/BaseSelect.vue";
import {mapActions} from "vuex";

export default Vue.extend({
  data() {
    return {
      filter: ''
    }
  },
  methods: {
    ...mapActions(['setFilter']),
  },
  watch: {
    filter(value) {
      this.setFilter({
        categoryId: value
      });
    }
  },
  components: {BaseSelect}
})
</script>

<style lang="scss" scoped>

</style>
