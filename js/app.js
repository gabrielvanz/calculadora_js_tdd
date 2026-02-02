const App = new Vue({
    el: '#app',
    data: {
        title: 'Calculadora',
        numero1: '',
        numero2: '',
        resultado: '-',
        calculadora: new Calculadora()
    },
    methods: {
        calcular(operacao) {
            try {
                const num1 = parseFloat(this.numero1);
                const num2 = parseFloat(this.numero2);
                
                if (isNaN(num1) || isNaN(num2)) {
                    this.resultado = 'Informe dois números válidos';
                    return;
                }
                
                switch(operacao) {
                    case 'somar':
                        this.resultado = this.calculadora.somar(num1, num2);
                        break;
                    case 'subtrair':
                        this.resultado = this.calculadora.subtrair(num1, num2);
                        break;
                    case 'multiplicar':
                        this.resultado = this.calculadora.multiplicar(num1, num2);
                        break;
                    case 'dividir':
                        this.resultado = this.calculadora.dividir(num1, num2);
                        break;
                }
            } catch (error) {
                this.resultado = error.message;
            }
        },
    }
});