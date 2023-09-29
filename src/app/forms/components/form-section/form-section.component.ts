import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css'],
})
export class FormSectionComponent {
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    impacto: ['2', [Validators.required]],
    factibilidad: ['3', [Validators.required]],
    urgencia: ['2', [Validators.required]],
    comentario: ['', [Validators.required]],
    observaciones: ['', []],
  });

  saveSection() {
    //const { impacto, factibilidad, urgencia } = this.myForm.value;

    console.log(this.myForm.value);
  }
}
