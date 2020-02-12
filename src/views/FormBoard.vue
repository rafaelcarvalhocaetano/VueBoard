<template>
  <form id="form" >
      <h1>User Github</h1>
      <Input
        label="Usuário no Github"
        id="input-label"
        place="User Name"
        maxLength="100"
        :dataValue="form.name"
      />

      <Input
        class="tcn"
        label="Tecnologia"
        id="input-label"
        place="Tecnologia"
        maxLength="130"
        :dataValue="form.description"
      />
    <button class="btn-submit" type="submit" @click="submited">SEND</button>
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
    id: [String, Number],
    form: {
      name: null,
      img: null,
      title: null,
      description: null,
      link: null
    }
  },
  methods: {
    submited() {
      if (this.form.id) {
        console.log(' data edit ', this.form)
        axios.put(`boards`, this.form);
      } else {
        console.log(' data create ', this.form)
        axios.post(`boards`, this.form);
      }
      
    }
  }
}
</script>