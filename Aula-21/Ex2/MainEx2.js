//Ex2 - Módulos de Namespaces
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var financeiro_1 = require("./financeiro");
var orcamento1 = new financeiro_1.Financeiro.Orcamento(550, ['Jogo: Zelda Breath of the Wild', 'Jogo: Zelda Tears of the Kingdom', 'Jogo: Zelda Spirit Tracks']);
console.log(orcamento1.exibir());
var valorImposto = financeiro_1.Financeiro.calcularImposto(550, 0.15);
console.log("Valor com imposto: ".concat(valorImposto));
var valorDesconto = financeiro_1.Financeiro.calcularDesconto(550, 0.10);
console.log("Valor com o desconto: ".concat(valorDesconto));
