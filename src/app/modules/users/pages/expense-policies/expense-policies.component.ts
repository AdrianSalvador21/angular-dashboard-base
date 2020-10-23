import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-policies',
  templateUrl: './expense-policies.component.html',
  styleUrls: ['./expense-policies.component.scss']
})
export class ExpensePoliciesComponent implements OnInit {
  public userImage = '/assets/images/dashboard/user-example2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
