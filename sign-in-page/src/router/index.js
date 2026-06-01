import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Devices from '../views/Devices.vue'
import Alarms from '../views/Alarms.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/dashboard', component: Dashboard },
    { path: '/devices', component: Devices },
    { path: '/alarms', component: Alarms } 

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
