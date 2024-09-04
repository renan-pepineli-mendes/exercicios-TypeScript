// Ex2 Classes e heranças
class ContaBancaria {
    constructor(public titular: string, public saldo: number){}

    exibirSaldo(): string {
        return `Titular ${this.titular} Saldo ${this.saldo}`
    }
}

//subclasse
class ContaCorrente extends ContaBancaria{
    constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular,saldo)
    }

    //sobrescrevendo
    exibirSaldo(): string {
        const total = this.saldo + this.limiteCredito
        return `Saldo: ${super.exibirSaldo()} e o saldo total com credito ${total}`
    }
}

//testando
const ContaCorrenteExemplo = new ContaCorrente('Renan',2400,1200);
console.log(ContaCorrenteExemplo.exibirSaldo());