import api from './api'

export async function login(username, password) {
  const res = await api.post('/auth/login', {
    username,
    password
  })

  if (res.data.success && res.data.token) {
    localStorage.setItem('token', res.data.token)
  } else {
    throw new Error(res.data.message || 'Login gagal')
  }

  return res.data
}

export async function register(username, password) {
  const res = await api.post('/auth/register', {
    username,
    password
  })

  if (!res.data.success) {
    throw new Error(res.data.message || 'Register gagal')
  }

  return res.data
}

export function logout() {
  localStorage.removeItem('token')
}
export function isLoggedIn() {
  return !!localStorage.getItem('token')
}