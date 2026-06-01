import { reactive } from 'vue'

export const authState = reactive({
  loggedIn: localStorage.getItem('loggedIn') === 'true',
  username: localStorage.getItem('username') || ''
})