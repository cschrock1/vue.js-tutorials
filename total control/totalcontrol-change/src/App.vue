<template>
  <div class="app-container">
    <AppHeader />

    <main class="main-content">
      <router-view />
    </main>

    <AppFooter />

    <Toast ref="toastRef" />
    <Loader />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Toast from './components/Toast.vue'
import Loader from './components/Loader.vue'

import { onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { authState } from './store/auth'
import { ref } from 'vue'


const router = useRouter()
const toastRef = ref(null)

let timeoutId


function showToast(message) {
  if (toastRef.value) {
    toastRef.value.showToast(message)
  }
}

const LOGOUT_TIME = 30 * 60 * 1000 // 30 minutes
// const LOGOUT_TIME = 10 * 1000 // 10 seconds for testing

// ✅ logout function
function logoutUser() {
  stopTracking() // stop listeners first

  authState.loggedIn = false
  authState.username = ''

  localStorage.removeItem('loggedIn')
  localStorage.removeItem('username')

  router.push('/login')
  showToast('Logged out due to inactivity')
}

// ✅ reset timer
function resetTimer() {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(logoutUser, LOGOUT_TIME)
}

// ✅ start tracking
function startTracking() {
  resetTimer()

  window.addEventListener('mousemove', resetTimer)
  window.addEventListener('keydown', resetTimer)
  window.addEventListener('click', resetTimer)
  window.addEventListener('scroll', resetTimer)
}

// ✅ stop tracking completely
function stopTracking() {
  clearTimeout(timeoutId)

  window.removeEventListener('mousemove', resetTimer)
  window.removeEventListener('keydown', resetTimer)
  window.removeEventListener('click', resetTimer)
  window.removeEventListener('scroll', resetTimer)
}

// ✅ run when app loads
onMounted(() => {
  if (authState.loggedIn) {
    startTracking()
  }
})

// ✅ IMPORTANT: react to login/logout changes
watch(() => authState.loggedIn, (isLoggedIn) => {
  if (isLoggedIn) {
    startTracking()
  } else {
    stopTracking()
  }
})

// ✅ cleanup
onUnmounted(() => {
  stopTracking()
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: verdana;
  font-size: 10pt;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.main-content {
  flex: 1; 
}
</style>