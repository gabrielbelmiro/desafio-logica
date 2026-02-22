# 🧠 Classificador de Nível de Herói | Desafio DIO

Projeto desenvolvido como parte do desafio da DIO (Digital Innovation One), com foco em consolidação de fundamentos de lógica de programação utilizando JavaScript.

> Objetivo estratégico: Demonstrar domínio de estruturas condicionais, organização lógica e clareza na construção de regras de negócio simples.

---

## 🎯 Problema de Negócio

Dado um herói com determinada quantidade de experiência (XP), o sistema deve classificá-lo automaticamente em um nível específico.

Esse tipo de lógica é amplamente utilizado em:

- Sistemas de gamificação  
- Plataformas com progressão de usuários  
- Rankings e score systems  
- Programas de fidelidade  

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js (execução via terminal)

---

## 📌 Requisitos Técnicos Aplicados

✔ Uso de variáveis  
✔ Operadores relacionais e lógicos  
✔ Estrutura de decisão  
✔ Organização clara das regras de classificação  
✔ Saída padronizada para exibição de resultado  

---

## 📊 Regras de Classificação

| XP | Nível |
|------|--------|
| < 1.000 | Ferro |
| 1.001 – 2.000 | Bronze |
| 2.001 – 5.000 | Prata |
| 5.001 – 7.000 | Ouro |
| 7.001 – 8.000 | Platina |
| 8.001 – 9.000 | Ascendente |
| 9.001 – 10.000 | Imortal |
| ≥ 10.001 | Radiante |

---

## 💻 Implementação

A solução foi estruturada da seguinte forma:

- Definição das variáveis principais ('nome', 'classe', 'xp')
- Aplicação de uma estrutura 'switch(true)' para validar intervalos numéricos
- Separação clara entre dados do herói e regra de negócio
- Uso de template string para exibição da mensagem final

A escolha da estrutura 'switch(true)' permite avaliar múltiplas condições booleanas de maneira organizada, mantendo a leitura limpa e escalável para futuras expansões da regra.

📂 O código-fonte completo está disponível em: 

src/desafio1/index.js

---

## 🖥️ Exemplo de Saída

O Herói de nome Legola-GreenLeaf está no nível Radiante.

---

## 🧩 Decisões Técnicas

- Organização da lógica em bloco único de decisão
- Facilidade de refatoração para função reutilizável
- Estrutura pronta para evolução orientada a objeto
- Código preparado para expansão de regras futuras

---

## 📈 Competências Demonstradas

- Lógica de programação
- Modelagem de regra de negócio
- Estruturação clara de código
- Organização de repositório
- Mentalidade de evolução incremental

---

## 👨‍💻 Autor

Gabriel Belmiro  
Desenvolvedor em constante evolução, com foco em construção de base sólida e boas práticas desde os fundamentos.
LinkedIn: https://www.linkedin.com/in/gabriel-belmiro/
---

✨ Projeto com foco estratégico em portfólio e consolidação de fundamentos.

---

## 🎓 Formação e Referência Acadêmica

**Escola:** DIO – Digital Innovation One  
🔗 https://web.dio.me/

**Instrutor responsável pelo desafio:**  
Felipe Silva Aguiar – Desenvolvedor FullStack  
🔗 https://www.linkedin.com/in/felipeaguiar-exe/

---

Projeto desenvolvido como parte da trilha de formação em lógica de programação.