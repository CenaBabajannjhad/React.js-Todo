import React from "react";
import completeImg from "../assets/png/icons/check/check-square.svg";

const CompleteBtn = ({ id , completeTask }) => {
  return (
    <button onClick={e => completeTask(id)}>
      <img src={completeImg} alt="comp-ic" />
    </button>
  );
};

export default CompleteBtn;
