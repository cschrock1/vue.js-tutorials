<template>
    <div>
        <input type="text" placeholder="First Name" v-model="firstName" />
        <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
    <PersonGreeting :first-name="firstName" :last-name="lastName" @callHeroes="callHeroes" />
</template>

<script>
import { ref } from 'vue';
import PersonGreeting from './PersonGreeting.vue';

export default {
    name: 'Person',
    components: {
        PersonGreeting,
    },
    setup() {
        const firstName = ref('')
        const lastName = ref('')

        function callHeroes(fullName) {
            alert(`Calling heroes for ${fullName}`)
        }

        return {
            firstName,
            lastName,
            callHeroes
        }
    }
}
</script>

<style>

</style>