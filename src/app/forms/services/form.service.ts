import {
  QuestionType,
  Section,
  Question,
  Project,
} from './../interfaces/formulario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

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
      priority: 1,
      title: 'Titulo project 1',
      project_rate: { impacto: 1, factibilidad: 2, urgencia: 3 },
    };
    const project2: Project = {
      priority: 2,
      title: 'Titulo project 2',
      project_rate: { impacto: 2, factibilidad: 2, urgencia: 2 },
    };

    const q_Value_project_priority: Question = {
      qId: '3',
      qType: QuestionType.Value_project_priority,
      qTitle: 'Question 2 title',
      qOptions: [project1, project2],
    };

    const s1: Section = {
      sId: '1',
      sTitle: 'Sec1 title',
      sDescription: 'Sec1 Desc',
      sQuestions: [q_SimplePriority1, q_SimplePriority2],
    };

    const s2: Section = {
      sId: '2',
      sTitle: 'Sec2 title',
      sDescription: 'Sec2 Desc',
      sQuestions: [q_Value_project_priority],
    };

    return [s1];
    /*
    const q1<Question>={
      qID: "1",
      type: "Simple_priority",
      options: [
        { priority: 1, title: "{1} Proyecto 1" },
        { priority: 2, title: "{2} Proyecto 2" },
        { priority: 3, title: "{3} Proyecto 3" }
      ]
    };

    const s1={
      "sectionId": "1",
      "title": "Seccion1",
      "description": "Desc 1",
      "questions": [
        {
          "qID": "1",
          "type": "Simple_priority",
          "options": [
            { "priority": 1, "title": "{1} Proyecto 1" },
            { "priority": 2, "title": "{2} Proyecto 2" },
            { "priority": 3, "title": "{3} Proyecto 3" }
          ]
        },
        {
          "qID": "2",
          "type": "Value_priority",
          "options": [
            { "priority": 1, "title": "{1} Proyecto 1" },
            { "priority": 2, "title": "{2} Proyecto 2" },
            { "priority": 3, "title": "{3} Proyecto 3" }
          ]
        },
        {
          "qID": "3",
          "type": "Open",
          "options": "Respuesta simple"
        },
        {
          "qID": "4",
          "type": "Single_choice",
          "options": ["Option1", "Option2", "Option3"]
        },
        {
          "qID": "5",
          "type": "Multiple_choice",
          "options": ["Option1", "Option2", "Option3", "Option4"]
        }
      ]
    }

    const s2={
      "sectionId": "2",
      "title": "Seccion2",
      "description": "Desc 2",
      "questions": [
        {
          "qID": "1",
          "type": "Simple_priority",
          "options": [
            { "priority": 1, "title": "{1} Proyecto 1" },
            { "priority": 2, "title": "{2} Proyecto 2" },
            { "priority": 3, "title": "{3} Proyecto 3" }
          ]
        },
        {
          "qID": "2",
          "type": "Value_priority",
          "options": [
            { "priority": 1, "title": "{1} Proyecto 1" },
            { "priority": 2, "title": "{2} Proyecto 2" },
            { "priority": 3, "title": "{3} Proyecto 3" }
          ]
        },
        {
          "qID": "3",
          "type": "Open",
          "options": "Respuesta simple"
        },
        {
          "qID": "4",
          "type": "Single_choice",
          "options": ["Option1", "Option2", "Option3"]
        },
        {
          "qID": "5",
          "type": "Multiple_choice",
          "options": ["Option1", "Option2", "Option3", "Option4"]
        }
      ]
    }



    return [s1,s2];
    */
  }
}
