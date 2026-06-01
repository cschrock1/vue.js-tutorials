import { ref } from 'vue'

export const toastMessage = ref('')
export const toastVisible = ref(false)

let timeoutId

export function showToast(msg, duration = 3000) {
  toastMessage.value = msg
  toastVisible.value = true

  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    toastVisible.value = false
  }, duration)
}