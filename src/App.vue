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
