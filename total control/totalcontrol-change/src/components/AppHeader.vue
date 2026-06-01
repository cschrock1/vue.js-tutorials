<template>
  <!-- <header id="title">
    
  <div class="title-container">
    <router-link to="/dashboard" class="title-link">
      <img :src="kmclogo" alt="KMC Logo" class="kmclogo" />
      <h1>KMC Software Department</h1>
    </router-link>
  </div>
  </header> -->
  <header id="title">
  <div class="title-container">
    <router-link to="/dashboard" class="title-link">
      <img :src="kmctotalcontrollogo" alt="KMC TotalControlLogo" class="kmctotalcontrollogo" />
    </router-link>
  </div>
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
          >Help
        </a>
        <router-link to="/dashboard" class="nav-link">Settings</router-link>
      </template>

      <template v-else>
        <router-link to="/login" class="nav-link">Log On</router-link>
        <a
          class="nav-link"
          href="http://localhost/TotalControlWeb/Help/Content/Splash/SplashNoLogo.htm"
          target="_blank"
          rel="noopener"
        >Help
        </a>
      </template>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { authState } from '../store/auth'
import { showToast } from '../store/toast'
import kmclogo from '../assets/kmclogo.png'
import kmctotalcontrollogo from '../assets/kmctotalcontrollogo.png'

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
  showToast('Logged out successfully')
}
</script>

<style scoped>
/* Top title bar */
#title {
  padding: 18px 24px;
  background: linear-gradient(135deg, #1f2937, #111827);
  color: white;
  font-size: 20px;
  font-weight: 600;
}

/* Navigation bar */
#nav {
  background: #111827;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
}

/* Nav container */
nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Nav links (buttons) */
.nav-link {
  padding: 8px 14px;
  color: #e5e7eb;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
}

/* Hover effect */
.nav-link:hover {
  background-color: #374151;
  color: #ffffff;
}

/* Dropdown container */
.modules-dropdown {
  position: relative;
}

/* Dropdown menu */
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0;
  background-color: #ffffff;
  min-width: 220px;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 10;
}

/* Show dropdown on hover */
.modules-dropdown:hover .dropdown-content {
  display: block;
}

/* Dropdown links */
.dropdown-content a,
.dropdown-content .router-link-active {
  display: block;
  padding: 10px 16px;
  color: #374151;
  text-decoration: none;
  font-size: 14px;
}

/* Dropdown hover */
.dropdown-content a:hover {
  background-color: #f3f4f6;
}

/* Logout button */
button.nav-link {
  background: transparent;
  border: none;
}

/* Logged-in label */
p {
  margin: 8px 20px;
  font-size: 14px;
  color: #374151;
}

.title-container {
  display: flex;       
  align-items: center;  
  gap: 16px;            
}

/* logo */
.kmclogo {
  height: 60px;
  width: auto;
  background: white;
  padding: 4px;
  border-radius: 6px;
}

.kmctotalcontrollogo {
  height: auto;
  width: 100%;
  background:white;
  padding: 4px;
  border-radius: 6px;
}
/* remove default margin */
#title h1 {
  margin: 0;
}

.title-link {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;  
  color: inherit;        
}


.title-link.router-link-active,
.title-link:focus,
.title-link:active {
  outline: none;
  box-shadow: none;
  background: none;
  color: inherit;
}

</style>