class Calculadora {
    somar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Valores devem ser números');
        }
        return a + b;
    }

    subtrair(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Valores devem ser números');
        }
        return a - b;
    }

    multiplicar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Valores devem ser números');
        }
        return a * b;
    }

    dividir(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Valores devem ser números');
        }
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida');
        }
        return a / b;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculadora;
}