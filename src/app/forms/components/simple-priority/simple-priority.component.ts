import { Component, Input, inject } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Question, QuestionType } from '../../interfaces/formulario';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'question-simple-priority',
  templateUrl: './simple-priority.component.html',
  styleUrls: ['./simple-priority.component.css'],
})
export class SimplePriorityComponent {
  private fb = inject(FormBuilder);
  private formService = inject(FormService);

  @Input() _formGroup: AbstractControl = this.fb.group({});
  @Input() question: Question = {
    qId: '',
    qType: QuestionType.Simple_priority,
    qTitle: 'No inicializada',
    qOptions: { impacto: 5, factibilidad: 5, urgencia: 5 },
  };

  constructor() {}

  get formGroup() {
    this._formGroup = this.formService.formulario.get(
      this.question.qId
    ) as AbstractControl;

    return this._formGroup as FormGroup;
  }
}
