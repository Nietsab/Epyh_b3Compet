<template>
  <div class="contact">
    <video class="video_moodboard" controls>
      <source src="../assets/Moodboard.mp4" type="video/mp4"> 
    </video>
    <!-- <youtube video-id="wZPdCzaTvi4" width="60%"/> -->
    <br><br>
    <img alt="Logo Epyh" src="../assets/logo.png" class="contact-image">
    <iframe title="newsletter" width="540" height="540" src="https://2f9c1cb5.sibforms.com/serve/MUIEAN7edpFlF1A4md4gbt6_jpuHVtxlpSthoFVVklPRrBBfqOOojiIDc0n4K8bi1KCXRomjIT3doXrIpyqGh6_O7TYYSkKghJ5obRZ4a-f-8h2X9E3qiYnuGIl3oMrjFrMUFHqnIrkuWENI485ds4nZL6YORmGaC1ouqRaoquaKZc95qerhUxeP70Em_hdD1x0-SaRCIKgxAESC" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>  
    <!-- <img src="../assets/podcast.png" class="modal-player" alt="Logo Podcast"> -->

  </div>
</template>

<script>
export default {
  name: "Contact",
}
</script>


<style lang="scss">

.contact {
    background-color: #71777B;
    padding-top: 9%;

  @media only screen 
    and (min-device-width: 300px) 
    and (max-device-width: 812px) { 
      .video_moodboard{
        width: 65% !important;
      }
    }

    .video_moodboard{
      width: 50%;
    }

    .contact-image {
      width: 25%;
    }

    .modal-player{
      position: fixed;
    }
  }
</style>