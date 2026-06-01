<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
        showBlock: false,
        timer: null,
        reactionTime: 0,
    }
  },
  mounted() {
    setTimeout(() => {
        this.showBlock = true;
        this.startTimer()
    }, this.delay)
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer);
            this.$emit('end', this.reactionTime);
        }
    },
}
</script>

<style>
.block {
  width: 200px;
  height: 200px;
  background-color: #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  cursor: pointer;
  text-align: center;
}

</style>