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
          path: '',
          name: 'home',
          component: () => import('../views/pages/HomeView.vue')
        },
        {
          path: 'product/:product',
          name: 'product-detail',
          component: () => import('../views/pages/manage-product/ProductDetail.vue')
        },
        {
          path: 'wishlist',
          name: 'wishlist',
          component: () => import('../views/pages/WishlistView.vue'),
          meta: { requiresAuth: true, loafs:{"home": "/", wishlist: "/wishlist"} }
        },
        {
          path: ':categories_slug',
          name: 'categories',
          component: () => import('../views/pages/CategoryPageView.vue')
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
              //meta: { requiresAuth: true }
            },
            {
              path: 'upload/:product',
              name: 'upload',
              component: () => import('../views/pages/manage-product/EditProduct.vue'),
              //meta: { requiresAuth: true }
            },
          ]
        },
        {
          path: 'vendors',
          name: 'vendors',
          component: () => import('../views/pages/vendor/Base.vue'),
          children:[
            {
              path: ':vendor_slug',
              name: 'vendors_slug',
              component: () => import('../views/pages/vendor/ShopbyvendorView.vue'),
              meta: { requiresAuth: true }
            },
            {
              path: 'profile',
              name: 'profile',
              component: () => import('../views/pages/ProfileView.vue'),
              meta: { requiresAuth: true, loafs:{home: "/", vendor: "/vendor", profile:"/profile"} }
            },
          ]
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/pages/CartView.vue'),
          //meta: { requiresAuth: true }
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: () => import('../views/pages/CheckoutView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import('../views/pages/OrderReview.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/payment-success',
          name: 'payment-success',
          component: () => import('../views/pages/SuccessView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/pages/ShopView.vue'),
          // meta: { requiresAuth: true }
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
        { path: 'activate/:uid/:token', 
          name: "activate",
          component: () => import("../views/auth/ActivationView.vue") 
        },
        { path: '/reset-password', 
          name: "reset-password",
          component: () => import("../views/auth/PasswordResetRequest.vue") 
        },
        { path: '/reset-password-confirm', 
          name: "reset-password-confirm",
          component: () => "../views/auth/PasswordRestConfirm" 
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
    next(`/auth/login?next=${to.path}`);
    //next('/auth/login');
  }else if (authStore.accessToken) {
    // Check if the token is expired and refresh it if necessary
    const isTokenExpired = false; // Add your logic to check token expiration
    if (isTokenExpired) {
      try {
        await authStore.refreshAccessToken();
        next();
      } catch (error) {
        authStore.logoutAction();
        next(`/auth/login?next=${to.path}`);
      }
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
