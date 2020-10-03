import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { budgetItem } from '../shared/models/budget-item.model';
import { UpdateBudget } from '../shared/models/budget.interface';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: budgetItem[];
  @Output() delete: EventEmitter<budgetItem>= new EventEmitter<budgetItem>();
  @Output() update: EventEmitter<UpdateBudget>= new EventEmitter<UpdateBudget>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onClickButtonDelete(item: budgetItem): void {
    this.delete.emit(item);
  }

  public onCardCliked(item: budgetItem): void {
    //show pop-up
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      //check if result has a value
      if(result) {
          this.update.emit({
            old: item,
            new: result
          });
      }
    })
  }
}
