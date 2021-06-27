<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Header from './components/Layout/Header.vue'
// import About from './components/About.vue'
// import Section from './components/Section.vue'
// import Blog from './components/Blog.vue'
// import Contact from './components/Contact.vue'
// import Footer from './components/Layout/Footer.vue'

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
    // About,
    // Section,
    // Blog, 
    // Contact,
    // Footer
  }
}
</script>

<style>
@import '~bulma/css/bulma.css';
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
