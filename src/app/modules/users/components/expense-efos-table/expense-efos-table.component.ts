import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-efos-table',
  templateUrl: './expense-efos-table.component.html',
  styleUrls: ['./expense-efos-table.component.scss']
})
export class ExpenseEfosTableComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['date', 'efo', 'amount', 'actions'];
  expandedElement: PeriodicElement | null;

  columnLabels = {
    date: 'EFOS',
    actions: '',
    efo: '',
    amount: '',
    description: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}


export interface PeriodicElement {
  date: any;
  actions: any;
  efo: any;
  amount: any;
  description: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    actions: 1,
    date: '19/09/20',
    efo: 'Empra Falsa 123',
    amount: '$120 MXN',
    description: `Sandborns`
  }, {
    actions: 2,
    date: '19/09/20',
    efo: 'Empresa Falta 234',
    amount: '$120 MXN',
    description: `Ghandi`
  },
  {
    actions: 3,
    date: '19/09/20',
    efo: 'Odebrecht',
    amount: '$120 MXN',
    description: `Ghandi`
  }
];
