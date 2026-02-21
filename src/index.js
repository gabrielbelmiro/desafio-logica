//Parâmetros iniciais do Herói
let nomeHeroi = "Legola-GreenLeaf"
let classeHeroi = "Arqueiro"
let expHeroi = 50000
let nivelHeroi = "";
//Parâmetros de classificação do nivel do Herói
switch (true) {
        case expHeroi < 1000:
            nivelHeroi = "Ferro";
            break
        case expHeroi >= 1001 && expHeroi < 2000:
            nivelHeroi = "Bronze";
            break
        case expHeroi >= 2001 && expHeroi < 5000:
            nivelHeroi = "Prata";
            break
        case expHeroi >= 5001 && expHeroi < 7000:
            nivelHeroi = "Ouro";
            break
        case expHeroi >= 7001 && expHeroi < 8000:
            nivelHeroi = "Platina";
            break
        case expHeroi >= 8001 && expHeroi < 9000:
            nivelHeroi = "Ascendente";
            break
        case expHeroi >= 9001 && expHeroi < 10000:
            nivelHeroi = "Imortal";
            break
        case expHeroi >= 10001:
            nivelHeroi = "Radiante";
            break
        default:
            nivelHeroi = "Aprendiz";
    }
//Exibição dos dados do Herói
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + ".");