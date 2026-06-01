<template>
  <div v-if="toastVisible" class="toast">
    {{ toastMessage }}
  </div>
</template>

<script setup>
import { toastMessage, toastVisible } from '../store/toast'
</script>

<style scoped>
.toast {

  position: fixed;
  top: 20px;
  right: 20px;



  background: white;
  color: #374151;

  padding: 12px 18px;
  border-radius: 8px;

  font-size: 14px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  opacity: 0.95;

  animation: fadeIn 0.3s ease;
}

/* ✅ smooth animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 0.95;
    transform: translateY(0);
  }
}
</style>
