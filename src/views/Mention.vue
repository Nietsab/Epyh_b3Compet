<template>
  <div>
    <Header></Header>
    <Mention></Mention>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Layout/Header";
import Mention from '../components/MentionLegales.vue';
import Footer from "../components/Layout/Footer";

export default {

    name: "Home",
    components: {
      Header,
      Mention,
      Footer
    }
}
</script>

<style>

</style>