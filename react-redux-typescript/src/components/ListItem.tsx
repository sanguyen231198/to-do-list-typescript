import React from "react";
import { useSelector } from "react-redux";
import { NoteInterface } from "../interfaces/todoInterface";
import { RootState } from "../reducers";
import Item from "./Item";

const ListItem: React.FC = () => {
  const keyword = useSelector<RootState, string>((state) => state.search);
  let listnote = useSelector<RootState, NoteInterface[]>(
    (state) => state.notes
  );
  listnote = listnote.filter((item) => {
    return item.content.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });
  let listItem = listnote.map((item: NoteInterface, index: number) => {
    return <Item key={item.id} todo={item} index={index + 1} />;
  });
  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Item</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Name</th>
            <th style={{ width: "15%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "15%" }}>Action</th>
          </tr>
        </thead>
        <tbody>{listItem}</tbody>
      </table>
    </div>
  );
};
export default ListItem;
