import { Component, OnInit } from '@angular/core';
import { budgetItem } from '../shared/models/budget-item.model';
import { UpdateBudget } from '../shared/models/budget.interface';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  public budgetItems: budgetItem[]= new Array<budgetItem>();
  public totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public addItem(newItem: budgetItem): void {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;

  }

  public deleteItem(item:budgetItem): void {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  public updateItem(updateEvent: UpdateBudget): void {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    //update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

}
