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
import {MatTabsModule} from '@angular/material/tabs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsersAssignmentComponent } from './components/users-assignment/users-assignment.component';
import { PolicyConfigurationComponent } from './components/policy-configuration/policy-configuration.component';
import { SubcategoriesTableComponent } from './components/subcategories-table/subcategories-table.component';
import { ExpensePoliciesComponent } from './pages/expense-policies/expense-policies.component';
import { PolicyApproverComponent } from './pages/policy-approver/policy-approver.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ReportApproverComponent } from './pages/report-approver/report-approver.component';
import { ReportTableComponent } from './components/report-table/report-table.component';
import { ExpenseDetailTableComponent } from './components/expense-detail-table/expense-detail-table.component';
import { ExpenseNotificationTableComponent } from './components/expense-notification-table/expense-notification-table.component';
import { ExpenseByCategoryTableComponent } from './components/expense-by-category-table/expense-by-category-table.component';
import { ExpenseEfosTableComponent } from './components/expense-efos-table/expense-efos-table.component';
import { ExpenseNotificationDetailTableComponent } from './components/expense-notification-detail-table/expense-notification-detail-table.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    NgbModule,
    MatTableModule,
    MaterialModule,
    CommonModule,
    MatTabsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidenavComponent,
    AddExpensePolicyComponent,
    CategoriesTableComponent,
    UsersAssignmentComponent,
    PolicyConfigurationComponent,
    SubcategoriesTableComponent,
    ExpensePoliciesComponent,
    PolicyApproverComponent,
    ReportsComponent,
    ReportApproverComponent,
    ReportTableComponent,
    ExpenseDetailTableComponent,
    ExpenseNotificationTableComponent,
    ExpenseByCategoryTableComponent,
    ExpenseEfosTableComponent,
    ExpenseNotificationDetailTableComponent
  ]
})

export class UsersModule {
}
