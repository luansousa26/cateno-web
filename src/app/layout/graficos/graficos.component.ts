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
      this.totalPacientes = 225;
      this.inicializaGrafico();
  }
  inicializaGrafico() {
    this.data = {
      labels: ['Pacientes Cadastrados','B'],
      datasets: [
          {
              label: 'Gráfico',
              data: [this.totalPacientes,500],
              backgroundColor: [
                  '#B2D135',
                  '#08A9B4'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ]
          },
          {
            label: 'TESTE',
            data: [300,330],
            backgroundColor: [
                '#B2D135',
                '#08A9B4'
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
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
