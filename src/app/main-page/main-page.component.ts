import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount!;
  }

  deleteItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount!;
  }

  updateItem(updateEvent: UpdateEvent) {
    // Result is the updated budget item
    // Replace the item with the updated/submitted item from thr form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.oldItem)] =
      updateEvent.newItem;

    // Update the total budget
    this.totalBudget +=
      updateEvent.newItem.amount! - updateEvent.oldItem.amount!;
  }
}
