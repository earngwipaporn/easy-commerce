import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/users/HomeView.vue'
import SearchView from '@/views/users/SearchView.vue'
import ProfileView from '@/views/users/ProfileView.vue'
import CartView from '@/views/users/CartView.vue'
import CheckoutView from '@/views/users/CheckoutView.vue'
import SuccessView from '@/views/users/SuccessView.vue'

import AdminLogin from '@/views/admin/LoginView.vue'
import AdminDashboard from '@/views/admin/DashboardView.vue'
import AdminProductList from '@/views/admin/product/ListView.vue'
import AdminProductUpdate from '@/views/admin/product/UpdateView.vue'

import AdminUserList from '@/views/admin/user/ListView.vue'
import AdminUserUpdate from '@/views/admin/user/UpdateView.vue'

import AdminOrderList from '@/views/admin/order/ListView.vue'
import AdminOrderDetail from '@/views/admin/order/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    
    /* admin */
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin
    },    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard
    },    {
      path: '/admin/products',
      name: 'admin-products-list',
      component: AdminProductList
    },    {
      path: '/admin/product/create',
      name: 'admin-products-create',
      component: AdminProductUpdate
    },    {
      path: '/admin/product/update/:id',
      name: 'admin-products-update',
      component: AdminProductUpdate
    },    {
      path: '/admin/users',
      name: 'admin-users-list',
      component: AdminUserList
    },    {
      path: '/admin/users/update/:id',
      name: 'admin-users-update',
      component: AdminUserUpdate
    },    {
      path: '/admin/orders',
      name: 'admin-orders-list',
      component: AdminOrderList
    },    {
      path: '/admin/orders/detail/:id',
      name: 'admin-orders-detail',
      component: AdminOrderDetail
    },
  ]
})

export default router
