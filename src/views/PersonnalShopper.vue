<template>
  <div>
    <Header></Header>
    <PShopper></PShopper>
    <Suggest_Outfit></Suggest_Outfit>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Layout/Header.vue';
import PShopper from "@/components/PShopper";
import Suggest_Outfit from "@/components/Suggest_Outfit";
import Footer from '../components/Layout/Footer.vue';

export default {
  name: "PersonnalShopper",
  components: {
    Header,
    PShopper,
    Suggest_Outfit,
    Footer
  }
}
</script>

<style scoped>

</style>