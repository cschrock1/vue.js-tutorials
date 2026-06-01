<template>
    <div class="bg-white p-4 rounded-xl shadow">
        <div class="flex justify-between items-center">
            <h2 class="text-lg font-bold">{{ device.name }}</h2>

            <span :class="device.status === 'online'
          'text-green-600'
          'text-red-600'">
                {{ device.status }}
            </span>
        </div>

        <p class="mt-2 text-gray-600">
            Temp: {{ device.temp }}&deg;F
        </p>
    </div>
</template>

<script setup>
defineProps({
  device: Object
})
</script>