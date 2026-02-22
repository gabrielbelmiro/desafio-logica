# 🧮 Calculadora de Partidas Rankeadas | Desafio DIO

Projeto desenvolvido como parte do segundo desafio da DIO (Digital Innovation One), com foco em aplicação prática de funções e regras de negócio utilizando JavaScript.

> Objetivo estratégico: Demonstrar capacidade de modelar lógica baseada em cálculo, retorno de função e classificação condicional.

---

## 🎯 Problema de Negócio

Dado um jogador com determinada quantidade de vitórias e derrotas, o sistema deve:

1. Calcular o saldo de partidas ranqueadas  
2. Classificar o jogador em um nível competitivo  
3. Exibir uma mensagem padronizada com o resultado  

Esse tipo de lógica é amplamente utilizada em:

- Sistemas de ranking competitivo  
- Jogos online  
- Plataformas gamificadas  
- Classificações baseadas em performance  

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js (execução via terminal)

---

## 📌 Requisitos Técnicos Aplicados

✔ Uso de variáveis  
✔ Operadores aritméticos (subtração)  
✔ Operadores relacionais  
✔ Estruturas de decisão  
✔ Funções com retorno  
✔ Organização de regra de negócio  

---

## 📊 Regras de Classificação

O nível é definido com base na quantidade de vitórias:

| Vitórias | Nível |
|-----------|--------|
| < 10 | Ferro |
| 11 – 20 | Bronze |
| 21 – 50 | Prata |
| 51 – 80 | Ouro |
| 81 – 90 | Diamante |
| 91 – 100 | Lendário |
| ≥ 101 | Imortal |

O saldo de partidas ranqueadas é calculado por:
saldo = vitórias - derrotas
---

## 💻 Implementação

A solução foi estruturada com:

- Criação de uma função responsável por calcular o saldo de vitórias
- Retorno do resultado para variável externa
- Aplicação de estrutura condicional para classificação do nível
- Separação clara entre cálculo e regra de classificação
- Uso de template string para exibição padronizada da mensagem final

Essa abordagem demonstra organização de lógica, reutilização de função e clareza na modelagem da regra de negócio.

📂 O código-fonte completo está disponível em:

src/desafio2/index.js

---

## 🖥️ Exemplo de Saída

O Herói tem de saldo de 45 está no nível de Prata


---

## 🧩 Decisões Técnicas

- Separação entre cálculo matemático e classificação
- Uso de função com retorno explícito
- Estrutura pronta para validação de entrada futura
- Base preparada para expansão (ex: múltiplos jogadores)

---

## 🚀 Roadmap de Evolução

- Permitir entrada dinâmica via terminal
- Criar versão orientada a objeto (classe Jogador)
- Implementar validações de dados
- Adicionar testes unitários
- Transformar em mini API REST

---

## 📈 Competências Demonstradas

- Lógica matemática aplicada
- Estruturação de função com retorno
- Modelagem de regra de negócio
- Organização de código
- Pensamento de escalabilidade

---

## 🎓 Formação e Referência Acadêmica

**Escola:** DIO – Digital Innovation One  
🔗 https://web.dio.me/

**Instrutor responsável pelo desafio:**  
Felipe Silva Aguiar – Desenvolvedor FullStack  
🔗 https://www.linkedin.com/in/felipeaguiar-exe/

---

## 👨‍💻 Autor

Gabriel B.  
Desenvolvedor em constante evolução, com foco em construção de base sólida e aplicação prática dos fundamentos.

---

✨ Projeto acadêmico com foco estratégico em portfólio e consolidação de fundamentos.