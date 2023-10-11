import { ReactNode } from 'react';

interface IFieldsFeedback {
  title: string;
  description?: string;
  score?: boolean;
}

interface IDataFeedback {
  topic: string;
  questions: IFieldsFeedback[];
}

interface IPropsFeedBackHandler {
  children: ReactNode;
}

interface IAnswer {
  title: string;
  answer: string;
  score: number;
}

type answers = {
  [key: string]: IAnswer;
};

interface InitialStateFeedback {
  value?: IDataFeedback;
  loading: boolean;
  error: string;
  show: boolean;
  answers: answers;
}

export type {
  IPropsFeedBackHandler,
  IDataFeedback,
  InitialStateFeedback,
  IAnswer,
  IFieldsFeedback,
};
