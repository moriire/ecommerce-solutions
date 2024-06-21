import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      children: [
        {
          path: ':categories_slug',
          name: 'categories_slug',
          component: () => import('../views/ShopByCategoryView.vue')
        }
      ],
      component: () => import('../views/CategoryBaseView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/product',
      name: 'product',
      children: [
        {
          path: 'add',
          name: 'add',
          component: () => import('../views/AddProduct.vue')
        },
      ],
      component: () => import('../views/CategoryBaseView.vue'),
      meta: { requiresAuth: true }
    },
    
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddProduct.vue')
    },

    {
      path: '/vendor/:vendor_slug',
      name: 'vendors_slug',
      component: () => import('../views/ShopbyvendorView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
    },
    { path: '/verify-email', component: "../views/auth/VerifyEmail.vue" },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/ErrorPage.vue")
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.accessToken) {
    next('/login');
  } else if (authStore.accessToken) {
    // Check if the token is expired and refresh it if necessary
    const isTokenExpired = false; // Add your logic to check token expiration
    if (isTokenExpired) {
      try {
        await authStore.refreshAccessToken();
        next();
      } catch (error) {
        authStore.logoutAction();
        next('/login');
      }
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
