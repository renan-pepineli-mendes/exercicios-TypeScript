// Ex1 - Módulos e Namespaces
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
//classe
var Pedido = /** @class */ (function () {
    function Pedido(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    Pedido.prototype.exibir = function () {
        return "Cliente: ".concat(this.cliente.nome, " comprou o porduto ").concat(this.produto, " pelo valor de ").concat(this.valor);
    };
    return Pedido;
}());
exports.Pedido = Pedido;
