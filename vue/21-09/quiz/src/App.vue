<template>
  <div>
    <div class="quizContainer">
      <div class="card-container">
        <div class="card" 
        v-bind:style='{"transform": card? "rotateY(180deg)":"none" }'
        v-for="question in questionArr" :key="question.id">
      
        
             <figure class="front" >
            <h1>{{question.question}}</h1>
          </figure>  
           <figure class="back">
              <h1>{{question.correct_answer}}</h1>
          </figure>
        </div>
      </div>
      <div class="buttons">
        <button class="true" @click="rotate">true</button>
        <button class="false" @click="rotate">false </button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
        card: true,
        questionArr:[],
    };
  },
  mounted: function() {
    axios.get('https://opentdb.com/api.php?amount=50&difficulty=medium&type=boolean')
    .then(response => 
    {
      this.questionArr = response.data
      console.log(response.data)})
    .catch(error =>{
      console.error(error)
    })
  },
  methods: {
   rotate: function(){

     this.card = false;

    }
  }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  margin: 0;
}
div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  .quizContainer {
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url('./assets/wallpapertip_wallpaper-pecah_648562.png');

  .card-container {
    width: 500px;
    height:500px;
    .card{
        width: 100%;
        height: 100%;
        transition:transform 1s ease-in-out;
        transform-style: preserve-3d;
     figure {
      width: 500px;
      height:500px;
      border-radius: 15px;
              background-color:peachpuff;
      display:grid;
      place-items: center;
      box-shadow: 5px 6px 10px -5px rgba(0,0,0,0.75);
      position: absolute;

    }

.front{
  transform:rotateY(180deg);
}

    }
  }
// .card-container:hover .card{
//   transform: rotateY(180deg); 
// }
    .buttons {
      display: flex;
      flex-direction: row;
        justify-content: center;
      width: 100%;

      button{
        margin: 1rem;
        width: 75px;
        height:40px
      }
      .true{
        background-color:#98ff98;
        border: none;
      }
      .false{
        background-color:#FF6961;
        border: none;
      }

    }
   
  }
}
</style>