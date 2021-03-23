import Cadastro from './components/Cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
  { path: '', name: 'home', component: Home, titulo: 'Home', menu:true },
  { path: '/cadastro', name: 'Register', component: Cadastro, titulo: 'Register', menu: true },
  { path: '*', component: Home, menu:false}
];