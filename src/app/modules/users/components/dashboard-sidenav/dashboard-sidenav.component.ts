import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent implements OnInit {

  @Output() toggler = new EventEmitter<any>();
  public menu: any[] = [];

  constructor(public router: Router) {

  }

  ngOnInit() {
  }

  toggle() {
    this.toggler.emit();
  }

}
