import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { LoginView, RegisterView, AccountView,  ResetPasswordView }  from '../views/account'

const routes = [
  {
    path: '/account',
    name: 'account',
    component: AccountView,
    children: [
      { path: 'login',  component: LoginView},
      { path: 'register',  component: RegisterView},
      { path: 'reset_password',  component: ResetPasswordView },
    ]

  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory("/"
    //process.env.BASE_URL
    ),
  routes
})

export default router
