🚀 Project Overview

Frontend ini adalah Vue 3 Application yang terhubung ke backend JWT Authentication API.

Fitur utama:

Login & Register

Route Guard

Protected Dashboard

Token-based Authentication

Clean UI (Dashboard Style)

🧱 Tech Stack

Vue 3 (Composition API)

Vite

Vue Router

Axios

CSS (Custom Styling)

🗂 Project Structure
src
│
├── api
│   └── axios.js
│
├── services
│   ├── api.js
│   └── authService.js
│
├── router
│   └── index.js
│
├── views
│   ├── Login.vue
│   ├── Register.vue
│   └── Users.vue
│
├── App.vue
├── main.js
└── style.css

🔐 Authentication Flow (Frontend)

User login → backend /auth/login

Token disimpan di localStorage

Axios interceptor otomatis menambahkan token

Route Guard mencegah akses halaman tanpa login

Logout → token dihapus → redirect ke login

🛡 Route Guard

❌ Akses dashboard tanpa login → redirect ke /login

✅ Sudah login → bisa akses /users

▶️ How to Run
npm install
npm run dev


Frontend berjalan di:

http://localhost:5173

🔗 Backend Connection

Pastikan backend berjalan di:

http://localhost:8080


Base URL Axios:

http://localhost:8080

🎨 UI Features

Modern login card

Error message handling

Register page

Dashboard users list

Logout button

📌 Notes

JWT disimpan di localStorage

Logout bersifat client-side

Siap dikembangkan ke role-based dashboard

✅ Project Status

✔ Login & Register
✔ Route Guard
✔ JWT Integration
✔ Dashboard UI