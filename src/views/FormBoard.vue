<template>
  <form id="form" @submit.prevent="submited">
      <h1>User Github</h1>
      <Input
        label="Usuário no Github"
        id="input-label"
        place="User Name"
        maxLength="100"
        :dataValue="form.name"
        v-model="form.name"
      />

      <Input
        class="tcn"
        label="Tecnologia"
        id="input-label"
        place="Tecnologia"
        maxLength="130"
        v-model="form.description"
        :dataValue="form.description"
      />
    <button class="btn-submit" type="submit">SEND</button>
  </form>
</template>


<script>

import Input from '../components/Input';
import axios from '../service/axios';

export default {
  components: {
    Input
  },
  props: {
    id: null,
    form: {
      id: null,
      img: null,
      name: null,
      title: null,
      description: null,
      link: null
    }
  },
  methods: {
    submited() {
      if (this.form.id) {
        axios.put(`boards`, this.form);
      } else {
        axios.post(`boards`, this.form);
      }
      
    }
  }
}
</script>