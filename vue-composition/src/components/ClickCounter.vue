<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<script>
// import CounterMixin from '../mixins/counter'
import useCounter from '../composables/useCounter'

export default {
    name: 'ClickCounter',
    setup() {
        const { count, incrementCount } = useCounter(100, 10)

        return { 
            count, 
            incrementCount ,
        }
    }
    // mixins: [CounterMixin]
}
</script>

<style>

</style>