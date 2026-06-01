<template>
<br><br><br><br><br><br>
</template>

<script setup>
import { ref } from 'vue'

const showModulesMenu = ref(false)

const modules = [
  'Trend Viewer',
  'Trend Configuration',
  'Alarm Viewer',
  'Schedule Viewer',
  'Schedule Manager',
  'All Point Report Viewer',
  'Audit Report Viewer',
  'Audit Log Viewer',
  'Web Administrator'
]
</script>

<style scoped>
.modules-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  border: 1px solid #999;
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
  background-color: #f1f1f1;
}
</style>