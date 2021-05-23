import ClassTypeProps from "./ClassTypeProps";
import FunTypeProps from "./FunTypeProps";

function Exam01Props() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Exam01Props
        </div>
        <div className="card-body">
          {/* 숫자를 전달할 때는 표현식 */}
          <ClassTypeProps name="리액트" version={17}>
            {/* children */}
            <div>자식 내용입니다.</div>
          </ClassTypeProps>
          <div className="mt-3"></div>
          <FunTypeProps name="리액트" version={17}>
            <div>자식 내용입니다.</div>
          </FunTypeProps>
        </div>
      </div>
    </>
  );
}

export default Exam01Props;
