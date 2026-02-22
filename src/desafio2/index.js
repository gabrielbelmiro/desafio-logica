//Parâmetros iniciais do Herói
let nomeHeroi = "Legola-GreenLeaf"
let classeHeroi = "Arqueiro"
let vitorias = 100
let derrotas = 15
//Execução das funções
main();

function main() {
    let saldoVitorias = calcularVitorias(vitorias, derrotas);
    let rankHeroi = atribuirRank(saldoVitorias);

    console.log(`O Herói tem saldo ${saldoVitorias} e está no nível de ${rankHeroi}.`);
}
//Função de classificação do nivel do Herói
function atribuirRank(vitorias) {
    switch (true) {
        case vitorias <= 10:
            rankHeroi = "Ferro";
            return rankHeroi;
        case vitorias >= 11 && vitorias <= 20:
            rankHeroi = "Bronze";
            return rankHeroi;
        case vitorias >= 21 && vitorias <= 50:
            rankHeroi = "Prata";
            return rankHeroi;
        case vitorias >= 51 && vitorias <= 80:
            rankHeroi = "Ouro";
            return rankHeroi;
        case vitorias >= 81 && vitorias <= 90:
            rankHeroi = "Diamante";
            return rankHeroi;
        case vitorias >= 91 && vitorias <= 100:
            rankHeroi = "Lendário";
            return rankHeroi;
        case vitorias >= 101:
            rankHeroi = "Imortal";
            return rankHeroi;
        default:
            rankHeroi = "Aprendiz";
            return rankHeroi;
    }
}

function calcularVitorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
    
}