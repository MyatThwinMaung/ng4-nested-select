import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public title = 'ng4-nested-select';
  public selection_block = 'close-select-box';
  public selectedFoodId = null;
  public selectedFoodList = [];
  public foodHierarchyData = [];
  public foodList = [
    { id: 1000, name: 'meat' },
    { id: 1100, name: 'chicken' },
    { id: 1200, name: 'beef' },
    { id: 1300, name: 'fish' },
    { id: 1310, name: 'salmon' },
    { id: 1320, name: 'cod' },
    { id: 1330, name: 'tuna' },
    { id: 1340, name: 'shark' },
    { id: 2000, name: 'fruit' },
    { id: 2100, name: 'Orange' },
    { id: 2200, name: 'Apple' },
    { id: 3000, name: 'water' },
    { id: 4000, name: 'vegetable' },
    { id: 4100, name: 'cabbage' },
  ];
  public foodNestedData = [
    {
      id: 1000,
      name: 'meat',
      child_food: [
        {
          id: 1100,
          name: 'chicken',
          child_food: []
        },
        {
          id: 1200,
          name: 'beef',
          child_food: []
        },
        {
          id: 1300,
          name: 'fish',
          child_food: [
            {
              id: 1310,
              name: 'salmon',
              child_food: []
            },
            {
              id: 1320,
              name: 'cod',
              child_food: []
            },
            {
              id: 1330,
              name: 'tuna',
              child_food: []
            },
            {
              id: 1340,
              name: 'shark',
              child_food: []
            }
          ]
        }
      ]
    },
    {
      id: 2000,
      name: 'fruit',
      child_food: [
        {
          id: 2100,
          name: 'Orange',
          child_food: []
        },
        {
          id: 2200,
          name: 'Apple',
          child_food: []
        },
      ]
    },
    {
      id: 3000,
      name: 'water',
      child_food: []
    },
    {
      id: 4000,
      name: 'vegetable',
      child_food: [
        {
          id: 4100,
          name: 'cabbage',
          child_food: []
        }
      ]
    },
  ];

  @ViewChild('selectionData') selectionData: any;

  ngOnInit() {
    this.setFoodStructured(this.foodNestedData, 0);
  }

  public setFoodStructured(foodList, order) {
    for (let i = 0; i < foodList.length; i++) {
      this.foodHierarchyData.push({
        id: foodList[i].id,
        name: foodList[i].name,
        order: order,
        child_data_display: false,
        child_foodIds: this.getChildData(foodList[i].child_food),
        margin_left: (order * 27) + 'px',
        display: (order === 0) ? true : false
      });
      if (foodList[i].child_food.length > 0) {
        this.setFoodStructured(foodList[i].child_food, order + 1);
      }
    }
  }

  public getChildData(childFoodList) {
    let childFoodIds = [];
    if (childFoodList.length > 0) {
      childFoodList.forEach(childFood => {
        childFoodIds.push(childFood.id);
      });
    }
    return childFoodIds;
  }

  public openSelectBox(): void {
    if (this.foodNestedData.length > 0) {
      if (this.selection_block === 'close-select-box') {
        this.selection_block = 'open-select-box';
      } else {
        this.selection_block = 'close-select-box';
      }
    }
  }

  public closeSelectBox(event) {
    if (!this.selectionData.nativeElement.contains(event.target)) {
      this.selection_block = 'close-select-box';
    }
  }

  public selectedFood(foodId) {
    this.selection_block = 'close-select-box';
    this.selectedFoodId = foodId;
  }

  public addedFood(selectedFood) {
    this.selectedFoodList.push(selectedFood);
    this.selectedFoodId = null;
  }
}

