<template>
  <div class="Actus_Home">
    <img src="../assets/img/ActuHome.png" alt="Photo de Travis Scott à l'avant première de Uncut Gems">
    <div class="text">
      <img style="padding-bottom: 1rem;" src="../assets/img/CodeBarre.png" alt="Code Barre">
      <h1 class="title">Lidl New Waves</h1>
      <h3 class="sub-title">Le style Steetwear, c’est une mode qui vient de la rue, de la culture </h3>


      <hooper :vertical="true" :items-to-show="1" :centerMode="true">
        <slide>
          <p style="font-size: 20px">Le style Steetwear, c’est une mode qui vient de la rue, de la culture du skate,
            mais aussi
            du surf, du
            hip-hop, de la mode japonaise, et bien d’autres.</p>
        </slide>
        <slide>
          <p>mais aussi du surf, du hip-hop, de la mode japonaise, et bien d’autres.</p>
        </slide>
        <Pagination slot="hooper-addons"></Pagination>
      </hooper>
    </div>

    <hooper :vertical="true" :items-to-show="1" :centerMode="true">
      <slide>1</slide>
      <slide>2</slide>
      <slide>3</slide>
      <slide>4</slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination } from 'hooper' ;
import 'hooper/dist/hooper.css';
export default {
  name: "Actus_Home",
  components: {
    Hooper,
    Slide,
    Pagination
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');


.Actus_Home {
  display: flex;
  padding-top: 1%;

  .text{
    padding-top: 15%;
    margin-left: 14rem;
    text-align: left;
  }

  .title {
    font-family: Poppins;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    text-transform: uppercase;
    color: #000000;
  }

  .sub-title {
    font-family: Poppins;
    font-weight: 500;
    line-height: 27px;
    font-size: 18px;
    color: #000000;
  }
}
</style>