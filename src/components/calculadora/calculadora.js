export default {
    data(){
      return{
        valorCorrente: '',
        numeroAnterior: null,
        operador: null,
        operadorClicado: false,
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
          this.numeroAnterior = null;
      },
    },
  }