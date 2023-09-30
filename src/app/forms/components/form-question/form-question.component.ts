//import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { QuestionType } from '../../interfaces/formulario';

@Component({
  selector: 'form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css'],
})
export class FormQuestionComponent {
  //@Input() myForm!: FormGroup;
  //@Input() control?: FormControl;

  constructor(private fb: FormBuilder) {}

  //@Input() title: string = 'Empty';
  @Input() _group!: AbstractControl; // = this.fb.group({});
  @Input() index: number = 0;
  @Output() eliminar = new EventEmitter<number>();

  eliminarGrupo() {
    this.eliminar.emit(this.index);
  }

  get group() {
    return this._group as FormGroup;
  }

  get qTitle(): string {
    const title: string = `${this.group.value.sId}.${this.group.value.qId}.- ${this.group.value.qTitle}`;

    return title;
  }

  get isSimplePriority(): boolean {
    const type: QuestionType = this.group.value.qType;
    //console.log('isSimplePriority', type == QuestionType.Simple_priority);

    return type == QuestionType.Simple_priority;
  }

  get isValueProjectPriority(): boolean {
    const type: QuestionType = this.group.value.qType;
    //console.log('isSimplePriority', type == QuestionType.Simple_priority);

    return type == QuestionType.Value_project_priority;
  }
}
