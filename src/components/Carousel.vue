<template>
  <div>
    <h1 class="carousel-title">Les dernières sorties</h1>
    <div>
      <b-container>
        <b-row>
          <b-col>
            <carousel :per-page="1" :pagination-enabled="false" :navigationEnabled="true">
              <slide class="p-2" style="">
                <b-img class="img-border" src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top
                        tag="article">
                </b-img>
              </slide>
              <slide class="p-2">
                <b-img class="img-border" src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top
                     tag="article">
                </b-img>
              </slide>
            </carousel>
          </b-col>
        </b-row>
      </b-container>
      <br><br><br>
    </div>
  </div>
</template>

<script>

import VueCarousel from 'vue-carousel'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'

Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

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
  name: "",
}
</script>

<style lang="scss">
.carousel-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  color: #000000;
  font-size: 30px;
  padding-top: 50px;
}

.img-border{
  border-radius: 25px;
}

</style>