<template>
  <div id="board">
    <div class="form">
      <FormBoard/>
    </div>
    <div class="card-body">
      <h1>Users</h1>
    <div class="cards">
      <Card
        v-for="card in cards"
        :key="card.id"
        :card="card"
      />
    </div>
    </div>
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