import { createRouter, createWebHistory } from 'vue-router';
import TarjetaPiloto from './../components/TarjetaPiloto.vue'; // Crea este archivo de componente
import TarjetaCircuito from './../components/TarjetaCircuito.vue'; // Crea este archivo de componente
import TarjetaEquipo from './../components/TarjetaEquipo.vue'; // Crea este archivo de componente



const routes = [
  { path: '/', name:'drivers',component: TarjetaPiloto },
  { path: '/drivers', name:'drivers', component: TarjetaPiloto },
  { path: '/circuits',name:'circuits', component: TarjetaCircuito },
  { path: '/teams',name:'circuits', component: TarjetaEquipo },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
