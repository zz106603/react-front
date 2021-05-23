import ComA from "./ComA";
import ComB from "./ComB";
import ComC from "./ComC";

function Exam08Ref(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
        Exam08Ref
        </div>
        <div className="card-body">
          <ComA />
          <div className="mt-3"></div>
          <ComB />
          <div className="mt-3"></div>
          <ComC />
        </div>
      </div>
    </>
  );
}

export default Exam08Ref;