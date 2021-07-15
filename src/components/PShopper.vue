<template>
  <div class="Personal">
    <h1 class="Personnal-title">Personnal Shopper</h1><br>

    <div class="carousel-personnal">

      <carousel :per-page="1">
        <slide v-for="(Pack, index) in PackOutfit.Haut" :key="index">
          <a><img style="max-width: 40%;" :src="Pack.img_src" :alt="Pack.alt" ></a>
          <span class="price-pack">Valeur: {{ Pack.Value }} €</span>
          <br>
        </slide>
      </carousel>
      <carousel :per-page="1">
        <slide v-for="(Pack, index) in PackOutfit.Chapeau" :key="index">
          <img style="max-width: 40%;" :src="Pack.img_src" :alt="Pack.alt">
          <span class="price-pack">Valeur: {{ Pack.Value }} €</span>
        </slide>
      </carousel>
      <carousel :per-page="1">
        <slide v-for="(Pack, index) in PackOutfit.Bas" :key="index">
          <img style="max-width: 40%;" :src="Pack.img_src" :alt="Pack.alt">
          <span class="price-pack">Valeur: {{ Pack.Value }} €</span>
        </slide>
      </carousel>
      <carousel :per-page="1">
        <slide v-for="(Pack, index) in PackOutfit.Accessoires" :key="index">
          <img style="max-width: 40%;" :src="Pack.img_src" :alt="Pack.alt">
          <span class="price-pack">Valeur: {{ Pack.Value }} €</span>
        </slide>
      </carousel>
      <carousel :per-page="1">
        <slide v-for="(Pack, index) in PackOutfit.Paire" :key="index">
          <img style="max-width: 40%;" :src="Pack.img_src" :alt="Pack.alt">
          <span class="price-pack">Valeur: {{ Pack.Value }} €</span>
        </slide>
      </carousel>

    </div>
  </div>
</template>

<script>
import VueCarousel from 'vue-carousel';
import Vue from 'vue';

Vue.use(VueCarousel);

