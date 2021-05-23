function Exam04InlineCss(props) {
  const name = "React";
  // 카멜케이스로 작성, 문자열로 감싸서 정의 
  const mystyle = {
    backgroundColor: "black",
    color:"red", 
    fontSize:"24px", 
    fontWeight:"bold",
    padding:8
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          Exam04InlineCss
        </div>
        <div className="card-body">
          {/* 인라인으로 사용 */}
          <div style={{
            backgroundColor:"black", 
            color:"red", 
            fontSize:"24px", 
            fontWeight:"bold",
            padding:8}}>{name}
          </div>
          <hr />
          {/* style 작성 후 사용 */}
          <div style={mystyle}>{name}</div>
        </div>
      </div>
    </>
  );
}

export default Exam04InlineCss;