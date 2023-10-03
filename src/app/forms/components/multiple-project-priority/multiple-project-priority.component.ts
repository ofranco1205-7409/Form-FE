import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  AbstractControl,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { FormService } from '../../services/form.service';
import { Project, Question, QuestionType } from '../../interfaces/formulario';

@Component({
  selector: 'question-multiple-project-priority',
  templateUrl: './multiple-project-priority.component.html',
  styleUrls: ['./multiple-project-priority.component.css'],
})
export class MultipleProjectPriorityComponent {
  private fb = inject(FormBuilder);
  private formService = inject(FormService);

  @Input() _formGroup: AbstractControl = this.fb.group({});
  @Input() question: Question = {
    qId: '',
    qType: QuestionType.Open,
    qTitle: 'No inicializada',
    qOptions: [
      {
        pId: 0,
        title: 'No inicializada',
        priority: 0,
      },
    ],
  };

  constructor() {}

  get qOptions() {
    return this.question.qOptions as Project[];
  }

  get formGroup() {
    this._formGroup = this.formService.formulario.get(
      this.question.qId
    ) as AbstractControl;

    return this._formGroup as FormGroup;
  }

  get projects() {
    return this.formGroup.get('projects') as FormArray;
  }

  projectGroup(i: number) {
    const fg: FormGroup = this.projects.controls[i] as FormGroup;

    return fg;
  }
}
