import { Endereco } from "./endereco.model";

export class DadosPessoais {
    nome?: string;
    cpf?: string;
    email?: string;
    nomeMae?: string;
    endereco?:Endereco;
    dataNascimento?: string;
    tipoTelefone?: string;
    telefone?: string;
    constructor() {
        
    }
}