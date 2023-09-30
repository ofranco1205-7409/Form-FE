import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePriorityComponent } from './simple-priority.component';

describe('SimplePriorityComponent', () => {
  let component: SimplePriorityComponent;
  let fixture: ComponentFixture<SimplePriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplePriorityComponent]
    });
    fixture = TestBed.createComponent(SimplePriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
