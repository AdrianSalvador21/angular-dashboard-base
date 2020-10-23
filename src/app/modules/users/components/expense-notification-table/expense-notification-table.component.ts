import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-expense-notification-table',
  templateUrl: './expense-notification-table.component.html',
  styleUrls: ['./expense-notification-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpenseNotificationTableComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'place', 'amount', 'actions'];
  expandedElement: PeriodicElement | null;

  columnLabels = {
    name: 'No facturable',
    actions: '',
    place: '',
    amount: '',
    description: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: any;
  actions: any;
  place: any;
  amount: any;
  description: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    actions: 1,
    name: 'RFC mal capturado',
    place: 'Sandborns',
    amount: '$120 MXN',
    description: `Sandborns`
  }, {
    actions: 2,
    name: 'Método de pago efectivo',
    place: 'Ghandi',
    amount: '$120 MXN',
    description: `Ghandi`
  }, {
    actions: 3,
    name: 'Excede gasto diario del SAT',
    place: '',
    amount: '',
    description: ``
  }
];
