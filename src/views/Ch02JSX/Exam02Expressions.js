function fun() {
  return "동작";
}

function Exam02Expressions(props) {
  const name = "react";
  return (
    <div>
      <div className="card">
        <div className="card-header">
          Exam02Expressions
        </div>
        <div className="card-body">
          <p>Hello, {name}!</p>
          <p>{name}, {fun()}!</p>
          <p>2 + 3 = {2+3}</p>
        </div>
      </div>
    </div>
  );
}

export default Exam02Expressions;