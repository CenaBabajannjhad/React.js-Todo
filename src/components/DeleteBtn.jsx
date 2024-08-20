import React from "react";
import deleteImg from "../assets/png/icons/trash/trash.svg";

const DeleteBtn = ({id , deleteTask}) => {
  return (
    <button onClick={e => deleteTask(id)}>
      <img src={deleteImg} alt="del-ic" />
    </button>
  );
};

export default DeleteBtn;
