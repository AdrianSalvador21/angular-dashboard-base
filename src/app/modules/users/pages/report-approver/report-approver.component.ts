import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-approver',
  templateUrl: './report-approver.component.html',
  styleUrls: ['./report-approver.component.scss']
})
export class ReportApproverComponent implements OnInit {
  public userImage = '/assets/images/dashboard/user-example2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
