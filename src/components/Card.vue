<template>
  <div id="card">
    <div class="card-header">
      <img src="./../assets/imgs/exemple.jpeg" alt="User">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: {
        img: null,
        name: null,
        title: null,
        description: null,
        link: null
      }
    }
  }
}
</script>