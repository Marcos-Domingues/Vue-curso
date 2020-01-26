import Cadastro from './components/Cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
  { path: '', component: Home, titulo: 'Home' },
  { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
];