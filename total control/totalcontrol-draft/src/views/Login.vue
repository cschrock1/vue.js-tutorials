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
    } else {
      // ❌ FAIL
      error.value = 'Invalid username or password'
    }

}

</script>

<style scoped>
.login-box {
  width: 500px;
  border: 1px solid #000;
  margin: 50px auto;
  background-color: #fff;
  font-family: Arial, sans-serif;
}

.login-header {
  background-color: #000;
  color: #fff;
  font-weight: bold;
  padding: 10px;
}

form {
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  font-weight: bold;
  color: #0066ff;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 200px;
  padding: 5px;
  margin-bottom: 15px;
  border: 1px solid #999;
  border-radius: 4px;
}

input[type="submit"] {
  align-items: right;
  padding: 5px 10px;
  border: 1px solid #999;
  background-color: #f2f2f2;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #e0e0e0;
}

#error {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>