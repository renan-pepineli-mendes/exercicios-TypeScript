//Ex1 - Módulos e Namespaces

import { Pedido } from './Pedido';
import { Cliente } from "./Cliente";

//mostrando
const cliente1 = new Cliente('Renan', 'renan@gmail.com');
const pedido1 = new Pedido(cliente1, 'Zelda Echoes of Wisdom', 350);

console.log(pedido1.exibir());