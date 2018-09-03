export class Validacoes {

    public static validarCpf(cpf: string): boolean {
        let soma = 0;
        let resto;

        if (cpf === '') {
            return false;
        } else {
            // deixa apenas os numeros
            cpf = cpf.replace(/[^0-9]+/g, '');
        }

        // Primeiro digito
        if (cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222' || cpf == '33333333333' ||
            cpf === '44444444444' || cpf === '55555555555' ||
            cpf === '66666666666' || cpf === '77777777777' ||
            cpf === '88888888888' || cpf === '99999999999') {
            return false;

        }
        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            resto = (soma * 10) % 11;
        }

        if ((resto === 10) || (resto === 11)) {
            resto = 0;

        }
        if (resto !== parseInt(cpf.substring(9, 10))) {
            return false;
        }

        // Segundo digito
        soma = 0;

        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(10, 11))) {
            return false;
        }

        return true;
    }

    public static mascaraCpf(cpf: string): string {
        switch (cpf.length) {
            case 3:
                cpf = `${cpf}.`;
                break;
            case 7:
                cpf = `${cpf}.`;
                break;
            case 11:
                cpf = `${cpf}-`;
                break;
        }
        return cpf;
    }


    /* Validação de telefones:
        1. Fixo.
        2. Celular.
    */

    public static validarMascaraTelefoneFixo(telefone: string): string {
        if (telefone) {
            switch (telefone.length) {
                case 1:
                    telefone = `(${telefone}`;
                    break;
                case 3:
                    telefone = `${telefone})`;
                    break;
                case 8:
                    telefone = `${telefone}-`;
            }
        }
        return telefone;
    }
    public static validarMascaraTelefoneCelular(telefone: string): string {
        if (telefone) {
            switch (telefone.length) {
                case 1:
                    telefone = `(${telefone}`;
                    break;
                case 3:
                    telefone = `${telefone})`;
                    break;
                case 9:
                    telefone = `${telefone}-`;
            }
        }
        return telefone;
    }

    public static validarCampoTelefone(telefone: string, tipoTelefone: string): string {

        if (telefone) {
            switch (tipoTelefone) {
                case 'F':
                    if (telefone.length < 13) {
                        return telefone = null;
                    }
                    break;
                case 'C':
                    if (telefone.length < 14) {
                        return telefone = null;
                    }
                    break;
            }
        }
        return telefone;
    }
}