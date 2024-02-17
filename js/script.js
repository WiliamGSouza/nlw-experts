const perguntas = [
    {
        pergunta: 'Qual clube brasileiro possui o maior número de títulos da Copa Libertadores da América?',
        respostas: [
            "Santos FC",
            "SE Palmeiras",
            "CR Flamengo"
        ],
        correta: 0
    },
    {
        pergunta: 'Quem é o maior artilheiro da história da Seleção Brasileira de Futebol?',
        respostas: [
            "Pelé",
            "Ronaldo",
            "Romário"
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o único clube brasileiro a ter conquistado a Tríplice Coroa (Campeonato Brasileiro, Copa do Brasil e Copa Libertadores no mesmo ano)?',
        respostas: [
            "Grêmio FBPA",
            "São Paulo FC",
            "CR Flamengo"
        ],
        correta: 2
    },
    {
        pergunta: 'Quantas vezes o Brasil ganhou a Copa do Mundo de Futebol?',
        respostas: [
            "5 vezes",
            "6 vezes",
            "7 vezes"
        ],
        correta: 0
    },
    {
        pergunta: 'Qual jogador brasileiro é conhecido como "O Fenômeno"?',
        respostas: [
            "Ronaldinho Gaúcho",
            "Ronaldo Nazário",
            "Neymar Jr."
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o estádio de futebol mais famoso do Brasil?',
        respostas: [
            "Estádio do Maracanã",
            "Arena Corinthians",
            "Estádio Mineirão"
        ],
        correta: 0
    },
    {
        pergunta: 'Qual clube é conhecido como "O Time de Guerreiros"?',
        respostas: [
            "SC Corinthians Paulista",
            "Fluminense FC",
            "Grêmio FBPA"
        ],
        correta: 1
    },
    {
        pergunta: 'Qual foi o primeiro clube brasileiro a conquistar a Copa Libertadores da América?',
        respostas: [
            "Santos FC",
            "CR Flamengo",
            "SE Palmeiras"
        ],
        correta: 0
    },
    {
        pergunta: 'Quem é o jogador brasileiro com mais gols marcados na história da Liga dos Campeões da UEFA?',
        respostas: [
            "Ronaldo Nazário",
            "Neymar Jr.",
            "Rivaldo"
        ],
        correta: 1
    },
    {
        pergunta: 'Qual foi o único clube brasileiro a vencer a Copa Intercontinental (Mundial Interclubes) por três vezes consecutivas?',
        respostas: [
            "São Paulo FC",
            "CR Flamengo",
            "SE Palmeiras"
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
