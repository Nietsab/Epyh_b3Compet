<template>
<div class="app">
  <Header></Header>
  <Carousel></Carousel>
  <QuizHype></QuizHype>
  <Suggest_Outfit></Suggest_Outfit>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Layout/Header.vue';
import Carousel from '../components/Carousel.vue';
import QuizHype from '../components/QuizHype.vue';
import Suggest_Outfit from '../components/Suggest_Outfit.vue';
import Footer from '../components/Layout/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Carousel,
    QuizHype,
    Suggest_Outfit,
    Footer,
  }
}
</script>

<style>

</style>