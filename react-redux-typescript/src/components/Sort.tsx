import React from "react";
import { useDispatch } from "react-redux";
import { actSortNote } from "../actions/action";
export const arrSort = [
  {
    value: 0,
    label: "Sort by",
  },
  {
    value: 1,
    label: "Name",
  },

  {
    value: 2,
    label: "Level",
  },
];
const Sort: React.FC = () => {
  const [sortType, setsortType] = React.useState<number>(0);
  const dispatch = useDispatch();
  const onSortNote = () => {
    dispatch(actSortNote(sortType));
  };
  return (
    <>
      <b>Sort by: </b>

      <select
        value={sortType}
        onClick={onSortNote}
        onChange={(e) => {
          setsortType(parseInt(e.target.value));
        }}
      >
        {arrSort.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Sort;
