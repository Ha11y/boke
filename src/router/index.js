import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: Layout,
      children:[
        {
          path:'',
          name:"home",
          component: Home
        },
        // {
        //   path:'/web',
        //   name:"web",
        //   component:WebLabel,
        // }
      ]
    },
    
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})

export default router
