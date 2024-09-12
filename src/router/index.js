import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProductsView from '../views/ProductsView.vue'
import PromosView from '../views/PromosView.vue'
import GalleryView from '../views/GalleryView.vue'
import Upload from '../views/UploadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/servicios',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/productos',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/promociones',
      name: 'promos',
      component: PromosView
    },
    {
      path: '/galeria',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/subir',
      name: 'upload',
      component: Upload
    }
  ]
})

export default router
