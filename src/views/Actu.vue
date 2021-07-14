<template>
  <div>
    <Header></Header>
    <Actualite></Actualite>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";
import Actualite from "@/components/Actualite";
import Footer from "@/components/Layout/Footer";

export default {
  name: "Actus",
  components: {
    Header,
    Actualite,
    Footer
  }
}
</script>

<style scoped>

</style>