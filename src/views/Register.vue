<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <h2>Register</h2>

      <div v-if="error" class="error">{{ error }}</div>

      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />

      <button @click="handleRegister">Register</button>

      <div class="auth-link">
        Sudah punya akun?
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../services/authService'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
  error.value = ''
  try {
    await register(username.value, password.value)
    router.push('/login')
  } catch (e) {
    error.value = 'Register gagal'
  }
}
</script>
