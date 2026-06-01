<template>
    <div class="flex h-screen items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-xl shadow w-80">
            <h2 class="text-xl font-bold mb-4">Sign Up</h2>

            <input v-model="email" placeholder="Email" class="input" />
            <input v-model="password" type="password" placeholder="Password" class="input" />

            <button @click="signup" class="btn">
                Create Account
            </button>

            <p class="text-sm mt-3">
                Already have an account?
                <router-link to="/login" class="text-blue-500">
                    Login
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

    function signup() {
        localStorage.setItem('user', email.value)
        router.push('/dashboard')
    }
</script>

<style>
    .input {
        @apply w-full border p-2 mb-3;
    }

    .btn {
        @apply bg-green-500 text-white w-full p-2 rounded;
    }
</style>
