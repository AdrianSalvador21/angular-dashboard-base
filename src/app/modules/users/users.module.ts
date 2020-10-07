import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersRoutingModule} from './users-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

import { DashboardSidenavComponent } from './components/dashboard-sidenav/dashboard-sidenav.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {CommonModule} from '@angular/common';
import { AddExpensePolicyComponent } from './pages/add-expense-policy/add-expense-policy.component';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsersAssignmentComponent } from './components/users-assignment/users-assignment.component';
import { PolicyConfigurationComponent } from './components/policy-configuration/policy-configuration.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    NgbModule,
    MatTableModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidenavComponent,
    AddExpensePolicyComponent,
    CategoriesTableComponent,
    UsersAssignmentComponent,
    PolicyConfigurationComponent
  ]
})

export class UsersModule {
}
