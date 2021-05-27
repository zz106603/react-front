import { ColorContextProvider } from "./ColorContext";
import ComAClass from "./ComAClass";
import ComBFun from "./ComBFun";


function Exam01ColorContext() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Exam01ColorContext
        </div>
        <div className="card-body">
          {/* 같은 provider를 사용하게 되면 ComAClass를 변경하면 ComBFun도 함께 변경 */}
          <ColorContextProvider>
            <ComAClass />
            <div className="mt-3"></div>
            <ComBFun />
          </ColorContextProvider>
        </div>
      </div>
    </>
  );
}

export default Exam01ColorContext;