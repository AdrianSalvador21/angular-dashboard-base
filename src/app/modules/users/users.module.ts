import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersRoutingModule} from './users-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DashboardSidenavComponent } from './components/dashboard-sidenav/dashboard-sidenav.component';
import {MaterialModule} from "../shared/modules/material/material.module";
import {CommonModule} from "@angular/common";
import { AddExpensePolicyComponent } from './pages/add-expense-policy/add-expense-policy.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    NgbModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardSidenavComponent, AddExpensePolicyComponent]
})

export class UsersModule {
}
