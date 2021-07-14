<template>
<div>
  <Header></Header>
  <Actus_text></Actus_text>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "../components/Layout/Header";
import Actus_text from '@/components/Actus_text.vue';
import Footer from "../components/Layout/Footer";

export default {
  name: "Actu_content",
  components: {
    Header,
    Actus_text,
    Footer
  }
}
</script>

<style scoped>

</style>