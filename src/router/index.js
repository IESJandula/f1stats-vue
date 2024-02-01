import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import HomeView from '../views/HomeView.vue'
import PilotosView from '../views/PilotosView.vue'
import EscuderiasView from '../views/EscuderiasView.vue'
import CircuitosView from '../views/CircuitosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '', component: HomeView },
        { path: 'pilotos', component: PilotosView },
        { path: 'escuderias', component: EscuderiasView },
        { path: 'circuitos', component: CircuitosView },
      ],
    },
  ]
})

export default router
