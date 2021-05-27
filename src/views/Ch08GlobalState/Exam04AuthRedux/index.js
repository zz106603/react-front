import LoginFormClass from "./LoginFormClass";
import LoginFormFun from "./LoginFormFun";



function Exam04AuthRedux(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
        Exam04AuthRedux
        </div>
        <div className="card-body">
          <LoginFormClass />
          <div className="mt-3"></div>
          <LoginFormFun />
          
        </div>
      </div>
    </>
  );
}

export default Exam04AuthRedux;