<template>
  <div class="calculadora">
    <div class="display">0</div>
    <div class="botao">C</div>
    <div class="botao">+/-</div>
    <div class="botao">%</div>
    <div class="botao operadores">÷</div>
    <div class="botao">7</div>
    <div class="botao">8</div>
    <div class="botao">9</div>
    <div class="botao operadores">x</div>
    <div class="botao">4</div>
    <div class="botao">5</div>
    <div class="botao">6</div>
    <div class="botao operadores">-</div>
    <div class="botao">1</div>
    <div class="botao">2</div>
    <div class="botao">3</div>
    <div class="botao operadores">+</div>
    <div class="botao">±</div>
    <div class="botao">0</div>
    <div class="botao">,</div>
    <div class="botao operadores">=</div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .calculadora {
    margin: 0 auto;
    width: 450px;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
  }

  .display {
    grid-column: 1 / 5;
    background-color: #333;
    color: white;
  }

  .botao {
    background-color: #f2f2f2;
    border: 1px solid rgb(212, 208, 208);
  }

  .operadores {
    background-color: rgba(243, 63, 9, 0.794);
    color: white;
  }


</style>
