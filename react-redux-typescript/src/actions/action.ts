import {
  ADD_NEW_NOTE,
  EDIT_NOTE,
  REMOVE_NOTE,
  SEARCH_NOTE,
  SORT_NOTE,
} from "../const";

export type ActionAdd = {
  type: "ADD_NEW_NOTE";
  content: string;
  level: number;
};
export type ActionEdit = {
  type: "EDIT_NOTE";
  id: number;
  content: string;
  level: number;
};
export type ActionRemove = { type: "REMOVE_NOTE"; id: number };
export type ActionSearch = { type: "SEARCH_NOTE"; keyword: string };
export type ActionSort = { type: "SORT_NOTE"; sortType: number };
export type Action =
  | ActionAdd
  | ActionEdit
  | ActionRemove
  | ActionSearch
  | ActionSort;
//thêm note
export const actAddNote = (content:string, level:number) => {
  return {
    type: ADD_NEW_NOTE,
    content,
    level,
  };
};
//xóa note
export const actRemoveNote = (id: number) => {
  return {
    type: REMOVE_NOTE,
    id,
  };
};
//sửa note
export const actEditNote = (id: number, content: string, level: number) => {
  return {
    type: EDIT_NOTE,
    id,
    content,
    level,
  };
};

//search note
export const actSearchNote = (keyword: string) => {
  return {
    type: SEARCH_NOTE,
    keyword,
  };
};
//sort note
export const actSortNote = (sortType: number) => {
  return {
    type: SORT_NOTE,
    sortType,
  };
};
