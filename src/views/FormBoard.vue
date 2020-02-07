<template>
  <form id="form">
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
        :dataValue="form.name"
      />
    <button class="btn-submit" type="submit">SEND</button>
  </form>
</template>


<script>

import Input from '../components/Input';

export default {
  components: {
    Input
  },
  props: {
    id: [String, Number],
    form: {
      user: null,
      description: null
    }
  }
}
</script>