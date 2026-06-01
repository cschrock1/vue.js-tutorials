<template>
  <div>Hello {{ fullName }}</div>
  <button @click="sendEvent">Call Heroes</button>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'PersonGreeting',
    setup(props, context) {
        const fullName = computed(() => {
            return `${props.firstName} ${props.lastName}`
        })

        function sendEvent() {
            context.emit('callHeroes', fullName.value)
        }

        return {
            fullName,
            sendEvent
        }
    },
    props: ['firstName', 'lastName'],
    emits: ['callHeroes'],
    // computed: {
    //     fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     }
    // }
}
</script>

<style>

</style>