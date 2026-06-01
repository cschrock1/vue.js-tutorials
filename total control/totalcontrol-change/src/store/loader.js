import { ref } from 'vue'

export const loading = ref(false)

let loadingTimeout

export function startLoading() {
  clearTimeout(loadingTimeout)

  // ✅ Only show loader if navigation takes longer than 200ms
  loadingTimeout = setTimeout(() => {
    loading.value = true
  }, 200)

  // ✅ Safety fallback: never get stuck forever
  setTimeout(() => {
    loading.value = false
  }, 5000)
}

export function stopLoading() {
  clearTimeout(loadingTimeout)
  loading.value = false
}