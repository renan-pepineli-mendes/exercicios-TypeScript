class funcionarios {
    constructor(public nome: string, public cargo: string, public salario: number) {}

    descricao(): string {
        return `Meu nome é ${this.nome}, trabalho como ${this.cargo} e recebo ${this.salario}`
    }
}

//criando subclasse
class gerente extends funcionarios {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }

//apresentação
    apresentacao(): string {
        return `${super.descricao()} Trabalho no departamento de ${this.departamento}`;
    }
}

//exemplo de uso
const funcionarios1 = new gerente('Renan','Estagiário', 1000, 'Tecnologia Conversacional');
console.log(funcionarios1.apresentacao());