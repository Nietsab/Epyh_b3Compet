<template>
  <div class="about">
    <span class="intro">Introduction</span>
    <span class="content">Les actualités quotidiennes de <strong style="color: #ffffff">MY HYPE</strong> sont devenues un point de rencontre important pour ceux qui s'intéressent à <strong style="color: #ffffff">l'évolution de la mode</strong>
    ainsi que d'autres domaines en lien comme l'art, la musique, le design et l'art de vivre.</span>
  </div>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap');

.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0A141C;
    padding-top: 9%;
    padding-bottom: 11%;
  }

  .about .intro{
    margin-bottom: 3%;

    color: #F00015;
    text-align: center;
    font-family: Kanit;
    font-style: normal;
    font-weight: bold;
    line-height: 30px;
    letter-spacing: 2px;
    font-size: 20px;
  }

  .about .content{
    width: 80%;
    font-family: Kanit;
    font-style: normal;
    font-weight: 200;
    font-size: 40px;
    line-height: 58px;
    text-align: center;
    color: #ffffff;
  }
</style>