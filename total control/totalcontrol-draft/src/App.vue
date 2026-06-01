<template>
  <div>
    <AppHeader />

    <main>
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: verdana;
  font-size: 10pt;
}
</style>
