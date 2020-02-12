<template>
  <div id="board">
    <div class="form">
      <FormBoard :id="cardEdit.id" :form="cardEdit"/>
    </div>
    <div class="card-body">
      <h1>Users</h1>
      <div class="cards">
        <Card
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @card="send"
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
      cards: [],
      cardEdit: {
        name: null,
        img: null,
        title: null,
        description: null,
        link: null
      }
    }
  },
  created() {
    axios.get('boards').then(x => {
      this.cards = x.data;
    }).catch(e => alert(` Error ${ e.message }`));
  },
  methods: {
    send(event) {
      this.cardEdit = event;
    }
  }

}
</script>