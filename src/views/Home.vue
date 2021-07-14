<template>
<div class="app">
  <Header></Header>
  <Actus_Home></Actus_Home>
  <QuizHype></QuizHype>
  <Suggest_Outfit></Suggest_Outfit>
  <Podcast></Podcast>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Layout/Header.vue';
import Actus_Home from '../components/Actus_Home.vue';
import QuizHype from '../components/QuizHype.vue';
import Suggest_Outfit from '../components/Suggest_Outfit.vue';
import Podcast from '../components/podcast_home.vue';
import Footer from '../components/Layout/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Actus_Home,
    QuizHype,
    Suggest_Outfit,
    Podcast,
    Footer,
  }
}
</script>

<style>

</style>