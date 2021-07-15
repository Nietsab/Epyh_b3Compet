<template>
  <div class="Actus_Home">
    <img src="../assets/img/Actu-home.png" alt="Photo de Travis Scott à l'avant première de Uncut Gems">
    <div class="text">
      <img style="padding-bottom: 1rem;" src="../assets/img/CodeBarre.png" alt="Code Barre">
      <h1 class="title">Kanye West au défilé haute-couture de Balenciaga</h1>
      <h2 class="sub-title">Défilé Balenciaga qui se déroulait à Paris mercredi 7 juillet, lors de la Fashion Week
      </h2><br>

      <p style="">Kanye West était  bien dans la capitale française ce mercredi 7 juillet à l’occasion du défilé Balenciaga haute couture automne-hiver 2021-2022, dans le cadre de la Fashion Week qui a commencé ce lundi 5 juillet.</p>
      <p>Il était vêtu d’une cagoule très étrange, qu’il avait associée à une nouvelle version de sa veste YZY Gap, vendue à 200 dollars. Au pied, il était chaussé d’une paire de Yeezy Foam Runners beige – qu’il a associé avec une paire de chaussette Nike !</p>
      <p>mais aussi du surf, du hip-hop, de la mode japonaise, et bien d’autres.</p>
    </div>

  </div>
</template>

<script>

export default {
  name: "Actus_Home",
  components: {
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

@media (max-width: 1399px) {
  .Actus_Home {
    justify-content: center !important;
  }

  .text {
    width: 100% !important;
    margin-left: 3rem !important;
  }
}

.Actus_Home {
  display: flex;
  flex-wrap: wrap;

  .text{
    padding-top: 15%;
    margin-left: 14rem;
    text-align: left;
    width: 40%;
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