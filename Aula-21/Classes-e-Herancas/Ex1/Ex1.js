//exercico 1 - classe e heranças
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var funcionarios = /** @class */ (function () {
    function funcionarios(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    funcionarios.prototype.descricao = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", trabalho no cargo ").concat(this.cargo, " e recebo ").concat(this.salario);
    };
    return funcionarios;
}());
//criando subclasse
var gerente = /** @class */ (function (_super) {
    __extends(gerente, _super);
    function gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    //apresentação
    gerente.prototype.apresentacao = function () {
        return "".concat(_super.prototype.descricao.call(this), " Atualmente estou no departamento de ").concat(this.departamento);
    };
    return gerente;
}(funcionarios));
//exemplo de uso
var funcionarios1 = new gerente('Amanda', 'Gerente de Auditoria Interna', 20000, 'Auditoria');
console.log(funcionarios1.apresentacao());
