import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense-policy',
  templateUrl: './add-expense-policy.component.html',
  styleUrls: ['./add-expense-policy.component.scss']
})
export class AddExpensePolicyComponent implements OnInit {
  public selectedStepper = 0;

  constructor() { }

  ngOnInit(): void {
  }

  stepperChange(event): void {
    this.selectedStepper = event.selectedIndex;
  }

}
