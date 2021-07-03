<template>
  <div class="quiz">
    <h1 class="quiz-title"></h1>

    <div class="questions">
      <h1>{{ quiz.title }}</h1>
      <div class="question">
        <p v-if="errors[questionIndex]" class="alert alert-danger"> {{ error }}</p>
        <div v-for="(question, index) in quiz.questions" :key="index">
          <div v-show="index === questionIndex" class="">
            <h4 class="">{{ question.quest }}</h4>
            <div class="question-answer">
              <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex"
                   class="form-check">
                <input :id="answer.value" class="form-check-input radio-reponse" type="radio" :value="answer.value"
                       :name="index"
                       v-model="responses[index]">
                <label :for="answer.value" class="form-check-label ">
                  <img :src="answer.text" alt="">
                </label>
              </div>
            </div>


            <div class="mt-5">
              <button class="btn btn-primary" v-if="questionIndex > 0" @click="prev">prev</button>
              <button class="btn btn-secondary" @click="next">next</button>
            </div>
          </div>
        </div>

        <div v-show="questionIndex === quiz.questions.length">
          <p>Ton niveau de hype est de {{ score() }} %</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let quiz = {
  title:  "Test ton niveau de hype",
  questions : [
    {
      quest: 'Comment vous habillez-vous l\'été',
      answers: [
        {
          text: 'https://i.ibb.co/tHfK3ZH/95-214-46-125-60e09c77072e1.jpg',
          value: 1
        },
        {
          text: 'https://i.ibb.co/tHfK3ZH/95-214-46-125-60e09c77072e1.jpg',
          value: 2
        }, {
          text: 'https://i.ibb.co/tHfK3ZH/95-214-46-125-60e09c77072e1.jpg',
          value: 54
        }, {
          text: 'https://i.ibb.co/tHfK3ZH/95-214-46-125-60e09c77072e1.jpg',
          value: 43
        }
      ],
    },
    {
      quest: 'Question 2',
      answers: [
        {
          text: 'https://i.ibb.co/7QFYjKL/Q1-R2.png',
          value: 4
        },
        {
          text: 'https://i.ibb.co/7QFYjKL/Q1-R2.png',
          value: 5
        }, {
          text: 'https://i.ibb.co/7QFYjKL/Q1-R2.png',
          value: 56
        }, {
          text: 'https://i.ibb.co/7QFYjKL/Q1-R2.png',
          value: 47
        }
      ],
    }
  ]
};

export default {
  name: "QuizHype",
  data: function(){
    return{
      quiz: quiz,
      questionIndex: 0,
      responses: [],
      errors: [],
      error: ''
    }
  },
  methods: {
    prev: function() {
      this.questionIndex--;
    },
    next: function() {
      if(this.responses[this.questionIndex] === undefined){
        this.errors[this.questionIndex] = 1;
        this.error = 'Vous devez choisir une réponse';
      } else {
        this.errors[this.questionIndex] = 0;
        this.questionIndex++;
      }
    },

    score: function() {
      return this.responses[0] + this.responses[1]
    }
  }
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

  .question-answer{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .question-answer :hover {
    //opacity: .5;
  }

  input[type=radio]:checked + img{
    border: 10px solid rgba(204, 18, 55, 0.7);
    box-sizing: border-box;
    filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.11));
    border-radius: 0px;
  }

  input[type=radio]:checked + label>img{
    background-image: url("../assets/img/Quiz/Rectangle 347.png");
  }

  .img-question-width{
    width: 300px;
  }

  input[type="radio"]{
    position: absolute;
    left: -9999px;
  }
}
</style>