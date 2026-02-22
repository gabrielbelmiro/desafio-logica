# 🧙‍♂️ Escrevendo as Classes de um Jogo | Desafio DIO

Projeto desenvolvido como parte do terceiro desafio da DIO (Digital Innovation One), com foco em Programação Orientada a Objetos (POO) utilizando JavaScript.

> Objetivo estratégico: Demonstrar domínio de classes, encapsulamento de comportamento e modelagem de entidades do mundo real em código.

---

## 🎯 Problema de Negócio

Criar uma classe genérica que represente um herói em uma aventura, contendo:

- Propriedades fundamentais
- Comportamento específico baseado em tipo
- Regra de negócio encapsulada dentro da própria classe

Esse tipo de modelagem é amplamente utilizado em:

- Desenvolvimento de jogos
- Sistemas baseados em entidades
- Aplicações orientadas a objeto
- Modelagem de domínio (Domain Modeling)

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js

---

## 📌 Requisitos Técnicos Aplicados

✔ Variáveis  
✔ Operadores  
✔ Estruturas de decisão  
✔ Funções  
✔ Classes  
✔ Objetos  
✔ Encapsulamento de comportamento  

---

## 🧩 Modelagem da Classe

A classe `Heroi` possui as seguintes propriedades:

- `nome`
- `idade`
- `tipo` (guerreiro, mago, monge, ninja)

Além disso, contém um método:

### ⚔️ `atacar()`

Esse método:

1. Identifica o tipo do herói
2. Define o tipo de ataque correspondente
3. Exibe a mensagem padronizada

---

## 📊 Regras de Ataque

| Tipo | Ataque |
|------|--------|
| mago | usou magia |
| guerreiro | usou espada |
| monge | usou artes marciais |
| ninja | usou shuriken |

---

## 💻 Implementação

A solução foi estruturada utilizando Programação Orientada a Objetos, aplicando:

- Criação de classe genérica reutilizável
- Uso de construtor para inicialização das propriedades
- Encapsulamento da regra de ataque dentro do método `atacar()`
- Estrutura condicional para definir o tipo de ataque
- Organização clara entre dados (estado) e comportamento (ação)

Essa abordagem demonstra entendimento de modelagem orientada a objeto e organização de responsabilidades dentro da classe.

📂 O código-fonte completo está disponível em:
src/desafio3/index.js

---

## 🖥️ Exemplo de Saída

mago atacou usando magia
guerreiro atacou usando espada
arqueiro atacou usando arco e flexa

## 🧠 Decisões Técnicas

- Uso de classe para representar entidade do domínio
- Método interno responsável pela regra de negócio
- Separação clara entre propriedades e comportamento
- Estrutura preparada para expansão futura (novos tipos e ataques)

---

## 📈 Competências Demonstradas

- Programação Orientada a Objetos
- Modelagem de entidades
- Encapsulamento
- Estruturação limpa de código
- Organização de regras de negócio
- Pensamento escalável

---

## 🎓 Formação e Referência Acadêmica

**Escola:** DIO – Digital Innovation One  
🔗 https://web.dio.me/

**Instrutor responsável pelo desafio:**  
Felipe Silva Aguiar – Desenvolvedor FullStack  
🔗 https://www.linkedin.com/in/felipeaguiar-exe/

---

## 👨‍💻 Autor

Gabriel Belmiro  
🔗 https://www.linkedin.com/in/gabriel-belmiro/

Desenvolvedor focado em evolução contínua e construção de base sólida em fundamentos e arquitetura.

---

✨ Projeto acadêmico com foco estratégico em portfólio e consolidação de fundamentos em POO.
