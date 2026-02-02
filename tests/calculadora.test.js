const Calculadora = require('./../js/calculadora');
const calculadora = new Calculadora();

describe('Calculadora - Operação de Soma', () => {
  test('deve somar dois números positivos corretamente', () => {
    expect(calculadora.somar(2, 3)).toBe(5);
  });

  test('deve somar números negativos corretamente', () => {
    expect(calculadora.somar(-5, -3)).toBe(-8);
  });

  test('deve somar número positivo com negativo', () => {
    expect(calculadora.somar(10, -4)).toBe(6);
  });

  test('deve somar com zero', () => {
    expect(calculadora.somar(5, 0)).toBe(5);
  });

  test('deve somar números decimais', () => {
    expect(calculadora.somar(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test('deve retornar erro ao tentar somar com valor não numérico', () => {
    expect(() => calculadora.somar('a', 2)).toThrow('Valores devem ser números');
  });

  test('deve retornar erro ao tentar somar dois valores não numéricos', () => {
    expect(() => calculadora.somar('a', 'b')).toThrow('Valores devem ser números');
  });
});

describe('Calculadora - Operação de Subtração', () => {
  test('deve subtrair dois números positivos corretamente', () => {
    expect(calculadora.subtrair(10, 4)).toBe(6);
  });

  test('deve subtrair resultando em número negativo', () => {
    expect(calculadora.subtrair(3, 7)).toBe(-4);
  });

  test('deve subtrair números negativos', () => {
    expect(calculadora.subtrair(-5, -3)).toBe(-2);
  });

  test('deve subtrair com zero', () => {
    expect(calculadora.subtrair(8, 0)).toBe(8);
  });

  test('deve subtrair números decimais', () => {
    expect(calculadora.subtrair(5.7, 2.3)).toBeCloseTo(3.4);
  });

  test('deve retornar erro ao tentar subtrair com valor não numérico', () => {
    expect(() => calculadora.subtrair(10, 'b')).toThrow('Valores devem ser números');
  });
});

describe('Calculadora - Operação de Multiplicação', () => {
  test('deve multiplicar dois números positivos corretamente', () => {
    expect(calculadora.multiplicar(3, 4)).toBe(12);
  });

  test('deve multiplicar números negativos resultando em positivo', () => {
    expect(calculadora.multiplicar(-3, -4)).toBe(12);
  });

  test('deve multiplicar positivo com negativo resultando em negativo', () => {
    expect(calculadora.multiplicar(5, -2)).toBe(-10);
  });

  test('deve multiplicar por zero resultando em zero', () => {
    expect(calculadora.multiplicar(10, 0)).toBe(0);
  });

  test('deve multiplicar números decimais', () => {
    expect(calculadora.multiplicar(2.5, 4)).toBe(10);
  });

  test('deve retornar erro ao tentar multiplicar com valor não numérico', () => {
    expect(() => calculadora.multiplicar(5, null)).toThrow('Valores devem ser números');
  });
});

describe('Calculadora - Operação de Divisão', () => {
  test('deve dividir dois números positivos corretamente', () => {
    expect(calculadora.dividir(10, 2)).toBe(5);
  });

  test('deve dividir resultando em decimal', () => {
    expect(calculadora.dividir(7, 2)).toBe(3.5);
  });

  test('deve dividir números negativos', () => {
    expect(calculadora.dividir(-10, -2)).toBe(5);
  });

  test('deve dividir positivo por negativo', () => {
    expect(calculadora.dividir(10, -2)).toBe(-5);
  });

  test('deve dividir zero por número resultando em zero', () => {
    expect(calculadora.dividir(0, 5)).toBe(0);
  });

  test('deve lançar erro ao tentar dividir por zero', () => {
    expect(() => calculadora.dividir(10, 0)).toThrow('Divisão por zero não é permitida');
  });

  test('deve retornar erro ao tentar dividir com valor não numérico', () => {
    expect(() => calculadora.dividir(10, '2')).toThrow('Valores devem ser números');
  });

  test('deve retornar erro ao tentar dividir com ambos valores não numéricos', () => {
    expect(() => calculadora.dividir('a', 'b')).toThrow('Valores devem ser números');
  });
});