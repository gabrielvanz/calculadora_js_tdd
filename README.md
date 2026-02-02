# 🧮 Calculadora JavaScript - Projeto TDD

## 📋 Sobre o Projeto

Aplicação web de calculadora construída seguindo a metodologia TDD (Test-Driven Development), utilizando Vue.js para interface reativa e Jest para testes unitários.

## 🚀 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Instale as dependências
npm install
```

## 💻 Uso

### Interface Web

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

Acesse: `http://localhost:8000`

### Executar Testes

```bash
# Rodar todos os testes
npm test

# Testes com cobertura
npm test -- --coverage

# Modo watch
npm test -- --watch
```

## 📁 Estrutura do Projeto

```
calculadora_js_tdd/
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── calculadora.js
│   └── vue.js
├── tests/
│   └── calculadora.test.js
├── index.html
└── package.json
```

## 🧪 Cobertura de Testes

O projeto possui 27 testes cobrindo:

- Operações matemáticas básicas
- Validação de entrada
- Tratamento de erros
- Casos extremos (divisão por zero, números negativos, decimais)

## 🛠️ Stack

| Tecnologia | Versão |
| ---------- | ------- |
| Vue.js     | 2.7.14  |
| Jest       | -       |
| JavaScript | ES6+    |

## 📝 Licença

Este projeto está sob a licença especificada no arquivo LICENSE.
