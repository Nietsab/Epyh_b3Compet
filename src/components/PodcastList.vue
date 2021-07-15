<template>
  <div class="podcast">
    <div class="title-pod">
      <span class="title-component"><div class="vertical-line"></div>Podcast</span>
      <span class=""></span>
      <span class=""></span>
    </div>

    <div class="podcast-video">
      <div class="podcast-list">

        <div class="video" v-for="(video, index) in podcast.Video" :key="index">
          <iframe class="video-size" type="video/mp4" :src="video.video" controls></iframe>
          <br><br>
          <span class="title-podcast">{{ video.title }}</span>
          <br><br>
          <span>{{ video.content }}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

let podcast = {
  Video : [
    {
      Date: 'May 8, 2021',
      video: 'https://www.youtube.com/embed/NagdYzSEVpI',
      title: 'Hype time #1: La Hype',
      content:
          ' La hype est un anglicisme que vous rencontrez souvent. Bien des fois, l’expression est employée à tort à et travers. Dans l’univers de la sneaker, la hype renvoie à un fort engouement si bien qu’un modèle devient tendance, branchée.\n' +
          'Le terme Hypebeast découle du mot Hype.' +
          'Dans le domaine de la sneaker et du streetwear, cet individu jette quasi-exclusivement son dévolu sur les marques ou des modèles très tendance.'
    },
    {
      Date : '',
      video: 'https://youtube.com/embed/mXV52hzCRwY',
      title: 'HYPE TIME #2 : Le resell',
      content: 'Les resellers  sont des types qui achètent des paires en édition limitée pour les revendre à prix d’or sur les marchés parallèles. S’il suffisait il y a 10 ans de faire un camp out pour être sûr de pouvoir acheter la paire tant convoitée, les choses ont bien changé depuis.'
    },
    {
      Date: '',
      video: 'https://youtube.com/embed/q7f34IMXF0Y',
      title: 'HYPE TIME #3 : Le raffle',
      content: 'Si nous traduisons littéralement le mot raffle, celui-ci signifie tombola. Et c’est bien le même principe, puisqu’une raffle est un tirage au sort. Enfin pas tout à fait, puisque si nous la gagnons, nous « gagnons » juste le droit d’acheter la paire ! Nous ne gagnons pas directement le produit !\n' +
          '\n' +
          'Nous retrouvons notre invité ....... pour en parler\n'
    }
  ]
}
export default {
  name: "podcastList",
  data : function() {
    return {
      podcast: podcast
    }
  }
}
</script>

<style lang="scss">

@media (max-width: 1399px) {

  .podcast {
    padding-top: 15% !important;
  }

  .podcast-list {
    flex-wrap: wrap;
    justify-content: center;
  }

  .video {
    margin-top: 10% !important;
  }
}
.podcast {
  padding-top: 8%;

  .title-pod {
    display: flex;
    justify-content: space-around;

    .title-component {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 38px;
      text-transform: uppercase;

      color: #CC1237;
    }

    .vertical-line {
      border-left: 6px solid #CC1237;
      display: inline-block;
      height: 23px;
      margin: 0 20px;
    }
  }

  .podcast-video {
    display: flex;
    justify-content: space-around;

    .podcast-list {
      display: flex;
      background: #FFFFFF;

    }

    .video {
      text-align: justify;
      max-width: 400px;
      max-height: 600px;
      margin-right: 2%;

      .title-podcast{

        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 33px;
        letter-spacing: 0.03em;
        color: #000000;
      }
    }
    .video-size {
      width: 400px;
      height: 300px;
    }

  }


}
</style>