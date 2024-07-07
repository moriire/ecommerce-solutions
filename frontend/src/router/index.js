import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'pages',
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/pages/ProfileView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '',
          name: 'home',
          component: () => import('../views/pages/HomeView.vue')
        },
        {
          path: 'wishlist',
          name: 'wishlist',
          component: () => import('../views/pages/WishlistView.vue')
        },
        {
          path: ':categories_slug',
          name: 'categories_slug',
          component: () => import('../views/pages/ShopByCategoryView.vue')
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('../views/pages/manage-product/Base.vue'),
          children: [
            {
              path: 'add',
              name: 'add',
              component: () => import('../views/pages/manage-product/AddProduct.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'upload/:product',
              name: 'upload',
              component: () => import('../views/pages/manage-product/UploadImageView.vue'),
              meta: { requiresAuth: true }
            },
          ]
        },
        {
          path: 'vendors',
          name: 'vendors',
          component: () => import('../views/pages/manage-product/AddProduct.vue')
        },
        {
          path: 'vendor/:vendor_slug',
          name: 'vendors_slug',
          component: () => import('../views/pages/ShopbyvendorView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/pages/CartView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: () => import('../views/pages/CheckoutView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/pages/ShopView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/pages/AboutView.vue')
        },
      ],
      component: () => import('../views/PagesBase.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue')
        },
        {
          path: '/verify-email',
          component: "../views/auth/VerifyEmail.vue"
        },
      ],
      component: () => import('../views/AuthBase.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/pages/ErrorPage.vue")
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.accessToken) {
    next('/auth/login');
  } else if (authStore.accessToken) {
    // Check if the token is expired and refresh it if necessary
    const isTokenExpired = false; // Add your logic to check token expiration
    if (isTokenExpired) {
      try {
        await authStore.refreshAccessToken();
        next();
      } catch (error) {
        authStore.logoutAction();
        next('/auth/login');
      }
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
