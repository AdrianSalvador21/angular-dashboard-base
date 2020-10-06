import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AddExpensePolicyComponent} from './pages/add-expense-policy/add-expense-policy.component';

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
