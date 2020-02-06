<template>
  <form id="form"  @submit.prevent="sendForm">
      <h1>Cadastrar</h1>
      <Input
        label="Usuário no Github"
        id="input-label"
        place=""
        maxLength="100"
        v-model="formDev.user"
      />

      <Input
        class="tcn"
        label="Tecnologia"
        id="input-label"
        place=""
        maxLength="130"
        v-model="formDev.tecnical"
      />
    <button class="btn-submit" type="submit">SEND</button>
  </form>
</template>


<script>

import Input from '../components/Input.vue';
import Bus from '../util/bus';

export default {
  components: {
    Input
  },
  data() {
    return {
      formDev: {
        user: null,
        tecnical: null,
        lat: null,
        long: null
      }
    }
  },
  mounted() {
    Bus.$on('card', (value) => this.formDev = value)
  }
}
</script>