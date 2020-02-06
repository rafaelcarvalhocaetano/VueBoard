<template>
  <div id="board">
    <div class="form">
      <FormBoard />
    </div>
    <div class="card-body">
      <h1>Users</h1>
    <div class="cards">
      <Card
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @card="sendEdit"
      />
    </div>
    </div>
  </div>
</template>

<script>

import FormBoard from './FormBoard.vue';
import Card from '../components/Card.vue';
import axios from '../service/axios';

import Bus from '../util/bus';

export default {
  components: {
    FormBoard,
    Card
  },
  data() {
    return {
      cardEdit: Object,
      cards: []
    }
  },
  created() {
    axios.get('boards').then(x => {
      this.cards = x.data;
    }).catch(e => alert(` Error ${ e.message }`));
  },
  methods: {
    sendEdit(event) {
      Bus.$emit('card', event)
    }
  }

}
</script>