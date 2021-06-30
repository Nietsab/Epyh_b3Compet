<template>
  <div class="quiz">
    <h1 class="quiz-title">Test ton niveau de hype</h1>

    <form class="form-quiz" @submit="checkForm" method="post" >
      <div class="questions">
        <b-container class="carousel_container">
          <b-row>
            <b-col cols="12">
              <carousel :perPage="3" :navigationEnabled="true">
              <form>
                <slide class="p-2">
                  <input type="radio" value="1" v-model="Question1">
                  <label>
                  <b-card title="Card Title 1" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top
                          tag="article">
                  </b-card>
                  </label>
                  <span>qdfq: {{ Question1 }}</span>
                  <input type="submit" value="submit">
                </slide>
                <slide class="p-2">
                  <b-card title="Card Title 2" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top tag="article">
                  </b-card>
                </slide>
                <slide class="p-2">
                  <b-card title="Card Title 3" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top tag="article">
                  </b-card>
                </slide>
                <slide class="p-2">
                  <b-card title="Card Title 4" img-src="https://i.ibb.co/3sF6T4r/Lidl.png" img-alt="Image" img-top tag="article">
                  </b-card>
                </slide>
                </form>
              </carousel>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </form>
  </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


export default {
  name: "QuizHype",
  data() {
    return {
      Question: [],
    }
  },
  created() {
    this.Question= {
      name: 'Q1',
      question: 'Comment ',
      type: 'radio',
      options: [
        { img: '../assets/lidl.png', value: '0'},
        { img: '../assets/lidl.png', value: '1'}
      ]
    }
  }
}
</script>

<style lang="scss">
.quiz {
  background-color: #CC1237;
  padding-bottom: 80px;

  .quiz-title {
    font-family: Poppins;
    font-weight: bold;
    font-size: 40px;
    color: #ffffff;
    text-transform: uppercase;
    padding-top: 30px;
  }

  .questions{
  }
}
</style>