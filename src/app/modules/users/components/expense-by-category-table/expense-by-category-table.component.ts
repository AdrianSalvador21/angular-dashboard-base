import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  category: any;
  date: string;
  billable: string;
  excess: string;
  notBillable: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: 'Alimentos', category: '$2000', billable: '$1500', excess: '$120', notBillable: '$500'},
  {date: 'Transporte', category: '$4000', billable: '$2000', excess: '$1500', notBillable: '$500'},
  {date: 'Hospedaje', category: '$5000', billable: '$4000', excess: '$240', notBillable: '$500'}
];


@Component({
  selector: 'app-expense-by-category-table',
  templateUrl: './expense-by-category-table.component.html',
  styleUrls: ['./expense-by-category-table.component.scss']
})
export class ExpenseByCategoryTableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'category', 'billable', 'excess', 'notBillable'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
