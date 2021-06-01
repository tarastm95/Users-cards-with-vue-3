import {
  createRouter,
  createWebHistory
} from 'vue-router'
import UserData from '../components/UserData.vue';
import UserItem from '../components/UserItem.vue';
import 'bulma/css/bulma.css';
const routes = [{
    path: '/',
    name: 'Home',
    component: UserData,
    props: true

  },


  {
    path: '/users',
    name: 'UserData',
    component: UserData,
    props: true

  },

  {
    path: '/about/:userId',
    name: 'UserItem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../components/UserItem.vue'),
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router