<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to="#modals" v-if="showModal">
  <Modal theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="#">Sign up now!</a>
      <a href="#">More Info</a>
    </template>
    <h1>Ninja Giveaway!</h1>
    <p>Grab your ninja swag for half price!</p>
  </Modal>
  </teleport>
  
  <teleport to="#modals" v-if="showModalTwo">
  <Modal @close="toggleModalTwo">
    <h1>Special Offer!</h1>
    <p>Limited time only - don't miss out!</p>
  </Modal>
  </teleport>

  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
  </template>

<script>
// challenge
// - create an extra button to open a different modal
// - use the same modal component but pass in a different template (slot)
// - use a different method (e.g. toggleModalTwo) and data (e.g. showModalTwo)
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>
<style>
#app, #modals{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
