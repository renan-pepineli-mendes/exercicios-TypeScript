//Ex - Manipulação de Erros

class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';  
    }
}
function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError('Email inválido: O email deve conter "@"');
    }

    console.log('Email válido!');
}

try {
    verificarEmail('teste.com'); 
} catch (error) {
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);  
    }
}