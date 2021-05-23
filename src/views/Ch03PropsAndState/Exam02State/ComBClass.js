import React from "react";

class ComBClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    };
  }

  addNumber1 = (event) => {
    this.setState({
      number: this.state.number + 1
    });
    this.setState({
      number: this.state.number + 1
    });
  }

  addNumber2 = (event) => {
    //이전 상태의 값을 가지고 데이터 변경
    //콜백이 되는 함수
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      }
    });
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      }
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComBClass
        </div>
        <div className="card-body">
          <h3>{this.state.number}</h3> 
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber1}>숫자 증가</button>
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber2}>숫자 증가</button>
        </div>
      </div>
    );
  }
}

export default ComBClass;
