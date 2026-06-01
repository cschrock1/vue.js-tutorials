<template>
    <div>
        <h2>{{ firstName }} {{ lastName }}</h2>
        <h2>{{ fname }} {{ lname }}</h2>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    name: 'DemoTwo',
    setup() {
        const state = reactive({
            firstName: 'Bruce',
            lastName: 'Wayne',
        })

        setTimeout(() => {
            state.firstName = 'Clark'
            state.lastName = 'Kent'
            console.log(state)
        }, 2000)

        return toRefs(state)
    },
    data() {
        return {
            fname: 'Bruce',
            lname: 'Wayne',
        }
    }
}
</script>

<style>

</style>