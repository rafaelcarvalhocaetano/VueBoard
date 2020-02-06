<template>
  <a id="card" @click="emitCard">
    <div class="card-header">
      <img :src="card.img" alt="User">
      <div class="card-header-title">
        <h2>{{ card.name ? card.name : 'Sem Nome' }}</h2>
        <small>{{ card.title ? card.title : 'Sem título'}}</small>
      </div>
    </div>
    <div class="card-body">
      <p>{{ card.description ? card.description : 'Sem descrição do desenvolvedor' }}</p>
    </div>
    <div class="card-link">
      <a class="card-link-action" :href="card.link" target="_blank">{{ card.link ? 'Acessar perfil no Github' : 'Sem acesso ao perfil do desenvolvedor' }}</a>
    </div>
  </a>
</template>

<script>

export default {
  props: {
    card: {
      id: null,
      img: null,
      name: null,
      title: null,
      description: null,
      link: null,
    }
  },
  methods: {
    emitCard() {
      this.$emit('card', this.card)
    }
  }
}
</script>