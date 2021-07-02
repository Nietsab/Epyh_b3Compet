<template>
  <div>

    <cookie-law theme="dark-lime" buttonText="J'accepte" buttonDecline=true buttonDeclineClass="Cookie__button--decline"
                buttonDeclineText="Je refuse">
      <div slot="message">
        Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site web. Pour ces raisons, nous pouvons partager les données d'utilisation de notre site avec nos partenaires de publicité et d'analyse. Vous pouvez choisir si vous souhaitez ou non consentir à notre utilisation des cookies via les options suivantes <router-link to="/MentionLegales">Cliquez-ici pour plus d'informations</router-link>
      </div>
    </cookie-law>


    <footer class="footer">
      <div class="columns">
        <div class="column is-one-quarter contact" style="height: 1%">
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

        <div class="column is-one-quarter contact" style="height: 1%">
          <strong style="color: #ffffff">QUI NOUS SOMMES</strong><br><br><br>
          <p style="color: #ffffff">Personnal Shopper</p><br>
          <p style="color: #ffffff">Actus</p><br>
          <p style="color: #ffffff">Interview</p><br>
          <p style="color: #ffffff">Podcast</p><br>
          <p style="color: #ffffff">Contactez-nous</p><br>
        </div>
        <div class="column is-one-quarter contact" style="margin-left: 0; height: 1%">
<!--          <iframe width="600" height="600"-->
<!--                  src="https://2f9c1cb5.sibforms.com/serve/MUIEAGB1rulXj5J4eu3EtgnXM_OLnivOpLywm5A-B6Baz1aCOwLVgnxo17Wp5u7FaApf2TKmHrly7p9F4jf4-K7traHLgyNLntotesvP4mBK5dpt3WDcEqp72rJy58VEAGJKpgi-kGI0ep58K9VQe1fv2rv1ENf6gShDBYfrL4N2q0qqrvT6aS5gbMtU7vYiGXxYcZ8nf5qUgEnp" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>-->
          <div class="sib-form" style="text-align: center;
         background-color: transparent;                                           ">
            <div id="sib-form-container" class="sib-form-container">
              <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(0,3,5,1); max-width:540px; border-radius:3px; border-width:0px; border-color:#C0CCD9; border-style:solid;">
                <form id="sib-form" method="POST" action="https://2f9c1cb5.sibforms.com/serve/MUIEAL52sysRpIBRNuYiS6qWNACS2pQS8uJgDOXgGbuzfC8LXsfKE08mrZYdC0OqCShWvQVzZoSdtU3LJFaBnG1LsIHgtsdZUkyHYBoK5tJ6XdnMRJLZjL5tPDZvRgIjZOmiQVDnbsvgBUpQp5Dtk0p1giuH5xwW775weRHRkChi4PZPJzX9R2FLObJj2Zz_HO_6YxJpVuUvdvrX">
                  <div style="padding: 8px 0;">
                    <div class="sib-form-block"
                         style="font-size:22px; text-align:left; font-family:Poppins; font-weight: 600;
                         font-style: normal;
                          color:#ffffff; background-color:transparent;">
                      <div style="width: 107%;" class="sib-text-form-block">
                        <p>Inscription à la newsletter</p>
                      </div>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-input sib-form-block">
                      <div class="form__entry entry_block">
                        <div class="form__label-row ">

                          <div class="entry__field">
                            <input class="input" maxlength="200" type="text" id="PRENOM" name="PRENOM"
                                   autocomplete="off" placeholder="Nom Complet*" data-required="true" required />
                          </div>
                        </div>

                        <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-input sib-form-block">
                      <div class="form__entry entry_block">
                        <div class="form__label-row ">

                          <div class="entry__field">
                            <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email*" data-required="true" required />
                          </div>
                        </div>

                        <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-optin sib-form-block" data-required="true">
                      <div class="form__entry entry_mcq">
                        <div class="form__label-row ">
                          <div class="entry__choice">
                            <label>
                              <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                              <span class="checkbox checkbox_tick_positive"></span><span style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#ffffff; background-color:transparent;"><p>J'accepte de recevoir vos e-mails</p><span data-required="*" style="display: inline;" class="entry__label entry__label_optin"></span></span> </label>
                          </div>
                        </div>
                        <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                        </label>
                        <label class="entry__specification" style="font-size:11px; text-align:left; font-style:italic; font-family:&quot;Helvetica&quot;, sans-serif; color:#ffffff;">
                          Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos emails.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style="position: relative; bottom: 16rem; left: 12rem;">
                    <div class="sib-form-block" style="text-align: center">
                      <button class="" style="border: 0; text-align:center;background-color: transparent;"
                              form="sib-form"
                              type="submit">
                        <img src="../../assets/img/newsletter_button.png" alt="">
                      </button>
                    </div>
                  </div>
                  <input type="text" name="email_address_check" value="" class="input--hidden">
                  <input type="hidden" name="locale" value="fr">
                  <input type="hidden" name="html_type" value="simple">
                </form>
              </div>
            </div>
          </div>
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
  },
  // mounted() {
  //   window.REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays';
  //   window.LOCALE = 'fr';
  //   window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
  //
  //   window.REQUIRED_ERROR_MESSAGE = "Vous devez renseigner ce champ. ";
  //
  //   window.GENERIC_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";
  //
  //
  //
  //
  //   window.translation = {
  //     common: {
  //       selectedList: '{quantity} liste sélectionnée',
  //       selectedLists: '{quantity} listes sélectionnées'
  //     }
  //   };
  //
  //   var AUTOHIDE = Boolean(1);
  // }
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
    margin-left: 7rem;

    .rs {
      padding-right: 20px;
    }
  }

}


//Newsletter

@font-face {
  font-display: block;
  font-family: Roboto;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 600;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 700;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
}

#sib-container input:-ms-input-placeholder {
  text-align: left;
  font-weight: 700;
  font-family: "Helvetica", sans-serif;
  color: #000000;
}

#sib-container input::placeholder {
  text-align: left;
  font-weight: 700;
  font-family: "Helvetica", sans-serif;
  color: #000000;
}

</style>