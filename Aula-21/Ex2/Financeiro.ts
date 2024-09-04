// Ex2 - Módulos e Namespaces

export namespace Financeiro{
    export function calcularImposto(valor: number, taxa: number): number{
        
        return valor * taxa;
    }

    export function calcularDesconto(valor:number, taxa: number): number{
        return valor - (valor * taxa);
    }

    export class Orcamento{
        constructor(public valorTotal: number, public itens:string[]){}

        exibir(): string{
            return `Itens selecionados: ${this.itens.join(',')} Valor total: ${this.valorTotal}`;
        }
    }
}