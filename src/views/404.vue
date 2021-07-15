<template>
  <div>
    <Header></Header>
    <error></error>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Layout/Header";
import error from "../components/error";
import Footer from "../components/Layout/Footer";

export default {
  name: "404",
  components: {
    Header,
    error,
    Footer
  }
}
</script>

<style scoped>

</style>