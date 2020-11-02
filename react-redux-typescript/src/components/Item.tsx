import React from "react";
import { TodoItemInterface } from "../interfaces/todoInterface";
import { arrLevel } from "./AddNewNote";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { actRemoveNote } from "../actions/action";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditItem from "./EditItem";

const Item: React.FC<TodoItemInterface> = (props) => {
  const { todo } = props;
  const { index } = props;
  const [modal, setModal] = React.useState<boolean>(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const onRemoveNote = () => {
    dispatch(actRemoveNote(todo.id));
  };
  const popup = () => {
    return Swal.fire({
      title: "Delete Item?",
      text: `${todo.content}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          "Deleted!",
          "Your imaginary file has been deleted.",
          "success"
        );
        onRemoveNote();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };
  const handleEditItem = () => {
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Item</ModalHeader>
          <ModalBody>
            <EditItem todo={todo} toggle={toggle}></EditItem>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  };
  return (
    <tr>
      <td className="text-center">{index}</td>
      <td>{todo.content}</td>
      <td className="text-center">
        <span className="label label-danger">
          {arrLevel.filter((item) => item.value === todo.level)[0].label}
        </span>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-warning btn-sm"
          onClick={toggle}
        >
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-sm" onClick={popup}>
          Delete
        </button>
        {handleEditItem()}
      </td>
    </tr>
  );
};

export default Item;
