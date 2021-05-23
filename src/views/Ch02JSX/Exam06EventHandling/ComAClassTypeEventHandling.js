import React from "react";

class ComAClassTypeEventHandling extends React.Component {
  constructor(props) {
    super(props);
    // bind(this)를 넣어 자신의 객체를 참조하도록 연결 (방법1)
    // method1() 호출 관련
    this.handleBtn1 = this.handleBtn1.bind(this);
    this.handleBtn2 = this.handleBtn2.bind(this);
  }

  method1() {
    console.log("method1 실행");
  }

  handleBtn1 (event) {
    console.log("버튼1 실행");
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  }

  handleBtn2 = (event, x, y) => {
    const result = x + y;
    console.log("계산 결과: " + result);
    this.method1();
  }

  // 방법2
  // 메소드가 아닌 속성
  // 클래스 안에서 화살표 함수에서의 this는 자신의 객체를 참조
  handleBtn3 = (event) => {
    console.log("버튼3 실행");
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  }

  handleBtn4 = (event) => {
    console.log("버튼4 실행");
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  }

  render(){
    return (
      <div className="card">
        <div className="card-header">
         ComAClassTypeEventHandling
        </div>
        <div className="card-body">
        <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼1</button>
        <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event)=>this.handleBtn2(event,3, 5)}>버튼2</button>

        <button name="btn3" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn3}>버튼3</button>
        <button name="btn4" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn4}>버튼4</button>
        </div>
      </div>
    );
  }
}
export default ComAClassTypeEventHandling;