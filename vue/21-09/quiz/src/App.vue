<template>
  <div>
    <div class="quizContainer">
      <div class="card-container">
        <div
          class="card"
          :style="{
            transform:
              this.index === this.randomQuestions.length
                ? 'rotateY(180deg)'
                : 'none',
          }"
        >
          <figure
            class="back"
            :style="{
              backgroundColor: this.score >= 5 ? ' #98ff98' : ' #ff6961',
            }"
          >
            <div>
              <h1>
                you're score is {{ score }}
                you suck , press true to try again
              </h1>
            </div>  <h2>right answers</h2>
            <div class="list">
            
              <ul v-for="answer in answers" :key="answer.total">
                <li>{{ answer }}</li>
              </ul>
            </div>
          </figure>

          <figure class="front" v-if="index < randomQuestions.length">
            <h1>{{ randomQuestions[index].question }}</h1>
          </figure>
          <div></div>
        </div>
      </div>
     
    </div> <div class="buttons">
        <button class="true" @click="trueBtnClicked">true</button>
        <button class="false" @click="falseBtnClicked">false</button>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      randomQuestions: [],
      questionArr: [],
      answers: [],
      index: 0,
      score: 0,
    };
  },
  created() {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=18&type=boolean")
      .then((response) => {
        this.questionArr = response.data;
        this.randomQuestions = this.questionArr.results;
        console.log(this.randomQuestions);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  mounted() {
    this.randomizeQuestions();
  },
  methods: {
    randomizeQuestions() {
      this.randomQuestions = this.randomQuestions.sort(function () {
        return Math.random() - 0.5;
      });
    },
    resetGame() {
      this.randomizeQuestions();
      this.answers = [];
      this.index = 0;
      this.score = 0;
      this.back = "";
    },
    answerQuestion(answer) {
      if (answer === this.randomQuestions[this.index].correct_answer) {
        this.answers[this.index] = true;
        this.score++;
        console.log(this.answers[this.index]);
      } else {
        this.answers[this.index] = false;
        console.log(this.answers[this.index]);
      }
      this.index++;
    },
    trueBtnClicked() {
      if (this.index === this.randomQuestions.length) {
        this.resetGame();
        return;
      }

      this.answerQuestion("True");
      console.log("true button clicked");
    },
    falseBtnClicked() {
      if (this.index === this.randomQuestions.length) {
        return;
      }

      this.answerQuestion("False");
      console.log("false button clicked");
    },
  },
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  margin: 0;
      background-image: url("./assets/wallpapertip_wallpaper-pecah_648562.png");

}
div {
  
  width: 100%;

  .quizContainer {
    width: 100%;
    height: 100vh;
    position: relative;
        display: flex;
          justify-content: center;
          align-items: center;

    .card-container {
      width: 500px;
      height: 500px;
                      margin: auto;

      .card {
        width: 100%;
        height: 100%;
        transition: transform 2s ease-in-out;
        transform-style: preserve-3d;

        
        figure {
          padding: 1em;
          width: 500px;
          height: 500px;
          border-radius: 15px;
          background-color: peachpuff;
      
          box-shadow: 5px 6px 10px -5px rgba(0, 0, 0, 0.75);
          position: absolute;
                margin: auto;

          h1 {
            width: 80%;
          }

          .list{
                                     
   display:flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
              ul {
                     display: flex;
      flex-direction: row;


            list-style: none;
            li{
              width: 20%;
              margin: 0;
              display: flex;
            }
            li::before {
              content: "🍑";
            }
          }
          }
        
        }
        .back {
          transform: rotateY(180deg);
        }
      }
    }

    
  }
  .buttons {
      display: flex;

      justify-content: center;
      width: 100%;

      button {
        margin: 1rem;
        width: 75px;
        height: 40px;
      }
      .true {
        background-color: #98ff98;
        border: none;
      }
      .false {
        background-color: #ff6961;
        border: none;
      }
    }
}
</style>