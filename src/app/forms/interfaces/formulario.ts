export enum QuestionType {
  Simple_priority = 'Simple priority',
  Value_priority = 'Value priority',
  Open = 'Open',
  Single_choice = 'Single Choice',
  Multiple_choice = 'Multiple Choice',
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
  sectionId: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  qID: string;
  type: QuestionType;
  title: string;
  options?: Projects | string[] | string;
}

export interface Projects {
  priority: number;
  title: string;
  values?: number[];
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
  reply: Projects | string[] | string;
}
