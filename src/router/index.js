import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Users from '../views/Users.vue'
import { isLoggedIn } from '../services/authService'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: { guest: true }
  },
  {
    path: '/register',
    component: Register,
    meta: { guest: true }
  },
  {
    path: '/users',
    component: Users,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = isLoggedIn()

  // ❌ belum login tapi mau masuk halaman protected
  if (to.meta.requiresAuth && !loggedIn) {
    next('/login')
    return
  }

  // ✅ sudah login tapi mau ke login/register
  if (to.meta.guest && loggedIn) {
    next('/users')
    return
  }

  next()
})

export default router
