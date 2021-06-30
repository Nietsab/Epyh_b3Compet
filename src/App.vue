<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Header from './components/Layout/Header.vue'
// import Footer from './components/Layout/Footer.vue'
import Vue from 'vue';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

export default {
  name: 'App',
  metaInfo: {
      title: 'Epyh',
      meta: [
        { name: 'description', content: 'Epyh vous propose d\'avoir votre propre personal shopper afin de devenir le meilleur des Hypebeasts, Vous allez également pouvoir suivre toute l\'actualité de l\'univers Hypebeast'},
        { name: 'author', content: 'Bastien GUILLAUME'},
        { name: 'copyright', content: 'Copyright (c) Epyh 2021-2021'},
        { name: 'robots', content: 'index,noodp,follow'},
        { name: 'viewport', content: 'width=device-width,initial-scale=1'}
      ]
  },
  components: {
    // Header,
    // Footer
  }
}
</script>

<style>
@import '~bulma/css/bulma.css';
/* Import font Kanit
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');*/

#app {
  font-family: Poppins ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-image: url("assets/img/fond_body.png");
  margin: 0;
}
</style>
