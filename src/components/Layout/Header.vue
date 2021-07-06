<template>
  <div class="header">
    <meta charset="utf-8"/>
    <meta name="description" content="Epyh vous propose d'avoir votre propre personal shopper afin de devenir le meilleur des Hypebeasts, Vous allez également pouvoir suivre toute l'actualité de l'univers Hypebeast"/>
    <meta name="author" content="Bastien GUILLAUME" />
    <meta name="copyright" content="Copyright (c) Epyh 2021-2021 " />
    <meta name="robots" content="index,noodp,follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />

    <header>
      <a class="logo" href="/"><img src="../../assets/img/logo.png" alt="logo"></a>
      <nav>
        <ul class="nav__links">
          <li><a href="#">Personnal Shopper</a></li>
          <li><a href="#">Actus</a></li>
          <li><a href="#">Podcast</a></li>
          <li><a href="#">Interview</a></li>
        </ul>
      </nav>
      <p class="menu cta">Menu</p>
    </header>
    <div id="mobile__menu" class="overlay">
      <a class="close">&times;</a>
      <div class="overlay__content">
        <li><a href="#">Personnal Shopper</a></li>
        <li><a href="#">Actus</a></li>
        <li><a href="#">Podcast</a></li>
        <li><a href="#">Interview</a></li>
      </div>
    </div>
  </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// import('../../assets/player.js');
export default {
  name: 'Header',
  mounted() {
    const doc = document;
    const menuOpen = doc.querySelector(".menu");
    const menuClose = doc.querySelector(".close");
    const overlay = doc.querySelector(".overlay");

    menuOpen.addEventListener("click", () => {
      overlay.classList.add("overlay--active");
    });

    menuClose.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });

  }
}
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.0/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(64px);
  position: fixed;
  width: 100%;
}

.logo {
  margin-right: auto;
}

.nav__links {
  list-style: none;
  display: flex;

}

a{
  color: #CC1237;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  text-align: center;
}

.nav__links a,
.cta,
.overlay__content a {
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-decoration: none;
}

.nav__links li {
  padding: 0px 20px;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
}

.nav__links li a:hover {
  color: #0088a9;
}

.cta {
  margin-left: 20px;
  padding: 9px 25px;
  background-color: #CC1237;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.cta:hover {
  background-color: rgba(0, 136, 169, 0.8);
}

/* Mobile Nav */

.menu {
  display: none;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: #24252a;
  overflow-x: hidden;
  transition: all 0.5s ease 0s;
}

.overlay--active {
  width: 100%;
}

.overlay__content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay a {
  padding: 15px;
  font-size: 36px;
  display: block;
  transition: all 0.3s ease 0s;
}

.overlay a:hover,
.overlay a:focus {
  color: #0088a9;
}
.overlay .close {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  color: #edf0f1;
  cursor: pointer;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .close {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

@media only screen and (max-width: 800px) {
  .nav__links,
  .cta {
    display: none;
  }
  .menu {
    display: initial;
  }
}



</style>