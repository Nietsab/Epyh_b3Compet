<template>
  <div class="quiz">
    <h1 class="quiz-title"></h1>

    <div class="questions">
      <h1>{{ quiz.title }}</h1>
      <div class="question">
        <p v-if="errors[questionIndex]" class="alert alert-danger"> {{ error }}</p>
        <div v-for="(question, index) in quiz.questions" :key="index">
            <h4 class="mt-5 mb-3">{{ question.text }}</h4>
          <div v-show="index === questionIndex" class="question-answer">
            <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="form-check">
              <label class="form-check-label">
                <input class="form-check-input radio-reponse" type="radio" :value="answer.value" :name="index"
                       v-model="responses[index]">
                <img :src="answer.text" alt="">
              </label>
            </div>

            <div class="mt-5">
              <button class="btn btn-primary" v-if="questionIndex > 0" @click="prev">prev</button>
              <button class="btn btn-secondary" @click="next">next</button>
            </div>
          </div>
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
      text: 'Comment vous habillez-vous l\'été',
      answers: [
        {
          text: 'https://i.ibb.co/7QFYjKL/Q1-R2.png',
          value: 1
        },
        {
          text: 'https://i.ibb.co/xJqYGSg/Q1-R1.png',
          value: 2
        }, {
          text: 'https://i.ibb.co/xJqYGSg/Q1-R1.png',
          value: 54
        }, {
          text: 'https://i.ibb.co/xJqYGSg/Q1-R1.png',
          value: 43
        }
      ],
    },
    {
      text: 'Question 2',
      answers: [
        {
          text: 'qss',
          value: 4
        },
        {
          text: 'rés 2',
          value: 3
        }
      ]
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
      error: '',
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
    opacity: .5;
  }

  .radio-reponse :checked {
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