import {AtLeastOne} from './helpers';

export type Todo = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isImportant: boolean;
};

export type UpdatedTodo = {_id: string} & AtLeastOne<Todo>;

export type NewTodo = {
  title: string;
} & Partial<Omit<Todo, '_id' | 'isCompleted'>>;
