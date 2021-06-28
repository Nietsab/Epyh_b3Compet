<template>
  <div>

    <cookie-law theme="dark-lime" buttonText="J'accepte" buttonDecline=True buttonDeclineClass="Cookie__button--decline" buttonDeclineText="Je refuse">
      <div slot="message">
        Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site web. Pour ces raisons, nous pouvons partager les données d'utilisation de notre site avec nos partenaires de publicité et d'analyse. Vous pouvez choisir si vous souhaitez ou non consentir à notre utilisation des cookies via les options suivantes <router-link to="/MentionLegales">Cliquez-ici pour plus d'informations</router-link>
      </div>
    </cookie-law>


    <footer class="footer">
      <div class="columns">
        <div class="column is-one-quarter contact">
          <p>Nous contacter</p><br><br>
          <span>Pour nous joindre par mail : <br>
            <strong style="color: #CC1237"><a href="mailto:contact@epyh.fr">contact@epyh.fr</a></strong>
          </span><br><br><br>
          <span>Retrouvez nous sur les réseaux:
            <a class="rs" href="https://www.instagram.com/epyh2.0/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="rs" href="https://twitter.com/epyh3" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="rs" href="https://www.youtube.com/channel/UCpNKwQP_9XiLWwFzYXgwYIQ" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
          </span><br><br>
          <span>Horaires: <br>
            <strong style="color: #CC1237">Lundi au Samedi 10h-19h</strong>
          </span>
        </div>

        <div class="column is-one-quarter contact">
          <strong style="color: #ffffff">QUI NOUS SOMMES</strong><br><br><br>
          <p style="color: #ffffff">Personnal Shopper</p><br>
          <p style="color: #ffffff">Actus</p><br>
          <p style="color: #ffffff">Interview</p><br>
          <p style="color: #ffffff">Podcast</p><br>
          <p style="color: #ffffff">Contactez-nous</p><br>
        </div>
        <div class="column is-half contact">

        </div>
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
//@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.Cookie--dark-lime .Cookie__button--decline{
  color : white !important;
  background-color: red !important;
}

.footer {
  background-color: #000000;
  border-radius: 25px 25px 0px 0px;

  .contact {
    font-family: Poppins;
    //font-weight: 600;
    line-height: 33px;
    font-size: 22px;
    letter-spacing: 0.005em;
    color: #ffffff;
    text-align: initial;
    margin-left: 10rem;

    .rs {
      padding-right: 20px;
    }
  }

}
</style>