import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DadosPessoais } from '../../../shared/models/dados-pessoais.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dialog-cartao',
    templateUrl: './dialog-cartao.component.html',
    styleUrls: ['./dialogo-cartao.component.scss'],
})
export class DialogoCartaoComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogoCartaoComponent>,
        @Inject(MAT_DIALOG_DATA) public dadosPessoais: DadosPessoais,
        private router: Router) { }
    ngOnInit() {
    }

    public fecharDialog(): void {
        this.router.navigate(['/home']);
        this.dialogRef.close();
    }
}
