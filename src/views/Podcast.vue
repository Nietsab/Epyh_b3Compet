<template>
  <div>
    <Header></Header>
    <Podcast></Podcast>
    <Footer></Footer>
  </div>
</template>

<script>
import Podcast from "@/components/PodcastList";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default {
  name: "part",
  components: {
    Header,
    Podcast,
    Footer
  }
}
</script>

<style scoped>

</style>