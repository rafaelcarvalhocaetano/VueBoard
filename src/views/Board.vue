<template>
  <div id="board">
    <FormBoard />
    <Card />
  </div>
</template>

<script>

import FormBoard from './FormBoard.vue';
import Card from '../components/Card.vue';

export default {

  components: {
    FormBoard,
    Card
  }

}
</script>