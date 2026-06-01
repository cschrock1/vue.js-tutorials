<template>
  <div v-if="loading" class="top-loader"></div>
</template>

<script setup>
import { loading } from '../store/loader'
</script>

<style scoped>
.top-loader {
  position: fixed;
  top: 0;
  left: 0;

  height: 3px;
  width: 100%;

  background: linear-gradient(to right, #4f46e5, #6366f1);

  animation: loadingBar 1s linear infinite;
  z-index: 9999;
}

@keyframes loadingBar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>