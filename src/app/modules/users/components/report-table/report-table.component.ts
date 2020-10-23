import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
  selectedTab = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedTab(event): void {
    console.log(event);
    this.selectedTab = event.index;
  }

}
