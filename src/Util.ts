export class Util{

  static Randomizar(base: number, limite: number): number{
    const sorteado = base + Math.random() * limite - base
    return Math.round(sorteado)
  }
}