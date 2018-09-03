export class AutocompleteFuncoes {
    public static filtro(pesquisa: string,valores: any[]): any[] {
        pesquisa ? true : pesquisa = '';
        return this.filtrar(pesquisa.toLocaleLowerCase(), valores);
    }

    public static filtrar(pesquisa: string, valores: any[]): any[] {
        return valores.filter(valor => valor.nome.toLowerCase().includes(pesquisa));
    }
}
