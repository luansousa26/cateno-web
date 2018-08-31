import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

  data: any;
  totalPacientes = 90;
  opcoesGrafico: any[] = [];
  tipoGrafico = 'doughnut';
  controlaGrafico = true;
  constructor() {
   }

  ngOnInit() {
    this.getTotalPacientes();
    this.opcoesGrafico = [
      { label: 'Linhas', value:'line'},
      { label: 'Barras', value:'bar'},
      { label: 'Pizza', value:'pie'},
      { label: 'Área Polar', value:'polarArea'}
    ];
  }

  getTotalPacientes() {
   
      this.totalPacientes = 100;
      this.inicializaGrafico();
  }
  inicializaGrafico() {
    this.data = {
      labels: ['Pacientes Cadastrados','B','C'],
      datasets: [
          {
              label: 'Gráfico',
              data: [this.totalPacientes, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  }
  alterarGrafico() {
    this.controlaGrafico = false;
    setTimeout(() =>{
      this.controlaGrafico = true;
    }, 200);
  }
}