let PackOutfit = {
  Haut : [
    {
      img_src : "https://i.ibb.co/0ZSk4k0/B21102-RED-01-2.png",
      alt : "Billionnaire sweat",
      Value : 600
    }, {
      img_src : "https://i.ibb.co/m8tG40t/Sun-Flare-T-Shirt-20200528220548.png",
      alt : "Sun Flare tshirt",
      Value : 70
    }, {
      img_src: "https://i.ibb.co/tXd9dDX/16049231-30455264-1000.png",
      alt : "Off White Hoodie Blanc",
      Value : 420
    }, {
      img_src: "https://i.ibb.co/zrGWCZ3/16132988-30581636-1000.png",
      alt : "Off White Joconde",
      Value : 395
    }, {
      img_src: "https://i.ibb.co/L53ZJBc/16209937-30954062-1000-removebg-preview.png",
      alt : "TShirt bleu marine",
      Value: 140
    }, {
      img_src: "https://i.ibb.co/VjWSbZS/BAPE-Color-Camo-Detachable-Shark-Full-Zip-Hoodie-Purple-removebg-preview.png",
      alt : "Bape couleur camo",
      Value: 843
    }
  ],
  Bas : [
    {
      img_src : "https://i.ibb.co/jzFwfWD/JOSEPH-Track-Pants-Sprint-Jersey-Jersey-Off-White-jp0007770021-1.png",
      alt : "Joseph Track pants sprint jersey offwhite",
      Value : 70
    }, {
      img_src : "https://i.ibb.co/58xhSk7/0-ZXPTM152916-FNVY-1.png",
      alt : "Russell a bathing ape",
      Value : 290
    }, {
      img_src: "https://i.ibb.co/NS5n8dG/stoneisland-cargo-pants-creme-M741531303-374131267-front.png",
      alt : "stoneisland cargo pants creme",
      Value: 185
    }, {
      img_src: "https://i.ibb.co/vvRq76y/PANT.png",
      alt : "Multicolor pant",
      Value: 140
    }
  ],
  Paire : [
    {
      img_src : "https://i.ibb.co/KhDCVBC/wethenew-sneakers-france-converse-chuck-high-70-comme-des-garcons-white-1.png",
      alt : "Converse x comme des garçons",
      Value : 140
    }, {
      img_src : "https://i.ibb.co/n0v37Qm/Wethenew-Sneakers-France-BBC-Pharrell-adidas-NMD-Hu-Heart-Mind-2-1200x.png",
      alt : "Adidas Pharell X Billionaire",
      Value : 65
    }, {
      img_src: "https://i.ibb.co/rpc3jYB/Wethenew-Sneakers-France-Balenciaga-Speed-Trainer-White-Black.png",
      alt: "Balenciaga speed trainer white black",
      Value: 600
    }, {
      img_src:
          "https://i.ibb.co/hWP9SPK/Wethenew-Sneakers-France-Nike-Air-Force-1-Low-Off-White-MCA-University-Blue-2-1200x.png",
      alt : "Air force 1 low off white mca university blue",
      Value : 1800
    }, {
      img_src:
          "https://i.ibb.co/stLsDfM/Wethenew-Sneakers-France-Nike-AIr-Max-270-React-ENG-Travis-Scott-Cactus-Trails-1-600x.png" ,
      alt : "Air max 270 travis scott cactus trails",
      Value : 419
    }, {
      img_src: "https://i.ibb.co/JQ5Y6hM/Wethenew-Sneakers-France-Nike-Air-Max-720-Magic-Flamingo-CD0683-400-1.png",
      alt: "Air max 720 magic flamingo",
      Value : 163
    }
  ],
  Chapeau : [
    {
      img_src : "https://i.ibb.co/pr4RS9Q/bob.png",
      alt : "Bob Nike Sportswear Rose",
      Value: "25"
    }, {
      img_src: "https://i.ibb.co/p3tGY7B/bob2.png",
      alt : "Cappello Donna Kangol Stripe",
      Value: "44"
    }
  ],
  Accessoires : [
    {
      img_src : "https://i.ibb.co/9Yfy67N/sac-gucci-blanc-beige-horsebit-medium-tote-bag-1698x.png",
      alt : "Sac Gucci blanc beige",
      Value : 1800
    }, {
      img_src: "https://i.ibb.co/GVhgsRw/lv.png",
      alt : "Sac Louis Vuitton panier",
      Value: 1200
    }, {
      img_src: "https://i.ibb.co/KqbsShh/louis-vuitton-boite-chapeau-soup-800x.png",
      alt : "Louis vuitton boite chapeau soup",
      Value : 1900
    }, {
      img_src:
          "https://i.ibb.co/5TQnxZh/We-The-New-Sneakers-France-Rimowa-Off-White-See-Through-Case-Black-1-1200x.png",
      alt : "Valise Offwhite blanc et noir",
      Value: 2100
    }
  ]
}


new Vue ({
  components:{
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },

  data: {
    test: 1,
    slide: 0,
    sliding: null,
    responses: []
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    Price() {
      return this.responses[0]
    }
  },
})


export default {
  name: "PersonnalShopper",
  data: function () {
    return {
      localStorage : 1,
      PackOutfit : PackOutfit
    }
  }
}
</script>

<style scoped lang="scss">

@media (max-width: 1399px) {
  .Personnal-title {
    padding-top: 10%;
  }

  .carousel-personnal {
    display: block !important;
  }
}

@media (max-width: 460px) {
  .Personnal-title {
    font-size: 30px !important;
  }
}

.Personal {
  padding-top: 10%;
  padding-bottom: 5%;

  .carousel-personnal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .price-pack {
      font-family: Poppins;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.05em;
    }
  }

  .Personnal-title {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 81px;
    text-transform: uppercase;
    color: #000000;
  }

  .Personnal-price {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    text-transform: uppercase;
    text-decoration: underline #cc1237;
    margin-left: 45%;
  }

  .price {
  }
}
</style>