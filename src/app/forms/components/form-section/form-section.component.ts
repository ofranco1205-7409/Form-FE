import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {
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
export class FormSectionComponent {
  private fb = inject(FormBuilder);
  private formService = inject(FormService);

  /*
  public myForm: FormGroup = this.fb.group({
    impacto: ['2', [Validators.required]],
    factibilidad: ['3', [Validators.required]],
    urgencia: ['2', [Validators.required]],
    comentario: ['ccc', [Validators.required]],
    observaciones: ['oo', []],
  });*/

  /*
  public formulario: FormGroup = this.fb.group({
    questions: this.fb.array([]),
  });
*/
  formulario: FormGroup;
  sections: Section[] = this.formService.getSections();
  section: Section = this.sections[0];
  sId = this.section.sId;
  sTitle = this.section.sTitle;
  sDescription = this.section.sDescription;
  sQuestions = this.section.sQuestions;

  constructor() {
    //this.sections = this.formService.getSections();
    this.formulario = this.fb.group({
      questions: this.fb.array([]),
    });
    this.populateFormulario();
  }

  populateFormulario() {
    console.log(this.sId, this.sTitle, this.sDescription);
    this.sQuestions.forEach((question) => {
      const { qId, qType, qTitle } = question;
      let qOptions: Project[] | Project_rate | string[] | string;
      switch (qType) {
        case QuestionType.Simple_priority:
          qOptions = question.qOptions as Project_rate;
          this.agregarGrupo(this.sId, qId, qTitle, qType, qOptions);
          break;

        default:
        case QuestionType.Value_project_priority:
          qOptions = question.qOptions as Project[];
          this.agregarGrupo2(this.sId, qId, qTitle, qType, qOptions);
          break;
      }
    });

    //this.agregarGrupo({ impacto: 1, factibilidad: 2, urgencia: 3 });
    //this.agregarGrupo({ impacto: 2, factibilidad: 3, urgencia: 4 });
  }

  get questions() {
    return this.formulario.get('questions') as FormArray;
  }

  agregarGrupo(
    sId: string,
    qId: string,
    qTitle: string,
    qType: QuestionType,
    pr: Project_rate
  ) {
    const nuevoGrupo = this.fb.group({
      sId: [sId, []],
      qId: [qId, []],
      qTitle: [qTitle, []],
      qType: qType,
      impacto: [pr.impacto.toString(), [Validators.required]],
      factibilidad: [pr.factibilidad.toString(), [Validators.required]],
      urgencia: [pr.urgencia.toString(), [Validators.required]],
      //comentario: ['Coment initial 2', [Validators.required]],
      //observaciones: ['', []],
    });
    this.questions.push(nuevoGrupo);
  }

  agregarGrupo2(
    sId: string,
    qId: string,
    qTitle: string,
    qType: QuestionType,
    projects: Project[]
  ) {
    const nuevoGrupo = this.fb.group({
      sId: [sId, []],
      qId: [qId, []],
      qTitle: [qTitle, []],
      projects: projects,
    });
    this.questions.push(nuevoGrupo);
  }

  eliminarGrupo(index: number) {
    this.questions.removeAt(index);
  }
  /*
  {
      opcion1: ['', Validators.required],
      opcion2: ['', Validators.required],
      opcion3: ['', Validators.required],
      comentario: [''],
    }
      {
      impacto: ['1', [Validators.required]],
      factibilidad: ['2', [Validators.required]],
      urgencia: ['3', [Validators.required]],
      comentario: ['Coment initial 2', [Validators.required]],
      observaciones: ['', []],
    }*/

  submitForm() {
    //const { impacto, factibilidad, urgencia } = this.myForm.value;

    console.log(this.formulario.value);
  }
}
