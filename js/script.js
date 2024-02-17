const perguntas = [
    {
        pergunta: 'Qual é a função usada para imprimir algo no console?',
        respostas: [
            "console.log()",
            "print()",
            "display()"
        ],
        correta: 0
    },
    {
        pergunta: 'Qual declaração de variável é utilizada para criar uma variável que pode ser modificada posteriormente?',
        respostas: [
            "const",
            "let",
            "var"
        ],
        correta: 1
    },
    {
        pergunta: 'O que o operador === faz em JavaScript?',
        respostas: [
            "Verifica se os valores são iguais, mas ignora o tipo",
            "Verifica se os valores e os tipos são iguais",
            "Verifica se os valores são diferentes"
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a função usada para converter uma string em um número inteiro em JavaScript?',
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toInteger()"
        ],
        correta: 0
    },
    {
        pergunta: 'Como se chama o conceito em JavaScript que permite que uma função tenha acesso às variáveis de sua função externa?',
        respostas: [
            "Injeção de dependência",
            "Escopo léxico",
            "Escopo dinâmico"
        ],
        correta: 1
    },
    {
        pergunta: 'Qual método é usado para remover o último elemento de um array em JavaScript?',
        respostas: [
            "pop()",
            "remove()",
            "delete()"
        ],
        correta: 0
    },
    {
        pergunta: 'O que o operador && faz em JavaScript?',
        respostas: [
            "Verifica se pelo menos uma das expressões é verdadeira",
            "Verifica se ambas as expressões são verdadeiras",
            "Verifica se pelo menos uma das expressões é falsa"
        ],
        correta: 1
    },
    {
        pergunta: 'Como se chama o tipo de dado que pode representar verdadeiro ou falso?',
        respostas: [
            "Boolean",
            "String",
            "Number"
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a função usada para adicionar um elemento ao final de um array em JavaScript?',
        respostas: [
            "push()",
            "append()",
            "addToEnd()"
        ],
        correta: 0
    },
    {
        pergunta: 'O que o operador || faz em JavaScript?',
        respostas: [
            "Verifica se pelo menos uma das expressões é verdadeira",
            "Verifica se ambas as expressões são verdadeiras",
            "Verifica se pelo menos uma das expressões é falsa"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta
    

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'perguntas-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
                if(estaCorreta) {
                    corretas.add(item)
                }
                mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()



    quiz.appendChild(quizItem)
}
