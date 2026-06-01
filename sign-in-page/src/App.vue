<template>
    <div class="app-layout">

        <Sidebar />

        <div class="main">
            <Navbar />

            <router-view />
        </div>

    </div>
</template>

<script setup>
    import Sidebar from './components/Sidebar.vue'
    import Navbar from './components/Navbar.vue'
</script>