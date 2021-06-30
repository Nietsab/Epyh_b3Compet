<template>
  <div class="header">
    <meta charset="utf-8"/>
    <meta name="description" content="Epyh vous propose d'avoir votre propre personal shopper afin de devenir le meilleur des Hypebeasts, Vous allez également pouvoir suivre toute l'actualité de l'univers Hypebeast"/>
    <meta name="author" content="Bastien GUILLAUME" />
    <meta name="copyright" content="Copyright (c) Epyh 2021-2021 " />
    <meta name="robots" content="index,noodp,follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />


    <header class="header-outer">
      <div class="header-inner responsive-wrapper">
        <div class="header-logo">
          <a href="" class="">
            <img class="image is-48x48" src="../../assets/img/logo.png" alt="">
          </a>
        </div>

        <nav class="header-navigation">
          <a href="" class="nav-element">Personnal Shopper</a>
          <a href="" class="">Actus</a>
          <a href="" class="">Podcast</a>
          <a href="" class="">Interview</a>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
// import('../../assets/player.js');
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.7.0/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

//* {
//  box-sizing: border-box;
//  font-family: "Roboto", sans-serif;
//  outline: none;
//}

//body {
//  font-size: 62.5%;
//  background-color: #FCF1F5;
//  height: 100vh;
//  width: 100vw;
//  margin: 0;
//  padding: 0;
//}
//
//.header{
//  .navbar{
//    background-color: #000000;
//    border-radius: 0px 0px 25px 25px;
//    height: 5rem;
//    //display: flex;
//    //justify-content: space-around;
//
//    .navbar-content{
//      display: flex;
//      justify-content: space-evenly;
//      align-items: center;
//
//      .navbar-text{
//        font-family: Poppins;
//        text-decoration: none;
//        font-weight: bold;
//        font-size: 24px;
//        line-height: 36px;
//      }
//    }
//  }
//}


*,
*:after,
*:before {
  box-sizing: border-box;
}

:root {
  /* Banner */
  --banner-outer-height: 75px;
  --banner-inner-height: 50px;
  --banner-height-difference: calc(
      var(--banner-outer-height) - var(--banner-inner-height)
  );
  --banner-bg: #ffc75f;

  /* Header */
  --header-outer-height: 110px;
  --header-inner-height: 70px;
  --header-bg: #FFF;
}

body {
  line-height: 1.5;
  position: relative;
}


a {
  color: inherit ;
}

.nav-element :hover{
  color: red;
}

.responsive-wrapper {
  width: 90%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}

/* Sticky banner */
.banner-outer {
  /* Make it stick */
  height: var(--banner-outer-height);
  position: sticky;
  top: calc(var(--banner-height-difference) * -1); /* Multiply by -1 to get a negative value */
  display: flex;
  align-items: center;

  /* Other */
  background-color: var(--banner-bg);
  z-index: 1;
}

.banner-inner {
  /* Make it stick */
  height: var(--banner-inner-height);
  position: sticky;
  top: 0;

  /* Other */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.25;
}

.header-outer {
  height: var(--header-outer-height);
  display: flex;
  align-items: center;
  background-color: #000000;
  box-shadow: 0 2px 10px 0 rgba(0,0,0, .1);
}

.header-inner {
  height: var(--header-inner-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* Styling of other elements */
.header-logo img {
  display: block;
  height: calc(var(--header-inner-height) - 30px);
}

.header-navigation {
  display: flex;
  flex-wrap: wrap;
}

.header-navigation a,
.header-navigation button {
  //font-size: 1.125rem;
  font-size: 24px;
  font-family: Poppins;
  color: inherit;
  margin-left: 1.75rem;
  position: relative;
  font-weight: bold;
  text-align: center;
  font-style: normal;
  line-height: 36px;
}

.header-navigation a {
  display: none;
  font-size: 1.125rem;
  color: #ffffff;
  text-decoration: none;
}

.header-navigation a :hover{
  color: red;
}

.header-navigation button {
  border: 0;
  background-color: transparent;
  padding: 0;
}

.header-navigation a:hover:after,
.header-navigation button:hover:after {
  transform: scalex(1);
}

.header-navigation a:after,
.header-navigation button:after {
  transition: 0.25s ease;
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentcolor;
  transform: scalex(0);
  position: absolute;
  bottom: -2px;
  left: 0;
}

.main {
  margin-top: 3rem;
}

@media (min-width: 800px) {
  .header-navigation a {
    display: inline-block;
  }

  .header-navgitaion button {
    display: none;
  }
}
</style>