export interface NoteInterface {
  id: number;
  content: string;
  level: number;
}
export interface TodoFormInterface {
  showForm: boolean;
}

export interface TodoItemInterface {
  todo: NoteInterface;
  index: number;
}
export interface TodoEditInterface {
  todo: NoteInterface;
  toggle: () => void;
}
