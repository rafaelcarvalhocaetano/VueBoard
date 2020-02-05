<template>
  <div id="board">
    <FormBoard class="form" />
    <Card
      class="cards"
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script>

import FormBoard from './FormBoard.vue';
import Card from '../components/Card.vue';
import axios from '../service/axios';

export default {
  components: {
    FormBoard,
    Card
  },
  data() {
    return {
      cards: []
    }
  },

  created() {
    axios.get('boards').then(x => {
    console.log("TCL: created -> x", x)
      this.cards = x.data;
      console.log("TCL: created -> x.data", x.data)
    }).catch(e => alert(` Error ${ e.message }`));
  }

}
</script>