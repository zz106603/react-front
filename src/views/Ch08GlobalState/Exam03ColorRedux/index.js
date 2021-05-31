import ComAClass from "./ComAClass";
import ComBFun from "./ComBFun";

function Exam03ColorRedux(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
        Exam03ColorRedux
        </div>
        <div className="card-body">
          <ComAClass />
          <div className="mt-3"></div>
          <ComBFun />
        </div>
      </div>
    </>
  );
}

export default Exam03ColorRedux;