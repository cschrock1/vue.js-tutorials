<template>
  <header id="title">
    <h1>KMC Software Department</h1>
  </header>

  <p>{{ loginLabel }}</p>

  <header id="nav">
    <nav>
      <template v-if="isLoggedIn">
        <router-link to="/dashboard" class="nav-link">Navigation</router-link>
        <div class="modules-dropdown">
          <div class="nav-link">Modules</div>
          <div class="dropdown-content">
            <router-link to="/trend-viewer" class="dropdown-link">Trend Viewer</router-link>
            <router-link to="/trend-configuration" class="dropdown-link">Trend Configuration</router-link>
            <router-link to="/alarm-viewer" class="dropdown-link">Alarm Viewer</router-link>
            <router-link to="/schedule-viewer" class="dropdown-link">Schedule Viewer</router-link>
            <router-link to="/schedule-manager" class="dropdown-link">Schedule Manager</router-link>
            <router-link to="/all-point-report-viewer" class="dropdown-link">All Point Report Viewer</router-link>
            <router-link to="/audit-report-viewer" class="dropdown-link">Audit Report Viewer</router-link>
            <router-link to="/audit-log-viewer" class="dropdown-link">Audit Log Viewer</router-link>
            <router-link to="/web-administrator" class="dropdown-link">Web Administrator</router-link>
          </div>
        </div>
        <button type="button" @click="logOff" class="nav-link">Log Off</button>
        <a
          class="nav-link"
          href="http://localhost/TotalControlWeb/Help/Content/Splash/SplashNoLogo.htm"
          target="_blank"
          rel="noopener"
        >
          Help
        </a>
      </template>

      <template v-else>
        <router-link to="/login" class="nav-link">Log On</router-link>
        <a
          class="nav-link"
          href="http://localhost/TotalControlWeb/Help/Content/Splash/SplashNoLogo.htm"
          target="_blank"
          rel="noopener"
        >
          Help
        </a>
      </template>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { authState } from '../store/auth'

const route = useRoute()
const router = useRouter()
const isLoggedIn = computed(() => authState.loggedIn)
const loginLabel = computed(() => authState.loggedIn
  ? `Logged On: ${authState.username}`
  : 'Not Logged On')

const logOff = () => {
  authState.loggedIn = false
  authState.username = ''
  localStorage.removeItem('loggedIn')
  localStorage.removeItem('username')
  router.push('/login')
}
</script>

<style scoped>
#title {
  padding: 10px;
  background: #d4d4d4;
  color: black;
  width: 100%;
}

#nav {
  background: black;
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #000;
  padding: 4px;
}

nav {
  display: flex;
}

.nav-link {
  padding: 8px 16px;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
}

.nav-link + .nav-link,
.modules-dropdown + .nav-link {
  border-left: none;
}

.nav-link:hover {
  background-color: #e0e0e0;
}

.modules-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.modules-dropdown .nav-link {
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0;
  z-index: 1;
  border: 1px solid #999;
  top: 100%;
  left: 0;
}

.modules-dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #e0e0e0;
}

button.nav-link {
  background: transparent;
  border: 1px solid white;
  color: white;
  appearance: none;
}
</style>