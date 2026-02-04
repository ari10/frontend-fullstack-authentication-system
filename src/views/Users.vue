<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h2>Users Dashboard</h2>
      <button @click="logout">Logout</button>
    </div>

    <ul class="user-list">
      <li v-for="user in users" :key="user.id">
        👤 {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const users = ref([])
const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}

onMounted(async () => {
  const res = await api.get('/users')
  users.value = res.data
})
</script>
