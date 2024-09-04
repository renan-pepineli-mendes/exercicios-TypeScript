//Ex1 - Módulos e Namespaces
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importando 
var Pedido_1 = require("./Pedido");
var Cliente_1 = require("./Cliente");
//mostrando
var cliente1 = new Cliente_1.Cliente('Renan', 'renan@gmail.com');
var pedido1 = new Pedido_1.Pedido(cliente1, 'Zelda Echoes of Wisdom', 350);
console.log(pedido1.exibir());