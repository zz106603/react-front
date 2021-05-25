import { useEffect, useState } from "react";

function FunType(props) {
  const [state, setState] = useState({
    startNum: 0,
    number: 0,
  });

  useEffect(() => {
    //마운트, 업데이트 후 실행
    console.log("마운트 또는 업데이트 후 실행");

    return () => {
      //업데이트 전, 언마운트시 실행
      console.log("업데이트 전, 언마운트시 실행");
    };
  });

  useEffect(() => {
    console.log("마운트 실행");
    return () => {
      console.log("언마운트 실행");
    };
  }, []);

  useEffect(() => {
    console.log("마운트/props 변경 실행");
    setState({
      startNum: props.startNum,
      number: props.startNum
    });
    return () => {
      console.log("언마운트 실행");
    };
  }, [props]); //두 번째 매개값으로 넣어주는 값의 변경이 일어났을 때 실행

  useEffect(() => {
    console.log("마운트/state 변경 실행");
    return () => {
      console.log("언마운트 실행");
    };
  }, [state]); //두 번째 매개값으로 넣어주는 값의 변경이 일어났을 때 실행

  const handleIncrement = (event) => {
    setState({
      ...state,
      number: state.number + 1,
    });
  };

  return (
    <div className="card">
      <div className="card-header">FunType</div>
      <div className="card-body">
        <div>number: {state.number}</div>
        <button className="btn btn-info btn-sm mr-2" onClick={handleIncrement}>
          증가
        </button>
      </div>
    </div>
  );
}

export default FunType;
