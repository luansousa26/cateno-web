import { Endereco } from "./endereco.model";

export class DadosPessoais {
    nome?: string;
    cpf?: string;
    email?: string;
    nomeMae?: string;
    endereco?: Endereco;
    dataNascimento?: string;
    tipoTelefone?: string;
    telefone?: string;
    sexo?: string;
    celular?: string;
    apelido?: string;
    rg?: string;
    orgaoExpedidor?: string;
    estadorEmissor?: string;
    dataExpedicao?: string;
    estadoCivil?: string;
    nacionalidade?: string;

    constructor() {

    }
}