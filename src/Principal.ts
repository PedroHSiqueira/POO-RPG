import prompt from "prompt-sync";
import { Personagem } from "./Personagem";
import { Util } from "./Util";

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
  console.log("5 - Tirar uma soneca");
  console.log("6 - Ir ao curandeiro");
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
          "Game Over! Personagem Morreu Por Falta De Stamina "
        );
      }
      break;
    case 3:
      const tempo: number = +teclado("Quantas horas de treino: ")
      continua = protagonista.treinarDefesa(tempo);
      if (!continua) {
        console.log(
          "Game Over! Treino em excesso! ");
      }
      break;
    case 4:
      while(true){
        console.log(protagonista);
      const inimigo: Personagem = pegarInimigo()
      console.table(inimigo)
      teclado("Tecle enter para continuar...")
      protagonista.atacar(inimigo)
      console.log(protagonista.status.vida);
      console.log(inimigo.status.vida);
      }
      break;
    case 5:
      const tempoDescanco: number = +teclado("Quantas horas de descanço?: ");
      protagonista.tirarSoneca(tempoDescanco)
      break;

    default:
      break;
  }
} while (continua);

//TODO: Faker
function pegarInimigo(): Personagem {
  const nomes: string[] = ["Edécio", "Gladimir", "Pablo", "Bruna"]
  const classes: string[] = ["Paladino", "Mago", "Bruxo", "Guerreiro", "Arqueiro", "Ladino"]
  const racas: string[] = ["Undead", "Orc", "Elfo", "Humano", "Dêmonio", "Anjo", "Anão", "Tauren", "Troll"]
  const tipoArma: string[] = ["Espada", "Adaga", "Cajado"]

  const nomeSelecionado: string = nomes[Util.Randomizar(0, nome.length - 1)]
  const classeSelecionada: string = classes[Util.Randomizar(0, classe.length - 1)]
  const racaSelecionada: string = racas[Util.Randomizar(0, racas.length - 1)]
  const tipoArmaSelecionads: string = tipoArma[Util.Randomizar(0, tipoArma.length - 1)]
  const nomeArma: string = tipoArmaSelecionads + nomeSelecionado
  
  const inimigo: Personagem = new Personagem(nomeSelecionado,racaSelecionada,classeSelecionada,tipoArmaSelecionads,nomeArma)

  inimigo.status.ataque = Util.Randomizar(10, 200)
  // inimigo.status.defesa = Util.Randomizar(10, 1000)
  inimigo.status.esquiva = Util.Randomizar(1, 70)
  inimigo.status.vida = Util.Randomizar(100, 500)

  return inimigo
}

