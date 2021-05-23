function ComBFunTypeEventHandling(props) {
  const handleBtn1 = (event) => {
    console.log("버튼1 실행");
    console.log(event.target.name);
    console.log(event.type);
  };

  const handleBtn2 = (event, x, y) => {
    const result = x + y;
    console.log("계산 결과: " + result);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          ComBFunTypeEventHandling
        </div>
        <div className="card-body">
          <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼1</button>
          {/* 매개값이 필요할 경우 화살표 함수 작성 후 실행문에 함수 호출 코드를 작성 */}
          {/* <button className="btn btn-info btn-sm mr-2" onClick={()=>{handleBtn2(3, 5)}}>버튼2</button> */}
          <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event)=>handleBtn2(event, 3, 5)}>버튼2</button>
        </div>
      </div>
    </>
  );
}

export default ComBFunTypeEventHandling;