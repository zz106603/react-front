import "./style.css";

function Exam05CssClass(props) {
  const name = "React";
  return (
    <>
      <div className="card">
        <div 
          className="card-header" //부트스트랩의 Css Class 적용
        >
          Exam05CssClass
        </div>
        <div className="card-body">
          <div className="react">{name}</div>
        </div>
      </div>
    </>
  );
}

export default Exam05CssClass;