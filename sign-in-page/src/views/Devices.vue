<template>
    <div class="page">

        <h1>Devices</h1>
        <p class="muted">Last updated: {{ lastUpdated }}</p>

        <!-- Summary -->
        <div class="grid" style="margin-bottom: 20px;">
            <div class="card">
                <p class="muted">Online</p>
                <h2>{{ onlineCount }}</h2>
            </div>

            <div class="card">
                <p class="muted">Offline</p>
                <h2>{{ offlineCount }}</h2>
            </div>
        </div>

        <!-- Search -->
        <input v-model="search"
               placeholder="Search devices..."
               class="input" />

        <!-- Devices -->
        <div class="grid">

            <div v-for="device in filteredDevices"
                 :key="device.id"
                 class="card clickable"
                 @click="selectedDevice = device">
                <h3>{{ device.name }}</h3>

                <span class="status"
                      :class="device.status === 'online' ? 'status-online' : 'status-offline'">
                    {{ device.status }}
                </span>

                <p class="muted">Temp: {{ device.temp }} &deg;F</p>
                <p class="muted">Last seen: {{ device.lastSeen }}</p>
            </div>

        </div>

    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue'
    import { getDevices } from '../services/mockDevices'

    const devices = ref([])
    const lastUpdated = ref(null)
    const search = ref('')
    const selectedDevice = ref(null)

    function loadDevices() {
        devices.value = getDevices()
        lastUpdated.value = new Date().toLocaleTimeString()
    }

    onMounted(() => {
        loadDevices()
        setInterval(loadDevices, 3000)
    })

    const filteredDevices = computed(() => {
        return devices.value.filter(d =>
            d.name.toLowerCase().includes(search.value.toLowerCase())
        )
    })

    const onlineCount = computed(() =>
        devices.value.filter(d => d.status === 'online').length
    )

    const offlineCount = computed(() =>
        devices.value.filter(d => d.status === 'offline').length
    )
</script>