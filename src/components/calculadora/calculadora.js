export default {
    data(){
      return{
        valorCorrente: '',
        numeroAnterior: null,
        operador: null,
        operadorClicado: false,
        valorMemoria: [{/*id:0,*/ valor:0}]
      };
    },
    methods: {
      limpar() {
        this.valorCorrente = '';
      },
      sinal() {
        this.valorCorrente = this.valorCorrente.charAt(0) === '-' 
        ? this.valorCorrente.slice(1)
        : `-${this.valorCorrente}`;
      },
      porcentagem() {
        this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
      },
      juntarNumeros(numero) {
        if (this.operadorClicado) {
          this.valorCorrente = '';
          this.operadorClicado = false;
        }
        this.valorCorrente = `${this.valorCorrente}${numero}`;
      },
      ponto() {
        if (this.valorCorrente.indexOf('.')=== -1) {
          this.juntarNumeros('.')
        }
      },
  
      setarValor() {
        this.numeroAnterior = this.valorCorrente;
        this.operadorClicado = true;
      },
  
      dividir() {
       this.operador = (num1, num2) => num1 / num2;
       this.setarValor();
      },
  
      multiplicar() {
        this.operador = (num1, num2) => num1 * num2;
        this.setarValor();
      },
  
      subtrair() {
        this.operador = (num1, num2) => num1 - num2;
        this.setarValor();    
      },
  
      somar() {
        this.operador = (num1, num2) => num1 + num2;
        this.setarValor();     
      },
  
      resultado() {
        this.valorCorrente = `${this.operador(
          parseFloat(this.numeroAnterior),
          parseFloat(this.valorCorrente),
          )}`;
          this.valorMemoria.push({ id: this.valorMemoria.length, valor: this.valorCorrente});
          //console.log utilizado somente para verificação de funcionamento
          console.log(this.valorMemoria);
      },

      /*função com problemas devido a utilizar o valorCorrente, não será possível utilizar 2 valores de memória para
      fazer cálculos.*/
      utilizarValor() {
        var nome = prompt('Qual memória quer UTILIZAR, digite a posição:');
        this.valorCorrente = this.valorMemoria[nome];
        this.valorCorrente = parseFloat(this.valorCorrente.valor);
        //somente para avaliação do resultado de saída da função
        console.log(this.valorCorrente);
      },



      excluirValor() {
        var nome = prompt('Qual memória quer EXCLUIR, digite a posição:');
        this.valorCorrente = this.valorMemoria.splice(nome,1);
        this.valorCorrente = parseFloat(this.valorCorrente.valor);
        //this.valorMemoria = this.valorCorrente.filter(this.valorCorrente);

        //não consegui transformar em um valor inteiro para reutilizar no calculo, sempre retorna um Array
        console.log(this.valorMemoria);
        //console.log(this.valorCorrente);
      },
    },
  }