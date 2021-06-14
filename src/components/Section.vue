<template>
  <div class="sectio">
    <div class="title">
      <span class="text-section">Sections</span>
      <span class="text-cat">Catégories</span>
    </div>

    <div class="columns">
      <div class="column">
        <img src="../assets/Mec.png" class="is-128x128">
      </div>
      <div class="column">
        <div class="title" style="display: flex">
          <hr>
          <span class="mode" >La mode
            <img src="../assets/d.png" class="logo image">
          </span>
        </div>
        <p style="text-align: justify; font-family: Kanit; font-weight: 400; font-size: 18px; color: #ffffff; width: 80%;">
          À la recherche des meilleures idées de looks, de la dernière tendance mode ou d’une sélection de sneakers incontournables de chez Nike ? <strong style="color: #ffffff">MY HYPE</strong> réunit pour vous toutes les actus mode pour trouver l’inspiration. Comment s’habiller pour un premier date ? Comment porter la dernière chaussure tendance ? <strong style="color: #ffffff">MY HYPE</strong> a les réponses à toutes ces questions, mais aussi une mine de bons plans pour trouver le magasin qui cache la casquette idéale ou l’adresse où dénicher le cadeau parfait !
          <br><br>
          Faites le plein de conseils pour être le plus stylé des HYPEBEAST !
        </p>
      </div>
    </div>

    <div class="columns">
      <div class="column" style="margin-left: 5rem">
        <div class="title" style="display: flex;">
          <hr>
          <span class="mode">
            La pop culture
            <img src="../assets/d.png" class="logo image">
          </span>
        </div>
        <p style="text-align: justify; font-family: Kanit; font-weight: 400; font-size: 18px; color: #ffffff; width: 80%;">
          Musique, cinéma, série, médias... <strong style="color: #ffffff">MY HYPE</strong> regarde, écoute et rencontre toutes celles et ceux qui font la culture et dévoile ses coups de coeur (ou coups de gueule) sous forme de critiques, d'interviews, de décryptage et de classements toujours objectifs.
          <br><br>
          L'objectif? Que vous ne passiez plus jamais 20 minutes devant la page d'accueil de Netflix, par exemple.
        </p>
      </div>
      <div class="column">
        <img src="../assets/Marylin.png" class="is-128x128">
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <img src="../assets/Apple.png" class="is-128x128">
      </div>
      <div class="column">
        <div class="title" style="display: flex;">
          <hr>
          <span class="mode">
            La pop culture
            <img src="../assets/d.png" class="logo image">
          </span>
        </div>
        <p style="text-align: justify; font-family: Kanit; font-weight: 400; font-size: 18px; color: #ffffff; width: 80%;">
          Où diner? Quel smartphone choisir? Par quoi remplacer sa Porsche 911 ? Que ce soit en food, hi-tech, moteurs, sorties, sports ou voyages... <strong style="color: #ffffff">MY HYPE</strong> scrute, analyse et décrit les codes de l'univers
          <br><br>
          Lifestyle tout en partageant quotidiennement tips et indiscrétions...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section"
}
</script>

<style>
.columns .column .title hr {
  border-left: 13px solid #ffffff;
  height: 69px;
  background-color: transparent;

}
.sectio {
  background-color: rgba(10, 20, 28, 0.58);
  padding-top: 9%;
  padding-bottom: 11%;
}

.sectio .text-section {
  display: flex;

  font-family: Kanit;
  font-weight: bold;
  font-size: 140px;
  line-height: 209px;
  color: rgba(240, 0, 21, 0.0001);

  margin-left: 8%;
  text-transform: uppercase;
  -webkit-text-stroke-color: #E0E4E9;
  -webkit-text-fill-color: #0000;
  -webkit-text-stroke-width: 1px;
}

.sectio .text-cat {
  display: flex;

  margin-top: -8%;
  margin-left: 8%;
  font-family: Kanit;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #0A141C;
}

.sectio .columns{
  margin-top: 10%;
}

.columns .column .title .mode {
  font-family: Kanit;
  font-weight: 600;
  font-size: 36px;
  line-height: 58px;
  color: #0A141C;

  margin-top: 2%;
  margin-left: 7%;
}

.title .logo {
  height: 13%;
}
</style>