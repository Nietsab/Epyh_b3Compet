<template>
  <div class="blog">
    <div class="title">
      <span class="text-blog">Blog</span>
      <span class="text-actu">Actualité</span>
    </div>

    <div class="columns">
      <div class="column">
        <img src="../assets/Lidl.png" class="is-128x128">
      </div>
      <div class="column">
        <div class="title" style="display: flex">
          <span class="pop" >Pop Culture</span>
        </div>
        <p style="text-align: justify; font-family: Kanit; font-weight: 700; font-size: 30px; color: #ffffff; width: 80%; line-height: 50px">
          Lidl vient de dévoiler ses nouvelles baskets et Internet va bientôt être en PLS
        </p>
      </div>
    </div>


    <div class="columns">
      <div class="column">
        <img src="../assets/Roland-Garros.png" class="is-128x128">
      </div>
      <div class="column">
        <div class="title" style="display: flex">
          <span class="pop" >Mode</span>
        </div>
        <p style="text-align: justify; font-family: Kanit; font-weight: 700; font-size: 30px; color: #ffffff; width: 80%; line-height: 50px">
          Voici la panoplie parfaite pour passer une journée à Roland-Garros
        </p>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style>

  .blog {
    background-color: #0A141C;
    padding-top: 9%;
    padding-bottom: 11%;
  }

  .blog .title{
    margin-right: 5%;
  }

  .blog .text-blog {
    display: flex;
    justify-content: flex-end;

    font-family: Kanit;
    font-weight: bold;
    font-size: 140px;
    line-height: 209px;
    color: rgba(240, 0, 21, 0.0001);;

    margin-left: 8%;
    text-transform: uppercase;
    -webkit-text-stroke-color: #E0E4E9;
    -webkit-text-fill-color: #0000;
    -webkit-text-stroke-width: 1px;
  }

  .blog .text-actu {
    display: flex;
    justify-content: flex-end;

    margin-top: -8%;
    font-family: Kanit;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
  }

  .blog .columns{
    margin-top: 10%;
  }

  .title .pop {
    font-family: Kanit;
    font-weight: normal;
    font-size: 20px;
    line-height: 38px;
    color: #F00015;
    letter-spacing: 2px;

    margin-top: 2%;
  }

  .title .logo {
    height: 13%;
  }
</style>