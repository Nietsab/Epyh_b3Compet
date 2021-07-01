<template>
  <div class="quiz">
    <h1 class="quiz-title">Test ton niveau de hype</h1>

    <div class="questions">
      <form action="">
        <div class="question">
          <input type="radio" name="question1" id="lidl-1" value="q1-1">
          <label for="lidl-1"
                 class="question-img"><img class="img-question-width" src="../assets/img/quiz-question.png" alt=""></label>
          <input type="radio" name="question1" id="logo-1" value="q1-2">
          <label for="logo-1"
                 class="question-img"><img class="img-question-width" src="../assets/img/quiz-question.png" alt=""></label>
          <input type="radio" name="question1" id="logo-2" value="q1-3">
          <label for="logo-1" class="question-img"><img class="img-question-width" src="../assets/img/quiz-question.png" alt=""></label>
          <input type="radio" name="question1" id="logo-3" value="q1-4">
          <label for="logo-1" class="question-img"><img class="img-question-width" src="../assets/img/quiz-question.png" alt=""></label>
        </div>
          <input type="submit" value="submit"/>
      </form>
    </div>
  </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import VueCarousel from "vue-carousel";


Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  name: 'QuizHype',
  components: {
    // FlowForm
  },
}
</script>

<style lang="scss">
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';

.quiz {
  padding-bottom: 80px;

  .quiz-title {
    font-family: Poppins;
    font-weight: bold;
    font-size: 40px;
    color: #CC1237;
    text-transform: uppercase;
    padding-top: 30px;
  }

  .img-question{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .question-img :hover {
    opacity: .5;
  }

  .img-question-width{
    width: 300px;
  }

  input[type="radio"]{
    display: none;
  }
}
</style>