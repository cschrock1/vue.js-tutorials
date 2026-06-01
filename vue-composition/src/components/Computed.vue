<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <h2>Options Fullname is {{ fullName }}</h2>

    <input type="text" placeholder="First Name" v-model="refFirstName" />
    <input type="text" placeholder="Last Name" v-model="refLastName" />
    <h2>Composition Fullname is {{ refFullName }}</h2>

    <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
    <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
    <h2>Reactive Fullname is {{ reactiveFullName }}</h2>
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue'

export default {
    name: 'Computed',
    setup() {
        const refFirstName = ref('')
        const refLastName = ref('')

        const refFullName = computed(function() {
            return `${refFirstName.value} ${refLastName.value}`
        })

        const state = reactive({
            reactiveFirstName: '',
            reactiveLastName: '',
        })

        const reactiveFullName = computed(function() {
            return `${state.reactiveFirstName} ${state.reactiveLastName}`
        })

        return {
            refFirstName,
            refLastName,
            refFullName,
            ...toRefs(state),
            reactiveFullName,
        }
    },
    data() {
        return {
            fName: '',
            lName: '',
        }
    },
    computed: {
        fullName() {
            return `${this.fName} ${this.lName}`
        },
    },
}
</script>

<style>

</style>