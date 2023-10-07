//Construíndo a classe
class HeroGame {
    //1º passo construir os atributos do constructor
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; //Esse tipo poderiamos chamar também de classe (Guerreiro, mago, ninja e monge)

    }
    //Criando um método atacar() ==> Chamamos de método uma função dentro da Classe
    atacar() {
        let ataque = " "; //Definimos a variável "ataque dentro do método"
        if (this.tipo === "guerreiro" || this.tipo === "mago" || this.tipo === "ninja" || this.tipo === "monge") {

            if (this.tipo === "guerreiro") {
                ataque = "espada";
            } else if (this.tipo === "mago") {
                ataque = "magia"
            } else if (this.tipo === "ninja") {
                ataque = "shuriken"
            } else if (this.tipo === "monge") {
                ataque = "artes maciais"
            }
            console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${ataque} `);
        } else {
            console.log("Tipo de Heroi inválido!");

        }

    }

}
//Criando a instância
let hero = new HeroGame("Guilherme", 5, "monge");
hero.atacar()