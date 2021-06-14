<template>
<div class="app">

  <Header></Header>
  <About></About>
  <Section></Section>
  <Blog></Blog>
  <Contact></Contact>q
</div>
</template>

<script>
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Section from '../components/Section.vue';
import Blog from '../components/Blog.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Section,
    Blog,
    Contact,
  }
}
</script>

<style>

</style>