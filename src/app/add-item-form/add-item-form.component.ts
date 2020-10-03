import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { budgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  public isNewItem: boolean;

  @Input() item: budgetItem;
  @Output() formSubmit: EventEmitter<budgetItem> = new EventEmitter<budgetItem>();

  constructor() { }

  ngOnInit(): void {
     //if item has a value
    if(this.item) {
      //this meas that existing item object was passed into this component
      //therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new budgetItem('', null);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
