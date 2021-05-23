import React from "react";

function getRandomColor() {
    return "#" + Math.floor(Math.random()*parseInt("ffffff", 16)).toString(16)
}

class ComAClass extends React.Component{
  constructor(props){
    super(props);
    //이전 상태 객체
    this.state = {
      number: 0,
      color: "black"
    };

    this.addNumber = this.addNumber.bind(this);
  }

  addNumber(event){
    //새로운 상태 객체
    //비동기로 동작
    this.setState({
      ...this.state,  //현재 state 객체의 내용을 모두 가져옴
      number: this.state.number + 1 //number만 수정
    });
  }

  changeColor = (event) => {
    this.setState({
      ...this.state,
      color: getRandomColor()
    })
  };

  //컴포넌트가 클래스로 만들어지면 클래스로부터 만들어지는 객체는 하나임.
  //상태가 바뀌면 클래스형 컴포넌트는 render라는 메소드만 재실행해서 ui를 바꾸는 작업을 함.
  //새로운 객체가 만들어지는 것이 아니고, 하나의 객체가 만들어지고 상태가 바뀌면 render를 재실행
  render() {
    return(
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <div className="card-body">
          <h3 style={{color:this.state.color}}>{this.state.number}</h3> 
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자 증가</button>
          <button className="btn btn-info btn-sm" onClick={this.changeColor}>색 변경</button>
        </div>
      </div>
    );
  }
}

export default ComAClass;