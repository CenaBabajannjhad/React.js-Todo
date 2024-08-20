import React from "react";
import CompleteBtn from "./CompleteBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";
// btn images

const Todos = ({ title, id, cName, completeTask , editTask , deleteTask}) => {
  return (
    <div className="px-1 py-2 text-lg capitalize flex items-center justify-between border-solid border-[#6C63FF] border-b-2">
      <h3 className={cName}>{title}</h3>
      <div className="flex items-center space-x-3">
        <CompleteBtn id={id} completeTask={completeTask} />
        <EditBtn id={id} editTask={editTask}/>
        <DeleteBtn id={id} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default Todos;
