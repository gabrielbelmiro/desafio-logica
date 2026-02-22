class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }

    atacar() {
        let ataque;

        switch (this.classe) {
            case "Guerreiro":
                ataque = "Espada";
                break;
            case "Mago":
                ataque = "Magia";
                break;
            case "Arqueiro":
                ataque = "Arco e flecha";
                break;
            case "Ninja":
                ataque = "Shurikens";
                break;
            default:
                ataque = "Ataque desconhecido";
        }
        console.log(`O ${this.nome} do tipo ${this.classe} atacou usando ${ataque}`)
    }
}

//Coleção de Heróis
let heroi1 = new Heroi("Legola-GreenLeaf", 2931, "Arqueiro");
let heroi2 = new Heroi("Gandalf", 2019, "Mago");
let heroi3 = new Heroi("Aragorn", 87, "Guerreiro");
let heroi4 = new Heroi("Donatelo", 32, "Ninja");

// Chamando método de ataque para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
