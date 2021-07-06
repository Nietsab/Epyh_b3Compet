<template>
  <div class="suggest">
    <div class="suggest-titles">
      <h1 class="suggest-title">Suggestion outfit</h1>
      <h1></h1>
      <h1></h1>
    </div>
    <b-container class="carousel_container">
      <b-row>
        <b-col cols="12">
          <carousel :perPage="4" :navigationEnabled="true" >
            <slide class="p-2">
              <b-card title="Card Title 1" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top
                      tag="article">
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>
              </b-card>
            </slide>
            <slide class="p-2">
              <b-card title="Card Title 2" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top tag="article">
                <b-card-text class="small text-muted">
                  25 juin 2021
                </b-card-text>
              </b-card>
            </slide>
            <slide class="p-2">
              <b-card title="Card Title 3" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top tag="article">
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>
              </b-card>
            </slide>
            <slide class="p-2">
              <b-card title="Card Title 4" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top tag="article">
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>
              </b-card>
            </slide>
            <slide class="p-2">
              <b-card title="Card Title 4" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top tag="article">
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>
              </b-card>
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueCarousel from 'vue-carousel';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';

Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

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
}
</script>

<style lang="scss">
.suggest-title{
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  color: #000000;
  font-size: 30px;
  padding-top: 50px;
}
</style>