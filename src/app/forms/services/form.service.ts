import {
  QuestionType,
  Section,
  Question,
  Project,
  FormDefinition,
  Project_rate,
} from './../interfaces/formulario';
import { Injectable, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private fb = inject(FormBuilder);

  private _formulario: FormGroup = this.fb.group({});
  private _formDefinition: FormDefinition = {
    id: 'F1',
    title: 'Formulario sin inicializar',
    description: 'Por favor inicialice con un formulario valido',
    sections: [],
  };
  private _sIndex: number = 0;

  constructor() {
    //this._formDefinition = this.getFormDefinition();
    //this._formulario = this.createForm();
  }

  getSection(n: number): Section {
    this._sIndex = this._sIndex + n;

    if (this._sIndex <= 0) this._sIndex = 0;
    if (this._sIndex >= this.formDefinition.sections.length)
      this._sIndex = this.formDefinition.sections.length - 1;

    return this.formDefinition.sections[this._sIndex];
  }

  createForm(formDefinition: FormDefinition): FormGroup {
    const formGroup: { [key: string]: any } = {};

    formDefinition.sections.forEach((section) => {
      section.sQuestions.forEach((question) => {
        if (question.qType === QuestionType.Simple_priority) {
          // Crea un FormControl para preguntas de tipo Simple_priority
          let pRate = question.qOptions as Project_rate;
          formGroup[question.qId] = this.fb.group({
            sId: [section.sId, []],
            qId: [question.qId, []],
            qTitle: [question.qTitle, []],
            qType: [question.qType, []],
            impacto: [pRate.impacto.toString(), [Validators.required]],
            factibilidad: [
              pRate.factibilidad.toString(),
              [Validators.required],
            ],
            urgencia: [pRate.urgencia.toString(), [Validators.required]],
          });
        } else if (question.qType === QuestionType.Multiple_project_priority) {
          // Crea un FormControl para preguntas de tipo Value_priority
          formGroup[question.qId] = this.fb.group({
            sId: [section.sId, []],
            qId: [question.qId, []],
            qTitle: [question.qTitle, []],
            qType: [question.qType, []],
            projects: this.fb.array([]), // FormArray vacío para projects
          });

          let projectsFormArray = formGroup[question.qId].get(
            'projects'
          ) as FormArray;
          //let projectsFormArray = this.getProjects(formGroup[question.qId]);

          let projects = question.qOptions as Project[];
          projects.forEach((project) => {
            projectsFormArray.push(this.newProject(project));
          });
        } else if (question.qType === QuestionType.Open) {
          let reply = question.qOptions as string;

          // Crea un FormControl para preguntas de tipo Open
          //formGroup[question.qId] = this.fb.control(reply);
          formGroup[question.qId] = this.fb.group({
            sId: [section.sId, []],
            qId: [question.qId, []],
            qTitle: [question.qTitle, []],
            qType: [question.qType, []],
            reply: [reply, []], // FormArray vacío para projects
          });
        } else if (question.qType === QuestionType.Single_choice) {
          // Crea un FormControl para preguntas de tipo Single_choice
          //formGroup[question.qId] = this.fb.control('');
          let qOptions = question.qOptions as string[];
          formGroup[question.qId] = this.fb.group({
            sId: [section.sId, []],
            qId: [question.qId, []],
            qTitle: [question.qTitle, []],
            qType: [question.qType, []],
            qOptions: this.fb.array([]), // FormArray vacío para options
          });

          let optionsFormArray = formGroup[question.qId].get(
            'qOptions'
          ) as FormArray;
          qOptions.forEach((option) => {
            optionsFormArray.push(this.fb.control([option, []]));
          });
        } else if (question.qType === QuestionType.Multiple_choice) {
          // Crea un FormArray para preguntas de tipo Multiple_choice
          //formGroup[question.qId] = this.fb.array([]);
          let qOptions = question.qOptions as string[];
          formGroup[question.qId] = this.fb.group({
            sId: [section.sId, []],
            qId: [question.qId, []],
            qTitle: [question.qTitle, []],
            qType: [question.qType, []],
            qOptions: this.fb.array([]), // FormArray vacío para options
          });

          let optionsFormArray = formGroup[question.qId].get(
            'qOptions'
          ) as FormArray;
          qOptions.forEach((option) => {
            optionsFormArray.push(this.fb.control([option, []]));
          });
        }
      });
    });

    this._formulario = this.fb.group(formGroup);
    return this._formulario;
  }

  get formulario() {
    return this._formulario;
  }

  newProject(project: Project) {
    const projectFormGroup = this.fb.group({
      pId: [project.pId],
      title: [project.title],
      priority: [project.priority],
    });

    return projectFormGroup;
  }

  //-------------------------
  /*
  getformGroup(section: Section): FormGroup {
    let formGroup: FormGroup = this.fb.group({
      questions: this.fb.array([]),
    });

    let qFormArray = formGroup.get('questions') as FormArray;

    const { sId, sTitle, sDescription, sQuestions } = section;
    console.log(sId, sTitle, sDescription);

    sQuestions.forEach((question) => {
      console.log(question);
      const { qId, qType, qTitle, qOptions } = question;
      qFormArray.push(this.agregarGrupo(sId, question));
    });

    return formGroup;
  }

  agregarGrupo(
    sId: string,
    question: Question
    //qOptions: Project[] | Project_rate | string[] | string
  ) {
    let { qId, qTitle, qType, qOptions } = question;
    let nuevoGrupo;
    switch (qType) {
      case QuestionType.Simple_priority:
        qOptions = qOptions as Project_rate;
        nuevoGrupo = this.fb.group({
          sId: [sId, []],
          qId: [qId, []],
          qTitle: [qTitle, []],
          qType: qType,
          impacto: [qOptions.impacto.toString(), [Validators.required]],
          factibilidad: [
            qOptions.factibilidad.toString(),
            [Validators.required],
          ],
          urgencia: [qOptions.urgencia.toString(), [Validators.required]],
          //comentario: ['Coment initial 2', [Validators.required]],
          //observaciones: ['', []],
        });
        break;

      case QuestionType.Multiple_project_priority:
        let projects = this.fb.array([]);
        qOptions = qOptions as Project[];
        qOptions.forEach((project) => {
          const newProjectGroup = this.fb.group({
            pId: [project.pId, []],
            //pRate: [project.project_rate, [Validators.required]],
            title: [project.title, [Validators.required]],
          });

          //projects.push(newProjectGroup);
        });

        nuevoGrupo = this.fb.group({
          sId: [sId, []],
          qId: [qId, []],
          qTitle: [qTitle, []],
          qType: qType,
          projects: projects,

          //comentario: ['Coment initial 2', [Validators.required]],
          //observaciones: ['', []],
        });
        break;

      default:
        console.log(QuestionType + ' no procesado');
        break;
    }

    return nuevoGrupo;
  }
*/
  get formDefinition(): FormDefinition {
    return this._formDefinition;
  }

  /**
   *
   * @returns Debe leer un form definicio de la DB
   */
  setFormDefinition(fId: string): FormDefinition {
    const formDefinition = {
      id: fId,
      title: `${fId} Formulario`,
      description: 'Desc del formulario...',
      sections: this.getSections(),
    };
    this._formDefinition = formDefinition;
    this._formulario = this.createForm(this._formDefinition);

    return this._formDefinition;
  }

  getSections(): Section[] {
    const q_SimplePriority1: Question = {
      qId: '1',
      qType: QuestionType.Simple_priority,
      qTitle: 'Reforzamiento operacional de la Troncal del Pacífico',
      qOptions: { impacto: 1, factibilidad: 2, urgencia: 3 },
    };
    const q_SimplePriority2: Question = {
      qId: '2',
      qType: QuestionType.Simple_priority,
      qTitle: 'Question 2 title',
      qOptions: { impacto: 3, factibilidad: 2, urgencia: 5 },
    };

    const project1: Project = {
      pId: 1,
      title: 'Titulo project 1',
      priority: 1,
    };
    const project2: Project = {
      pId: 2,
      title: 'Titulo project 2',
      priority: 2,
    };

    const q_Value_project_priority: Question = {
      qId: '3',
      qType: QuestionType.Multiple_project_priority,
      qTitle: 'Question 3 title',
      qOptions: [project1, project2],
    };

    const q_Open: Question = {
      qId: '4',
      qType: QuestionType.Open,
      qTitle: 'Question 4 title',
      qOptions: 'Open reply',
    };
    const q_Single_choise: Question = {
      qId: '5',
      qType: QuestionType.Single_choice,
      qTitle: 'Question 5 title',
      qOptions: ['sOption1', 'sOption2', 'sOption3'],
    };
    const q_Multiple_choise: Question = {
      qId: '6',
      qType: QuestionType.Multiple_choice,
      qTitle: 'Question 6 title',
      qOptions: ['mOption1', 'mOption2', 'mOption3'],
    };

    const s1: Section = {
      sId: '1',
      sTitle: 'Sec1 title',
      sDescription: 'Sec1 Desc',
      sQuestions: [
        //q_SimplePriority1,
        //q_SimplePriority2,
        q_Value_project_priority,
        q_Open,
        q_Single_choise,
        q_Multiple_choise,
      ],
    };

    const s2: Section = {
      sId: '2',
      sTitle: 'Sec2 title',
      sDescription: 'Sec2 Desc',
      sQuestions: [q_Open],
    };

    const s3: Section = {
      sId: '3',
      sTitle: 'Sec3 title',
      sDescription: 'Sec2 Desc',
      sQuestions: [q_SimplePriority1],
    };

    return [s1, s2, s3];
  }
}
