import React from "react";
import { useDispatch } from "react-redux";
import { actEditNote } from "../actions/action";
import { TodoEditInterface } from "../interfaces/todoInterface";
import { arrLevel } from "./AddNewNote";

const EditItem: React.FC<TodoEditInterface> = (props) => {
  const { todo } = props;
  const [content, setcontent] = React.useState<string>(todo.content);
  const [level, setlevel] = React.useState<number>(todo.level);

  const dispatch = useDispatch();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(actEditNote(todo.id, content, level));
    props.toggle();
  };
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={content}
          onChange={(e) => {
            setcontent(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={level}
          onChange={(e) => {
            setlevel(parseInt(e.target.value));
          }}
        >
          {arrLevel.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default EditItem;
