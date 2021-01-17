<template>
  <div class="app">
    <div class="screen">
      <div class="screen__line-one">
        {{ lineOne }} <span>{{ symbol }}</span>
      </div>
      <div class="screen__line-two">{{ lineTwo }}</div>
    </div>
    <div class="buttons">
      <div class="buttons__numbers">
        <div class="fourthRow">
          <button type="button" class="buttons__number" @click="addNumber(7)">
            7
          </button>
          <button type="button" class="buttons__number" @click="addNumber(8)">
            8
          </button>
          <button type="button" class="buttons__number" @click="addNumber(9)">
            9
          </button>
        </div>
        <div class="thirdRow">
          <button type="button" class="buttons__number" @click="addNumber(4)">
            4
          </button>
          <button type="button" class="buttons__number" @click="addNumber(5)">
            5
          </button>
          <button type="button" class="buttons__number" @click="addNumber(6)">
            6
          </button>
        </div>
        <div class="secondRow">
          <button type="button" class="buttons__number" @click="addNumber(1)">
            1
          </button>
          <button type="button" class="buttons__number" @click="addNumber(2)">
            2
          </button>
          <button type="button" class="buttons__number" @click="addNumber(3)">
            3
          </button>
        </div>
        <div class="firstRow">
          <button class="buttons__math-item" @click="clearAll()">C</button>

          <button type="button" class="buttons__number" @click="addNumber(0)">
            0
          </button>
          <button class="buttons__math-item" @click="calculate()">=</button>
        </div>
      </div>
      <div class="buttons__math">
        <div>
          <button class="buttons__math-item" @click="selectSymbol('+')">
            +
          </button>
        </div>
        <div>
          <button class="buttons__math-item" @click="selectSymbol('-')">
            -
          </button>
        </div>
        <div>
          <button class="buttons__math-item" @click="selectSymbol('%')">
            %
          </button>
        </div>
        <div>
          <button class="buttons__math-item" @click="selectSymbol('x')">
            x
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// export default {

//   data() {
//     return {
//       lineOne: null,
//       lineTwo: null,
//       symbol: '',
//       equals:null,
//     };
//   },
//   methods: {
//     addNumber(number) {
//       if (this.lineTwo === null) {
//         this.lineTwo = number;
//         return;
//       }

//       this.lineTwo = parseInt('' + this.lineTwo + number);
//       console.log(this.lineTwo)    },
//     sum() {
//       return this.lineOne + this.lineTwo;
//     },
    // calculate() {
    //   if (
    //     this.lineOne === null ||
    //     this.lineTwo === null ||
    //     this.symbol === ''
    //   ) {
    //     return;
    //   }

    //   switch (this.symbol) {
    //     case '+':
    //       this.lineTwo = this.sum();
    //   }

    //   this.lineOne = null;
    //   this.symbol = '';
    // },
    // selectSymbol(symbol) {
    //   this.calculate();

    //   this.lineOne = this.lineTwo;
    //   this.symbol = symbol;
    //   this.lineTwo = 0;
    // }
//   },
// };

export default {
  data() {
    return {
      lineOne: "",
      lineTwo: null,
      symbol: "",
      equals: null,
    };
  },
  methods: {
    addNumber(number) {
      if (
        this.lineTwo === this.equals ||this.lineTwo == null) {
        this.lineTwo = number;
        return;
      }
      this.lineTwo += "" + number;
    },
    calculate() {
      if (
        this.equals === null ||
        this.lineTwo === null ||
         this.lineOne === "" ||
         this.symbol === ""
      ) {
        return;
      }
       switch (this.symbol) {
        case '+':
          this.lineTwo = this.sum();
      }

      this.lineOne = "";
      this.symbol = "";
    },
    selectSymbol(symbol) {
      // this.lineOne = this.lineTwo;
      // this.symbol = symbol;
    this.calculate() 
       this.lineOne +=  this.lineTwo + symbol
       console.log(this.lineOne)
      this.equals += parseInt(this.lineTwo);
      this.lineTwo =  this.equals;
             console.log(this.lineTwo)

    },

    clearAll() {
      this.lineOne = "";
      this.lineTwo = null;
      this.symbol = "";
    },
  },
};
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
}

.buttons {
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: right;
  width: 430px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.15);
}
.buttons__math {
  display: block;
}
.app {
  margin-top: 150px;
}

.buttons__number,
.buttons__math-item {
  height: 60px;
  width: 100px;
  margin: 2px;
  background-color: white;
  border: white;
}
.screen {
  padding: 1rem;
  font-size: 3rem;
  font-weight: bold;
  width: 430px;
  height: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  text-align: right;
  /* background-color: rgba(128, 128, 128, 0.178); */
  background-color: rgba(0, 0, 0, 0.082);
  border-top-right-radius: 40px;
}
.screen__line-one {
  font-size: 2rem;
}
</style>
/**
 * [x] styling
 * [ ] product
 * [ ] minus
 * [ ] divide
 * [ ] root
 * [ ] power
 * [ ] backspace
 * [ ] clear
 * [ ] history
 * [ ] make line two input field
 */