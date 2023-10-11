import prompt from "prompt-sync";
import { Personagem } from "./Personagem";

const teclado = prompt();
let continua = true;

export let protagonista: Personagem;

console.log("\n»»——————————　Criação de Personagem　——————————««\n");

const nome = teclado("Digite o nome do seu Personagem: ");
const raca = teclado("Digite a raça do seu Personagem: ");
const classe = teclado("Digite a classe do seu Personagem: ");
const armaNome = teclado("Escolha o nome da sua arma: ");
const armaTipo = teclado("Escolha sua arma: ");
protagonista = new Personagem(nome, raca, classe, armaNome, armaTipo);

do {
  console.log("\n»»——————————　★　——————————««\n");
  console.log("1 - Verificar Stats");
  console.log("2 - Treinar Ataque");
  console.log("3 - Treinar Defesa");
  console.log("4 - Entrar em Batalha");
  console.log("\n»»——————————　★　——————————««");

  const escolha: number = +teclado("Escolha uma Opção: ");

  switch (escolha) {
    case 1:
      console.table(protagonista);
      break;
    case 2:
      continua = protagonista.treinarAtaque();
      if (!continua) {
        console.log(
          "Personagem Morreu Por Falta De Stamina " +
            protagonista.status.stamina
        );
      }
      break;
    case 3:
      const tempo: number = +teclado("Quantas horas de treino: ")
      continua = protagonista.treinarDefesa(tempo);
      if (!continua) {
        console.log(
          "Treino em excesso! " + protagonista.status.stamina);
      }
      break;

    default:
      break;
  }
} while (continua);
