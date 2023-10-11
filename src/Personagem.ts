import { Arma } from "./Arma";
import { Identificacao } from "./Identificacao";
import { Status } from "./Status";
import { Util } from "./Util";

export class Personagem {
  identificacao: Identificacao = new Identificacao();
  status: Status = new Status();
  arma: Arma = new Arma();

  constructor(nome: string, raca: string, classe: string, armaTipo: string, armaNome: string) {
    this.identificacao.nome = nome
    this.identificacao.raca = raca
    this.identificacao.classe = classe
    this.arma.nome = armaNome
    this.arma.tipo = armaTipo

    this.status.armadura = 0
    this.status.ataque = 0
    this.status.defesa = Util.Randomizar(1, 100)
    this.status.intelecto = Util.Randomizar(1, 100)
    this.status.mana = this.status.intelecto * 4.5
    this.status.nivel = 1
    this.status.PDA = this.status.ataque * 3.5
    this.status.stamina = Util.Randomizar(1, 100)
    this.status.vida = Util.Randomizar(10, 1000)
    this.arma.nivel = Util.Randomizar(1, 6)
    this.arma.dano = Math.round(this.arma.nivel * Util.Randomizar(1, 10))
  }

  treinarAtaque(): boolean {
    let continua = true
    this.status.ataque = Math.round(this.status.ataque * 1.1)
    this.status.stamina -= Util.Randomizar(1, 100)
    if (this.status.stamina <= 0) {
      continua = false
    }
    return continua
  }

  treinarDefesa(horas: number): boolean {
    this.status.defesa += Math.round(Util.Randomizar(1, horas) * (1.1 * this.status.defesa))
    this.status.stamina -= Math.round(Util.Randomizar(1, horas) * (this.status.stamina * 0.1)) + 10

    const continua = this.status.stamina > 0
    return continua
  }
}
