import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleProjectPriorityComponent } from './multiple-project-priority.component';

describe('MultipleProjectPriorityComponent', () => {
  let component: MultipleProjectPriorityComponent;
  let fixture: ComponentFixture<MultipleProjectPriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleProjectPriorityComponent]
    });
    fixture = TestBed.createComponent(MultipleProjectPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
