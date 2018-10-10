import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nested-select',
  templateUrl: './nested-select.component.html',
  styleUrls: ['./nested-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NestedSelectComponent implements OnInit {

  @Input() selectedFoodId: any;
  @Input() foodList: any;

  @Output() selectedFood = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public select(food: any) {
    this.selectedFood.emit(food.id);
  }

  public isDisplay(value) {
    if (value) {
      return '';
    }
    return 'none';
  }

  public toggleData(food, child_foodIds, key) {
    if (key === 'parent') {
      food.child_data_display = !food.child_data_display;
    }
    for (let i = 0; i < child_foodIds.length; i++) {
      for (let j = 0; j < this.foodList.length; j++) {
        if (Number(child_foodIds[i]) === Number(this.foodList[j].id)) {
          this.foodList[j].display = food.child_data_display;
          if (this.foodList[j].child_foodIds.length > 0 && (!food.child_data_display || this.foodList[j].child_data_display)) {
            this.toggleData(food, this.foodList[j].child_foodIds, 'child');
          }
        }
      }
    }
  }

  public checkSelectedId(food) {
    let is_selected = '';
    if (Number(this.selectedFoodId) === Number(food.id)) {
      is_selected = 'selected-food';
    }
    return is_selected;
  }

}

