import { createRouter, createWebHistory } from 'vue-router'
import { authState } from '../store/auth' 

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import AlarmViewer from '../views/AlarmViewer.vue'
import AllPointReportViewer from '../views/AllPointReportViewer.vue'
import AuditLogViewer from '../views/AuditLogViewer.vue'
import AuditReportViewer from '../views/AuditReportViewer.vue'
import ScheduleManager from '../views/ScheduleManager.vue'
import ScheduleViewer from '../views/ScheduleViewer.vue'
import TrendConfiguration from '../views/TrendConfiguration.vue'
import TrendViewer from '../views/TrendViewer.vue'
import WebAdministrator from '../views/WebAdministrator.vue'
import { startLoading, stopLoading } from '../store/loader'

const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/', redirect: '/login' },
  { path: '/alarm-viewer', component: AlarmViewer },
  { path: '/all-point-report-viewer', component: AllPointReportViewer },
  { path: '/audit-log-viewer', component: AuditLogViewer },
  { path: '/audit-report-viewer', component: AuditReportViewer },
  { path: '/schedule-manager', component: ScheduleManager },
  { path: '/schedule-viewer', component: ScheduleViewer },
  { path: '/trend-configuration', component: TrendConfiguration },
  { path: '/trend-viewer', component: TrendViewer },
  { path: '/web-administrator', component: WebAdministrator }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Stop loading when navigation finishes
router.afterEach(() => {
  setTimeout(() => {
    stopLoading()
  }, 300) // small delay = smoother UX
})

router.beforeEach((to, from, next) => {
  startLoading()

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'

  if (to.path === '/login') {
    if (isLoggedIn) return next('/dashboard')
    return next()
  }

  if (!isLoggedIn) {
    return next('/login')
  }

  next()
})

router.afterEach(() => {
  stopLoading()
})

export default router