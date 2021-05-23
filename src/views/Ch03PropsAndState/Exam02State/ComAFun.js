import { useState } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random()*parseInt("ffffff", 16)).toString(16)
}

function ComAFun(props) {

  //일회성의 데이터는 변수로 선언
  //UI가 갱신되었을 때 유지되어야 하는 데이터는 상태로 만들어야 함

  const [state, setState] = useState({
    number: 0,
    cololr: "black"
  });

  const addNumber = (event) => {
    setState({
      ...state,
      number : state.number + 1
    });
  };

  const changeColor = (event) => {
    setState({
      ...state,
      color: getRandomColor()
    });
  };

  //클래스형은 render 메소드만 재실행
  //값이 변화했을 때 return이 재실행 되는 것이 아니라 ComAFun 함수가 재실행

  //함수형은 클래스형이 아니어서 객체라는 개념이 없음.
  //상태가 바뀌게 되면, 컴포넌트에 해당되는 함수가 매번 반복해서 실행됨. 함수자체가 재실행.
  //그래서 함수형 컴포넌트와 클래스형 컴포넌트는 완전 동작방법이 다름!!!
  return(
    <div class="card">
        <div class="card-header">
          ComAFun
        </div>
        <div class="card-body">
          <h3 style={{color:state.color}}>{state.number}</h3> 
          <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>숫자 증가</button>
          <button className="btn btn-info btn-sm mr-2" onClick={changeColor}>색 변경</button>
        </div>
    </div>
  );
}

export default ComAFun;