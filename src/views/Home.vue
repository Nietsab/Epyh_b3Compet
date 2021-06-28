<template>
<div class="app">
  <Header></Header>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>