<template>
  <div class="quiz">
    <!--    <img class="back-blur" src="../assets/img/Fond_blur.png" alt="Image fond">-->
<!-- Todo Corriger bug du nombre de questions au total et de la question en cours  -->
<!-- Todo Ajouter choix homme ou femme pour le quiz => pour le faire 2 tableaux de question ( Hommes / Femmes)
     Todo le quiz 1 input qui pose la question avec vmodel (A vérifier) puis 2 boucle for avec vif du vmodel input-->
<!-- Todo Mettre à jour le wording (Podcast, Quiz, Questions)  -->
    <div class="questions">
      <span class="quiz-title"><div class="vertical-line"></div>{{ quiz.title }}</span>
      <div class="question">
        <p v-if="errors[questionIndex]" class="alert alert-danger"> {{ error }}</p>
        <div v-for="(question, index) in quiz.questions" :key="index">
          <div v-show="index === questionIndex" class="">
            <div class="count">
              <span class="current-question">{{ questionIndex }} </span>
              <span class="length-question">/ {{ quiz.questions.length }}</span>
              <h4 class="quiz-question">{{ question.quest }}</h4>
            </div>
            <div class="question-answer">
              <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex"
                   class="form-check">
                <input :id="answer.value" class="form-check-input radio-reponse" type="radio" :value="answer.value"
                       :name="index"
                       v-model="responses[index]">
                <label :for="answer.value" class="form-check-label ">
                  <img width="100%" height="100%" :src="answer.text" alt="">
                </label>
              </div>
            </div>


            <div class="mt-5 btn-quiz">
              <button class="btn-prev" @click="prev">Précédent</button>
              <button class="btn-next" @click="next">Suivant</button>
            </div>
          </div>
        </div>

        <div v-show="questionIndex === quiz.questions.length">
          <p>Tu corresponds à un style {{ score() }} </p>
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
  title:  "Test ton niveau de hype !",
  questions : [
    {
      quest: 'Quelle tenue mettrais-tu en soirée ?',
      answers: [
        {
          text: 'https://i.ibb.co/p4dNynK/Outfit1.png',
          value: 1
        },
        {
          text: 'https://i.ibb.co/tHfK3ZH/95-214-46-125-60e09c77072e1.jpg',
          value: 2
        }, {
          text: 'https://i.ibb.co/T0W9tPL/Rectangle-345.png',
          value: 4
        }, {
          text: 'https://i.ibb.co/q9SjY6V/Rectangle-346.png',
          value: 5
        }
      ],
    },
    {
      quest: 'Quelle tenue préfères-tu pour un premier date?',
      answers: [
        {
          text: 'https://i.ibb.co/tHfK3ZH/95-214-46-125-60e09c77072e1.jpg',
          value: 6
        },
        {
          text: 'https://i.ibb.co/tHfK3ZH/95-214-46-125-60e09c77072e1.jpgv',
          value: 7
        }, {
          text: 'https://i.ibb.co/j8L34WL/Rectangle-345-1.png',
          value: 8
        }, {
          text: 'https://i.ibb.co/xMyBs8k/7317583-4.png',
          value: 9
        }
      ],
    },
    {
      quest: 'Quel objet de cette liste serais-tu prêt à acheter ? ?',
      answers: [
        {
          text: 'https://i.ibb.co/x12TTM0/Rectangle-344-1.png',
          value: 10
        },
        {
          text: 'https://i.ibb.co/PtQ9ybz/Rectangle-343.png',
          value: 11
        }, {
          text: 'https://i.ibb.co/MSFC8dX/Rectangle-345-2.png',
          value: 12
        }, {
          text: 'https://i.ibb.co/4pjF2Vk/Rectangle-346-2.png',
          value: 13
        }
      ],
    },
    {
      quest: 'Quelle paire de sneakers est-ce que tu achèterais sans te soucier du prixv ?',
      answers: [
        {
          text: 'https://i.ibb.co/xmbyG1v/Rectangle-347.png',
          value: 14
        },
        {
          text: 'https://i.ibb.co/HxtCbgt/Rectangle-361.png',
          value: 15
        }, {
          text: 'https://i.ibb.co/C64cgY5/Rectangle-362.png',
          value: 16
        }, {
          text: 'https://i.ibb.co/WsDvybp/Rectangle-346-3.png',
          value: 17
        }
      ],
    },
    {
      quest: 'Quelle tenue mettrais-tu pour traîner avec tes potesv ?',
      answers: [
        {
          text: 'https://i.ibb.co/Yy7VBvq/Rectangle-344-2.png',
          value: 18
        },
        {
          text: 'https://i.ibb.co/dktPKBs/Rectangle-345-3.png',
          value: 19
        }, {
          text: 'https://i.ibb.co/X4d1wkr/Rectangle-346-4.png',
          value: 20
        }, {
          text: 'https://i.ibb.co/mScD433/Rectangle-343-1.png',
          value: 21
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
      if(this.questionIndex == 1){
        this.questionIndex--;
      } else if (this.questionIndex == 2){
        this.questionIndex--
      } else if (this.questionIndex == 3){
        this.questionIndex--
      } else if (this.questionIndex == 4){
        this.questionIndex--
      }
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
      // return this.responses[0] + this.responses[1]
      if(this.responses[0]== 1 && this.responses[1]== 5) {
        return 'Streetwear';
      } else if (this.responses[0]== 1 && this.responses[1]== 6) {
        return 'Lifestyle';
      } else if (this.responses[0]== 1 && this.responses[1]== 7) {
        return 'Sneakers';
      } else if (this.responses[0]== 1 && this.responses[1]== 8) {
        return 'Streetwear';
      } else if (this.responses[0]== 2 && this.responses[1]== 5) {
        return 'Lifestyle';
      } else if (this.responses[0]== 2 && this.responses[1]== 6) {
        return 'Lifestyle';
      } else if (this.responses[0]== 2 && this.responses[1]== 7) {
        return 'Sneakers';
      } else if (this.responses[0]== 2 && this.responses[1]== 8) {
        return 'Streetwear';
      } else if (this.responses[0]== 3 && this.responses[1]== 5) {
        return 'Sneakers';
      } else if (this.responses[0]== 3 && this.responses[1]== 6) {
        return 'Lifestyle';
      } else if (this.responses[0]== 3 && this.responses[1]== 7) {
        return 'Streetwear';
      } else if (this.responses[0]== 3 && this.responses[1]== 8) {
        return 'Lifestyle';
      } else if (this.responses[0]== 4 && this.responses[1]== 5) {
        return 'Streetwear';
      } else if (this.responses[0]== 4 && this.responses[1]== 6) {
        return 'Lifestyle';
      } else if (this.responses[0]== 4 && this.responses[1]== 7) {
        return 'Sneakers';
      } else if (this.responses[0]== 4 && this.responses[1]== 8) {
        return 'Streetwear';
      }
    }
  }
}

</script>

<style lang="scss">
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';

.quiz {
  padding-bottom: 80px;

  .back-blur {
    position: absolute;

  }

  .question-answer{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .questions {
    text-align: left;
    padding-top: 5rem;

    .count{
      margin-left: 7%;
    }
  }

  .question-title {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    line-height: 120%;
    text-transform: uppercase;
    color: #CC1237;
  }

  input[type=radio]:checked + img{
    border: 10px solid rgba(204, 18, 55, 0.7);
    box-sizing: border-box;
    filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.11));
    border-radius: 0px;
  }

  input[type=radio]:checked + label>img{
    border: 10px solid rgba(204, 18, 55, 0.7);
    box-sizing: border-box;
    filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.11));
    border-radius: 0px;  }

  .img-question-width{
    width: 300px;
  }

  input[type="radio"] {
    position: absolute;
    left: -9999px;
  }

  .quiz-title {
    margin-left: 6%;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
    text-transform: uppercase;
    color: #CC1237;

    .vertical-line {
      border-left: 6px solid #CC1237;
      display: inline-block;
      height: 23px;
      margin: 0 20px;
    }
  }

  .current-question {
    color: #F5C5C1;
    width: 36px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 120%;
  }

  .length-question {
    width: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: #F5C5C1;
  }

  .quiz-question {
    margin-top: -43px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
  }

  .btn-quiz {
    display: flex;
    justify-content: center;
  }

  .btn-prev {
    margin: 0 1%;
    padding: 1% 4%;
    border: 4px solid #000000;
    filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.11));
    border-radius: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;

    color: #000000;
  }

  .btn-next {
    margin: 0 1%;
    padding: 1% 4%;
    background: #000000;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.11);
    border-radius: 30px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
}
</style>