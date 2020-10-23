import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AddExpensePolicyComponent} from './pages/add-expense-policy/add-expense-policy.component';
import {ExpensePoliciesComponent} from './pages/expense-policies/expense-policies.component';
import {PolicyApproverComponent} from './pages/policy-approver/policy-approver.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {ReportApproverComponent} from './pages/report-approver/report-approver.component';

const usersRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'add-expense',
        component: AddExpensePolicyComponent
      },
      {
        path: 'expense-policies',
        component: ExpensePoliciesComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'policy-approver',
        component: PolicyApproverComponent
      },
      {
        path: 'report-approver',
        component: ReportApproverComponent
      },
      {
        path: '**',
        redirectTo: 'add-expense',
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule {
}
