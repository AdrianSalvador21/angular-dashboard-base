import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-subcategories-table',
  templateUrl: './subcategories-table.component.html',
  styleUrls: ['./subcategories-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SubcategoriesTableComponent implements OnInit {
  @Input() set elements(elements: any) {
    ELEMENT_DATA = elements;
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }
  columnsToDisplay = ['select', 'limit', 'client_percentage'];
  expandedElement: any | null;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
  columnLabels = {
    limit: 'Límite de gasto',
    client_percentage: '% que paga el cliente'
  };

  checkLabels = {
  }

  constructor() { }

  ngOnInit(): void {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): any {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): any {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  checkRow(row): string {
    return row.name;
  }

  checkElement(element): string {
    console.log(element);
    return '';
  }
}

let ELEMENT_DATA: any[] = [
  {
    position: 1,
    limit: 'Hydrogen',
    client_percentage: '25%',
    subCategories: [],
    name: 'Alimentos'
  }, {
    position: 2,
    limit: 'Helium',
    client_percentage: '40%',
    subCategories: [],
    name: 'Hospedaje'
  }
];

