<template>
  <div class="corpo">
    <meu-menu :rotas="routes" />
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { routes } from "./Routes";
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: {
    "meu-menu": Menu
  },

  data() {
    return {
      routes : routes.filter(route => route.menu)
    };
  }
};
</script>
<style>
.corpo {
  margin: 0 auto;
  width: 96%;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.9s;
}
ul{
  list-style-type: none;
  padding: 0;
}
li{
  list-style-type: none;
}
li a{
  text-decoration: none;
}
</style> 