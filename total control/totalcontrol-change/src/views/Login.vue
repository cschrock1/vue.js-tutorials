<template>
 <div class="login-box">
  <div class="login-header">Log on to KMC Software Department</div>
  <form @submit.prevent="goDashboard">
    <label for="username">Username:
    <input required type="text" id="username" name="username" v-model="username"></label>

    <label for="password">Password:  
    <input required type="password" id="password" name="password" v-model="password"></label>

    <input type="submit" value="Submit">
  </form>
  <p v-if="error" id="error">{{ error }}</p>

</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authState } from '../store/auth'
import { showToast } from '../store/toast'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')


// Hardcoded Credentials
const VALID_USERNAME = 'test'
const VALID_PASSWORD = 'test'


const goDashboard = () => {
  const user = username.value.trim()
  if (
      user === VALID_USERNAME &&
      password.value === VALID_PASSWORD
    ) {
      // SUCCESS
      authState.loggedIn = true
      authState.username = user

      localStorage.setItem('loggedIn', 'true')
      localStorage.setItem('username', user)

      router.push('/dashboard')
      showToast('Login successful')
    } else {
      showToast('Invalid username or password')
    }

}

</script>

<style scoped>
/* Page spacing */
.login-box {
  width: 360px;
  margin: 80px auto;
  background-color: #ffffff;
  font-family: 'Segoe UI', Arial, sans-serif;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Header */
.login-header {
  background: linear-gradient(135deg, #1f2937, #111827);
  color: #ffffff;
  font-weight: 600;
  padding: 15px;
  text-align: center;
  font-size: 18px;
}

/* Form layout */
form {
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Labels */
label {
  font-weight: 500;
  color: #374151;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

/* Inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: border 0.2s ease;
}

/* Input focus effect */
input:focus {
  outline: none;
  border-color: #111827;
}

/* Button */
input[type="submit"] {
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #111827;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

/* Button hover */
input[type="submit"]:hover {
  background: #374151;
}

/* Error message */
#error {
  color: #dc2626;
  font-weight: 500;
  text-align: center;
}

</style>