import { createRouter, createWebHistory } from 'vue-router'
import AjouterLivre from "@/views/AjouterLivreView.vue";
import ManipulationLivre from "@/views/ManipulationLivreView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    {
      path: '/AjouterLivre',
      name: 'AjouterLivre',
      component: AjouterLivre
    },

    {
      path: '/ManipulationLivre',
      name: 'ManipulationLivre',
      component: ManipulationLivre
    },

    {
      path: '/',
      name: 'home',
      component: AboutView
    }
  ]
})

export default router
