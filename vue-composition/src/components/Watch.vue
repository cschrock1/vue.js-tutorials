<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="Name" v-model="name" />
<br />
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
<br />
    <input type="text" placeholder="Reactive First Name" v-model="fName" />
    <input type="text" placeholder="Reactive Last Name" v-model="lName" />
    <input type="text" placeholder="Reactive Hero Name" v-model="options.heroName" />
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue'

export default {
    name: 'Watch',
    setup() {
        const state = reactive({
            fName: '',
            lName: '',
            options: {
                heroName: '',
            }
        })

        // watch(() => {
        //     return { ...state}
        // },
        // function(newValue, oldValue) {
        //     console.log('Reactive First Name Old value ', oldValue.fName)
        //     console.log('Reactive First Name New value ', newValue.fName)
        //     console.log('Reactive Last Name Old value ', oldValue.lName)
        //     console.log('Reactive Last Name New value ', newValue.lName)
        // })

        watch(() => state.options,
        function(newValue, oldValue) {
            console.log('Reactive First Name Old value ', oldValue)
            console.log('Reactive First Name New value ', newValue)
        },
        {
            deep: true,
        }
        )

        const firstName = ref('')
        const lastName = ref('Wayne')

        watch([firstName, lastName], 
        (newValues, oldValues) => {
            console.log('firstName Old value ', oldValues[0])
            console.log('firstName New value ', newValues[0])
            console.log('lastName Old value ', oldValues[1])
            console.log('lastName New value ', newValues[1])
        },
        {
            immediate: true
        })

        return {
            firstName,
            lastName,
            ...toRefs(state),
        }
    },
    data() {
        return {
            name: '',
        }
    },
    watch: {
        name(newValue, oldValue) {
            console.log('Old value ', oldValue)
            console.log('New value ', newValue)
        },
    }
}
</script>

<style>

</style>