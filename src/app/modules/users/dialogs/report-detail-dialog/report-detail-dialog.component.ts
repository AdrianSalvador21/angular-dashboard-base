import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-report-detail-dialog',
  templateUrl: './report-detail-dialog.component.html',
  styleUrls: ['./report-detail-dialog.component.scss']
})
export class ReportDetailDialogComponent implements OnInit {
  public reportImage = '/assets/images/dashboard/ticket-example.png';

  constructor(public dialogRef: MatDialogRef<ReportDetailDialogComponent>, public router: Router) { }

  public companyText = 'Empresa';

  ngOnInit(): void {
    if (this.router.url.match('liquidez')) {
      this.companyText = 'Independiente / Honorarios PFAE';
    }
  }

}
