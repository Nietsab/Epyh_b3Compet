<template>
  <div class="podcast">
    <div class="content">
      <span class="title-podcast"><div class="vertical-line"></div>Derniere interview</span><br>
      <div class="txt">
        <br>
        <span class="sub-title">Le resel</span><br><br>
        <span class="resume">Le resell de sneakers, un anglicisme qui définit la revente de basket le plus souvent
          par des passionnés, hors du sillage des points de vente. <br><br>Le phénomène n’a rien de nouveau, les
          resellers ont toujours fait partie de la communauté sneaker. Mais plus qu’avant ils semblent avoir pris une
          place imposante dans le circuit. <br><br> Nous retrouvons Noah, un acteur important et  pasionné dans ce
          milieur.</span><br><br>
        <button class="other-podcast">Autres podcast</button>
      </div>
    </div>

    <div class="video">
      <iframe width="600" height="600" src="https://www.youtube.com/embed/lRAEQfC17r4" title="YouTube video player"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
  </div>
</template>

<script>
export default {
  name: "Podcast"
}
</script>

<style scoped lang="scss">

.podcast {
  display: flex;
  justify-content: space-between;

  .content{
    margin-left: 7%;
    text-align: left;
    width: 35%;

    .title-podcast{
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 120%;
      text-transform: uppercase;
      color: #CC1237;

      .vertical-line {
        border-left: 6px solid #CC1237;
        display: inline-block;
        height: 23px;
        margin: 0 20px;
      }
    }

    .sub-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #000000;
    }

    .resume {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 27px;
      color: #000000;
    }

    .txt {
      margin-left: 7%;

      .other-podcast {
        width: 30%;
        background: #000000;
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.11);
        border-radius: 30px;

        color: #ffffff;
        font-family: 'Poppins';
        font-weight: normal;
        font-style: normal;
        font-size: 14px;
        line-height: 43px;
      }
    }
  }

  .video {
    width: 18%;
    margin-right: 15%;
  }
}

</style>