import { Arma } from "./Arma";
import { Identificacao } from "./Identificacao";
import { Status } from "./Status";
import { Util } from "./Util";

export class Personagem {
  identificacao: Identificacao = new Identificacao();
  status: Status = new Status();
  arma: Arma = new Arma();

  constructor(
    nome: string,
    raca: string,
    classe: string,
    armaTipo: string,
    armaNome: string
  ) {
    this.identificacao.nome = nome;
    this.identificacao.raca = raca;
    this.identificacao.classe = classe;
    this.arma.nome = armaNome;
    this.arma.tipo = armaTipo;

    this.status.armadura = 1;
    this.status.ataque = 20;
    this.status.defesa = Util.Randomizar(1, 50);
    this.status.intelecto = Util.Randomizar(1, 100);
    this.status.mana = this.status.intelecto * 4.5;
    this.status.nivel = 1;
    this.status.PDA = this.status.ataque * 3.5;
    this.status.stamina = Util.Randomizar(1, 100);
    this.status.vida = Util.Randomizar(10, 1000);
    this.arma.nivel = Util.Randomizar(1, 6);
    this.arma.dano = Math.round(this.arma.nivel * Util.Randomizar(1, 10));
  }

  treinarAtaque(): boolean {
    let continua = true;
    this.status.ataque = Math.round(this.status.ataque * 2.1);
    this.status.stamina -= Util.Randomizar(1, 100);
    if (this.status.stamina <= 0) {
      continua = false;
    }
    return continua;
  }

  treinarDefesa(horas: number): boolean {
    const incrementoDefesaPosTreino = Math.round(
      Util.Randomizar(1, horas) * (1.1 * this.status.defesa)
    );
    const ReducaoStaminaPosTreino =
      Math.round(
        Util.Randomizar(1, horas) * (this.status.staminaMaxima * 0.1)
      ) + 10;

    this.status.defesa += incrementoDefesaPosTreino;
    this.status.stamina -= ReducaoStaminaPosTreino;

    const continua = this.status.stamina > 0;
    return continua;
  }

  atacar(inimigo: Personagem): void {
    this.ataque(inimigo);
    inimigo.ataque(this);
  }
  // contraAtacar(personagem: Personagem){
  //   return this.ataque(personagem)
  // }

  ataque(inimigo: Personagem): number {
    const dado = Util.Randomizar(1, 100);

    const acertouGolpe = dado > inimigo.status.esquiva;
    let danoCausado: number = 0;

    if (acertouGolpe) {
      const variacaoAtaque: number = Util.Randomizar(
        this.status.PDA / 2,
        this.status.PDA
      );

      danoCausado = variacaoAtaque * (inimigo.status.defesa / 100);

      inimigo.status.vida -= danoCausado;
    }
    return danoCausado;
  }

  tirarSoneca(tempoEmHoras: number) {
    this.status.stamina += (this.status.staminaMaxima / 10) * tempoEmHoras;
    if (this.status.stamina > this.status.staminaMaxima) {
      this.status.stamina = this.status.staminaMaxima;
    }
  }
}
