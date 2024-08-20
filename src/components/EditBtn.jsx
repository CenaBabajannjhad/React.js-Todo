import React from "react";
import editImg from "../assets/png/icons/edit/pencil.svg";

const EditBtn = ({ id, editTask }) => {
  return (
    <button onClick={e => editTask(id)}>
      <img src={editImg} alt="edit-ic" />
    </button>
  );
};

export default EditBtn;
