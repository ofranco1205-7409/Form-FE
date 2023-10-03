import { Component, OnInit, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {
  FormDefinition,
  Project,
  Project_rate,
  QuestionType,
  Section,
} from '../../interfaces/formulario';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css'],
})
export class FormSectionComponent implements OnInit {
  private fb = inject(FormBuilder);
  private formService = inject(FormService);

  formulario: FormGroup = this.fb.group({});
  formDefinition: FormDefinition = {
    id: 'F1',
    title: 'Formulario sin inicializar',
    description: 'Por favor inicialice con un formulario valido',
    sections: [],
  };
  section: Section = {
    sId: '',
    sTitle: 'No inicializado',
    sDescription: 'No inicializado',
    sQuestions: [],
  };

  get Simple_priority() {
    return QuestionType.Simple_priority;
  }

  get Multiple_project_priority() {
    return QuestionType.Multiple_project_priority;
  }

  get Open() {
    return QuestionType.Open;
  }

  get Single_choice() {
    return QuestionType.Single_choice;
  }

  get Multiple_choice() {
    return QuestionType.Multiple_choice;
  }

  constructor() {}

  get questions() {
    return this.formulario.get('questions') as FormArray;
  }

  eliminarGrupo(index: number) {
    this.questions.removeAt(index);
  }

  submitForm(n: number) {
    //const { impacto, factibilidad, urgencia } = this.myForm.value;

    console.log('Submit:', this.formulario.value);
    this.section = this.formService.getSection(n);
  }

  ngOnInit() {
    this.formDefinition = this.formService.formDefinition;
    this.formulario = this.formService.formulario;

    this.section = this.formService.getSection(0);
  }
}
