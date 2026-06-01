<template>
    <div class="page">

        <h1>Dashboard</h1>

        <div class="grid">

            <div class="card">
                <p class="muted">Temperature</p>
                <h2>{{ temp.toFixed(1) }} &deg;F</h2>
            </div>

            <div class="card">
                <p class="muted">Energy Usage</p>
                <h2>{{ energy.toFixed(1) }} kWh</h2>
            </div>

            <div class="card">
                <p class="muted">System Status</p>
                <span class="status status-online">Normal</span>
            </div>

        </div>

    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const temp = ref(72)
    const energy = ref(220)

    function updateData() {
        temp.value += (Math.random() - 0.5) * 2
        energy.value += (Math.random() - 0.5) * 5
    }

    onMounted(() => {
        setInterval(updateData, 3000)
    })
</script>