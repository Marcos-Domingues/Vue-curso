<template>
  <nav>
    <ul>
      <li v-for="(rota, item) in rotas" :key="item">
        <router-link :to="rota.path ? rota.path: '/'">{{ rota.titulo }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["rotas"]
};
</script>
<style>
</style>