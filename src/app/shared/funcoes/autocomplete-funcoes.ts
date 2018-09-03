export class AutocompleteFuncoes {
    public static filtro(pesquisa: string,valores: any[]): any[] {
        let valoresFiltrados = [];
        /* Para quando o usuário clicar aparecer todos, se o valor estiver vázio ele adiciona string vazia
        e igua-la o filtrado ao total de estados
        */
        pesquisa ? true : pesquisa = '';
        valoresFiltrados = JSON.parse(JSON.stringify(valores));

        valoresFiltrados = this.filtrar(pesquisa, valores);
        
        return valoresFiltrados;
    }

    public static filtrar(pesquisa: string, valores: any[]): any[] {
        return valores.filter(valor => valor.nome.toLowerCase().includes(pesquisa));
    }
}
