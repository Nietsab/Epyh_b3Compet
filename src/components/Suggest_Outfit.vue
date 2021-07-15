<template>
  <div class="suggest">
    <div class="suggest-titles">
      <span class="suggest-title"><div class="vertical-line"></div>Suggestion outfit</span>
    </div>
    <div class="suggest-content">
      <carousel :perPage="4" :navigationEnabled="true" >
        <slide v-for="(Outfit, index) in Suggest.Outfit" :key="index">
          <img :src="Outfit.img_src" alt="">
<!--          <span class="prix-outfit">{{ // Outfit.price }}</span>-->
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import VueCarousel from 'vue-carousel';
import Vue from 'vue';

let Suggest = {
  Outfit : [
    {
      img_src : 'https://i.ibb.co/2gM3248/Rectangle-344.png',
      price: '1500'
    },
    {
      img_src: 'https://i.ibb.co/rxWG7Vw/Outfit2.png',
      price: '1500'
    },
    {
      img_src: 'https://i.ibb.co/sCLLC7m/Outfit3-1.png',
      price: '1500'
    },
    {
      img_src: 'https://i.ibb.co/6W2kg1h/Outfit4.png',
      price: '1500'
    },
    {
      img_src: 'https://i.ibb.co/6W2kg1h/Outfit4.png',
      price: '1500'
    }
  ]
}

new Vue ({
  components:{
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },

  data: {
    slide: 0,
    sliding: null
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  },
})


export default {
  name: "Suggest_Outfit",
  data: function() {
    return {
      Suggest: Suggest
    }
  }
}
</script>

<style lang="scss">

.VueCarousel-navigation-next {
  padding: 0 !important;
  margin: 0 !important;
}
.VueCarousel-navigation-prev {
  padding: 0 !important;
  margin: 0 !important;
}

.suggest-content {
  display: flex;
  justify-content: center;
}

.suggest-titles {
  text-align: left ;
  padding-bottom: 2%;
}

.suggest-title {
  margin-left: 6%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  text-transform: uppercase;
  color: #CC1237;
}

  .vertical-line {
    border-left: 6px solid #CC1237;
    display: inline-block;
    height: 23px;
    margin: 0 20px;
  }
</style>