// import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import FunType from "./FunType";

function Exam02UseEffect(props) {
  const [startNum, setStartNum] = useState(0);

  const handleChage = (event) => {
    setStartNum(parseInt(event.target.value));
  };
  return (
    <div className="card">
      <div className="card-header">
        Exam02UseEffect      
      </div>
      <div className="card-body">
        <input className="mb-2" type="number" name="startNum" value={startNum} onChange={handleChage}/>
        <FunType startNum={startNum}/>
      </div>
    </div>
  );
}

export default Exam02UseEffect;