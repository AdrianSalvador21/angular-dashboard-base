import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  category: any;
  date: string;
  description: string;
  amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '19/09/20', category: 'Alimentos', description: 'McDonalds', amount: '$120 MXN'},
  {date: '19/09/20', category: 'Hospedaje', description: 'Hotel Camino Real', amount: '$1500 MXN'},
  {date: '19/09/20', category: 'Transporte', description: 'A world trade center', amount: '$240 MXN'},
  {date: '19/09/20', category: 'Gastos medicos', description: 'Farmacias Simi', amount: '$900 MxN'}
];

@Component({
  selector: 'app-expense-detail-table',
  templateUrl: './expense-detail-table.component.html',
  styleUrls: ['./expense-detail-table.component.scss']
})
export class ExpenseDetailTableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'category', 'description', 'amount', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
