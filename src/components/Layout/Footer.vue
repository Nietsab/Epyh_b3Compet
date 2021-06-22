<template>
<div>

  <cookie-law theme="dark-lime" buttonText="J'accepte" buttonDecline=True buttonDeclineClass="Cookie__button--decline" buttonDeclineText="Je refuse">
    <div slot="message">
        Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site web. Pour ces raisons, nous pouvons partager les données d'utilisation de notre site avec nos partenaires de publicité et d'analyse. Vous pouvez choisir si vous souhaitez ou non consentir à notre utilisation des cookies via les options suivantes <router-link to="/MentionLegales">Cliquez-ici pour plus d'informations</router-link>
    </div>  
  </cookie-law>
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      Tous les droits sont réservés à <strong>EPYH</strong>
    </p>
  </div>
  <div class="social-media">
    <!-- <img class="fab fa-youtube" src="" alt="Youtube"> -->
    <a href="https://twitter.com/epyh2_0">
      <img class="fab fa-twitter" src="" alt="Twitter">
    </a>
    <a href="https://instagram.com/epyh2.0">
      <img class="fab fa-instagram" src="" alt="Instagram">
    </a>
  </div>
</footer>
</div>
  
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
    components: {
        CookieLaw
    }
}
</script>

<style lang="scss">
    .Cookie--dark-lime .Cookie__button--decline{
        color : white !important;
        background-color: red !important;
    }
    
    .footer{
        background-color: #71777B;

      .social-media {
        display: flex;
        justify-content: space-evenly;
      }
    }
</style>