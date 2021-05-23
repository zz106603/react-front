import { useState } from "react";

function ComBFun(props) {
  const [number, setNumber] = useState(0);

  const addNumber1 = (event) => {
    setNumber(number + 1);
    setNumber(number + 1);
  };

  const addNumber2 = (event) => {
    //이전 상태의 값을 가지고 데이터 변경
    //콜백이 되는 함수
    setNumber((prevNumber) => {
      return prevNumber + 1;
    });
    //return문이 한줄일 경우 생략 가능
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="card">
      <div className="card-header">ComBClass</div>
      <div className="card-body">
        <h3>{number}</h3>
        <button className="btn btn-info btn-sm mr-2" onClick={addNumber1}>
          숫자 증가
        </button>
        <button className="btn btn-info btn-sm mr-2" onClick={addNumber2}>
          숫자 증가
        </button>
      </div>
    </div>
  );
}

export default ComBFun;
