<template>
  <div>
    <div class="screen">
      <div class="screen__line-one">
        {{ lineOne === null ? "" : lineOne }} <span>{{ symbol }}</span>
      </div>
      <div class="screen__line-two">{{ lineTwo === null ? "" : lineTwo }}</div>
    </div>
    <div class="buttons">
      <div class="buttons__numbers">
        <button type="button" class="buttons__number" @click="addNumber(0)">
          0
        </button>
        <button type="button" class="buttons__number" @click="addNumber(1)">
          1
        </button>
        <button type="button" class="buttons__number" @click="addNumber(2)">
          2
        </button>
        <button type="button" class="buttons__number" @click="addNumber(3)">
          3
        </button>
        <button type="button" class="buttons__number" @click="addNumber(4)">
          4
        </button>
        <button type="button" class="buttons__number" @click="addNumber(5)">
          5
        </button>
        <button type="button" class="buttons__number" @click="addNumber(6)">
          6
        </button>
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
      <div class="buttons__math">
        <button class="buttons__math-item" @click="selectSymbol('+')">+</button>
        <button class="buttons__math-item" @click="selectSymbol('-')">-</button>
        <button class="buttons__math-item" @click="selectSymbol('/')">/</button>
        <button class="buttons__math-item" @click="selectSymbol('*')">*</button>
        <button class="buttons__math-item">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineOne: null,
      lineTwo: null,
      symbol: "",
    };
  },
  methods: {
    addNumber(number) {
      if (this.lineTwo === null) {
        this.lineTwo = number;
        return;
      }

      this.lineTwo += "" + number;
    },
    calculate() {
      if (
        this.lineOne === null ||
        this.lineTwo === null ||
        this.symbol === ""
      ) {
        return;
      }
    },

    selectSymbol(symbol) {
      this.lineOne = this.lineTwo;
      this.symbol = symbol;
      this.lineTwo = null;
    },
  },
};
</script>

<style>
body{
  background: black;
}

</style>
