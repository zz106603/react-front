// import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import ClassType from "./ClassType";

function Exam01CallbackMethod(props) {
  const [startNum, setStartNum] = useState(0);

  const handleChage = (event) => {
    setStartNum(parseInt(event.target.value));
  };
  return (
    <div className="card">
      <div className="card-header">
        Exam01CallbackMethod
      </div>
      <div className="card-body">
        <input className="mb-2" type="number" name="startNum" value={startNum} onChange={handleChage}/>
        <ClassType startNum={startNum}/>
      </div>
    </div>
  );
}

export default Exam01CallbackMethod;