//Ex2 - Módulos e Namespaces

import { Financeiro } from "./Financeiro";

const orcamento1 = new Financeiro.Orcamento(550, ['Jogo: Zelda Breath of the Wild', 'Jogo: Zelda Tears of the Kingdom', 'Jogo: Zelda Spirit Tracks']);
console.log(orcamento1.exibir());

const valorImposto = Financeiro.calcularImposto(550, 0.15)
console.log(`Valor com imposto: ${valorImposto}`);

const valorDesconto = Financeiro.calcularDesconto(550, 0.10)
console.log(`Valor com o desconto: ${valorDesconto}`);