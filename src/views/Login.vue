<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <h2>Login</h2>

      <div v-if="error" class="error">{{ error }}</div>

      <form @submit.prevent="handleLogin">
        <input
          v-model="username"
          placeholder="Username"
          autocomplete="username"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
        />

        <button type="submit">Login</button>
      </form>

      <div class="auth-link">
        Belum punya akun?
        <router-link to="/register">Register</router-link>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/authService'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  console.log('LOGIN CLICKED')
  error.value = ''
  try {
    await login(username.value, password.value)
    router.push('/users')
  } catch (e) {
    error.value = 'Username atau password salah'
  }
}

</script>
