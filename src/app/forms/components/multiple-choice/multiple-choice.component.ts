import { Component, inject, Input } from '@angular/core';
import { Question, QuestionType } from '../../interfaces/formulario';
import { AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'question-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css'],
})
export class MultipleChoiceComponent {
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
