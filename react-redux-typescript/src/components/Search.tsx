import React from "react";
import { useDispatch } from "react-redux";
import { actSearchNote } from "../actions/action";

const Search: React.FC = () => {
  const [keyword, setkeyword] = React.useState<string>("");
  const dispatch = useDispatch();

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setkeyword("");
    dispatch(actSearchNote(""));
  };
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(actSearchNote(keyword));
  };

  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={keyword}
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      <button className="btn btn-danger" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
};

export default Search;
