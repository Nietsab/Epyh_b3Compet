<template>
<div class="app">
  <Header></Header>
  <About></About>
  <Section></Section>
  <Blog></Blog>
  <Contact></Contact>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Layout/Header.vue';
import About from '../components/About.vue';
import Section from '../components/Section.vue';
import Blog from '../components/Blog.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Layout/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Section,
    Blog,
    Contact,
    Footer
  }
}
</script>

<style>

</style>