import { Component, inject, Input } from '@angular/core';
import { Question, QuestionType } from '../../interfaces/formulario';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'question-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
})
export class OpenComponent {
  private fb = inject(FormBuilder);
  private formService = inject(FormService);

  _formGroup: AbstractControl = this.fb.group({});
  @Input() question: Question = {
    qId: '',
    qType: QuestionType.Open,
    qTitle: 'No inicializada',
    qOptions: 'Reply vacio',
  };

  constructor() {}

  get formGroup() {
    this._formGroup = this.formService.formulario.get(
      this.question.qId
    ) as AbstractControl;
    console.log('this._formGroup as FormGroup:' + this._formGroup);
    return this._formGroup as FormGroup;
  }
}
