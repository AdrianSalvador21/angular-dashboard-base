import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {SidenavService} from "../../../../core/services/sidenav.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isMenuOpen = false;
  public isMobile: boolean;
  public isDesktop: boolean;

  constructor(public sidenav: SidenavService) {
  }

  ngOnInit() {
    this.onResize();
  }

  toggle() {
    if (!this.isMobile) {
      this.isMenuOpen = !this.isMenuOpen;
    } else {
      this.sidenav.status = !this.sidenav.status;
    }
  }

  // device size
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    const w = window.innerWidth;
    this.isMobile = (w < 769) ? true : false;
    this.isDesktop = (w > 1999) ? true : false;
    this.sidenav.update(this.isMobile, this.isDesktop);
  }

  sidebarChange(event) {
    this.toggle();
  }

}
