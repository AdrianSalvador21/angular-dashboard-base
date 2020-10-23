import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public userImage = '/assets/images/dashboard/user-example2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
