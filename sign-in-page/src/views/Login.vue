<template>
    <div class="flex h-screen items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-xl shadow w-80">
            <h2 class="text-xl font-bold mb-4">Login</h2>

            <input v-model="email"
                   placeholder="Email"
                   class="w-full border p-2 mb-3" />

            <input v-model="password"
                   type="password"
                   placeholder="Password"
                   class="w-full border p-2 mb-4" />

            <button @click="login"
                    class="bg-blue-500 text-white w-full p-2 rounded">
                Login
            </button>

            <p class="text-sm mt-3">
                No account?
                <router-link to="/signup" class="text-blue-500">
                    Sign up
                </router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

function login() {
  if (email.value && password.value) {
    localStorage.setItem('user', email.value)
    router.push('/dashboard')
  } else {
    alert('Enter credentials')
  }
}
</script>
