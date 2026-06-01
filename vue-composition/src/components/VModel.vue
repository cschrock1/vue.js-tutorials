<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="First Name" v-model="fname" />
    <input type="text" placeholder="Last Name" v-model="lname" />
    <br />
    <input type="text" placeholder="Hero Name" v-model="heroName" />
    <input type="text" placeholder="First Name" v-model="firstname" />
    <input type="text" placeholder="Last Name" v-model="lastname" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

export default {
    name: 'VModel',
    setup() {
        const heroName = ref('')
        const state = reactive({
            firstname: '',
            lastname: ''
        })
        return {
            heroName,
            ...toRefs(state)
        }
    },
    data() {
        return {
            fname: '',
            lname: ''
        }
    },
}
</script>

<style>

</style>