import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfooterComponent } from './form-footer.component';

describe('FormfooterComponent', () => {
  let component: FormfooterComponent;
  let fixture: ComponentFixture<FormfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormfooterComponent],
    });
    fixture = TestBed.createComponent(FormfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
