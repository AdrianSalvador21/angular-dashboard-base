import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-notification-detail-table',
  templateUrl: './expense-notification-detail-table.component.html',
  styleUrls: ['./expense-notification-detail-table.component.scss']
})
export class ExpenseNotificationDetailTableComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['date', 'place', 'amount', 'actions'];
  expandedElement: PeriodicElement | null;

  columnLabels = {
    date: 'EFOS',
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
  date: any;
  actions: any;
  place: any;
  amount: any;
  description: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    actions: 1,
    date: '19/09/20',
    place: 'McDonalds',
    amount: '$120 MXN',
    description: `Sandborns`
  }, {
    actions: 2,
    date: '19/09/20',
    place: 'Taco Bell',
    amount: '$120 MXN',
    description: `Ghandi`
  },
  {
    actions: 3,
    date: '19/09/20',
    place: 'El Bajío',
    amount: '$120 MXN',
    description: `Ghandi`
  }
];
