export enum QuestionType {
  Simple_priority = 'SimplePriority', //Project_rate
  Multiple_project_priority = 'MultipleProjectPriority', //Project[]
  Open = 'Open', //string
  Single_choice = 'SingleChoice', //radio -String
  Multiple_choice = 'MultipleChoice', //check - string[]
}

/**
 * Form Definition
 */

export interface FormDefinition {
  id: string;
  title: string;
  description: string;
  img?: string;
  sections: Section[];
}

export interface User {
  name: string;
  organization: string;
  email: string;
}

export interface Section {
  sId: string;
  sTitle: string;
  sDescription: string;
  sQuestions: Question[];
}

export interface Question {
  qId: string;
  qType: QuestionType;
  qTitle: string;
  qOptions: Project[] | Project_rate | string[] | string;
}

export interface Project {
  pId: number;
  title: string;
  priority: number;
}

export interface Project_rate {
  impacto: number;
  factibilidad: number;
  urgencia: number;
}

/**
 * FormData
 */
export interface FormData {
  id: string;
  PollParticipants: PollParticipants;
  questions: QuestionReply[];
}

export interface PollParticipants {
  name: string;
  users: User[];
}
export interface QuestionReply {
  qID: string;
  type: QuestionType;
  reply: Project | Project_rate | string[] | string;
}
