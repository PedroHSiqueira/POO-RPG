import { Personagem } from "./Personagem";

const personagem: Personagem = new Personagem();

personagem.arma.nome = "Cajado";
personagem.arma.nivel = 1;
personagem.arma.tipo = "Mágica";
personagem.arma.dano = 99;

personagem.identificacao.nome = "Merlin";
personagem.identificacao.raca = "undead";
personagem.identificacao.classe = "Mago";

personagem.status.nivel = 1;
personagem.status.vida = 10;
personagem.status.ataque = 80;
personagem.status.defesa = 5;
personagem.status.mana = 100;
personagem.status.stamina = 0;
personagem.status.PDA = 70;
personagem.status.intelecto = 80;
personagem.status.armadura = 20;

console.log(personagem);
