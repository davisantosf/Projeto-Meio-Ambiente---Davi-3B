const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma das principais causas do desmatamento na Amazônia, considerando os principais fatores econômicos e industriais que impulsionam essa prática?",
        alternativas: [
            "Agricultura e pecuária",
            "Urbanização"
        ]
    },
    {
        enunciado: "Quais são os impactos do desmatamento na biodiversidade da Amazônia, levando em conta a importância ecológica da região e a interação das espécies com seu habitat?",
        alternativas: [
            "Aumento da diversidade de espécies",
            "Perda de habitat e extinção de espécies",
        ]
    },
    {
        enunciado: "Qual a consequência do desmatamento para as comunidades indígenas da Amazônia, considerando a relação dessas comunidades com a floresta e seu modo de vida tradicional?",
        alternativas: [
            "Preservação das culturas tradicionais",
            "Deslocamento e perda de território"
        ]
    },
    {
        enunciado: "Como o desmatamento na Amazônia afeta o clima global, especialmente em relação à função da floresta como sumidouro de carbono e regulador climático?",
        alternativas: [
            "Redução da emissão de gases de efeito estufa",
            "Aumento da emissão de gases de efeito estufa"
        ]
    },
    {
        enunciado: "Quais medidas podem ajudar a combater o desmatamento na Amazônia, considerando as políticas públicas e estratégias de conservação ambiental que podem ser implementadas?",
        alternativas: [
           "Expansão da fronteira agrícola",
           "Fiscalização e políticas de conservação ambiental"
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();