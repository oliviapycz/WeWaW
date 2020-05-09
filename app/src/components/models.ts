export interface Guest {
  id: number;
  name: string;
  letter: string;
  content: string;
}

export interface Food {
  id: number;
  name: string;
  content: string;
}

export interface Diner {
  id: number;
  name: string;
  date: string;
}

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}
