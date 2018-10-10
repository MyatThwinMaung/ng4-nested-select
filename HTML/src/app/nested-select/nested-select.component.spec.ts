import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSelectComponent } from './nested-select.component';

describe('NestedSelectComponent', () => {
  let component: NestedSelectComponent;
  let fixture: ComponentFixture<NestedSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
