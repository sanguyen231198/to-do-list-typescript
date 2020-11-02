import { TodoFormInterface } from "../interfaces/todoInterface";
import React from "react";

import "./addItem.css";
import { useDispatch } from "react-redux";
import { actAddNote } from "../actions/action";
export const arrLevel = [
  {
    value: 0,
    label: "Small",
  },
  {
    value: 1,
    label: "Medium",
  },
  {
    value: 2,
    label: "High",
  },
];
const AddNewNote: React.FC<TodoFormInterface> = (props) => {
  const { showForm } = props;
  const [content, setcontent] = React.useState<string>("");
  const [level, setlevel] = React.useState<number>(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (content !== null && content !== "") {
      dispatch(actAddNote(content, level));
    } else alert("Vui lòng nhập Item Name");
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    setcontent("");
    setlevel(0);
  };
  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setcontent("");
    setlevel(0);
  };

  if (!showForm) return null;
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
          ref={inputRef}
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
      <button className="btn btn-danger" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default AddNewNote;
