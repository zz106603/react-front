import { useState } from "react";

function getBoardList(){
  console.log("boardlist 실행");
  return (
    [
      {bno:1, btitle:"제목1", bcontent:"내용1"},
      {bno:2, btitle:"제목2", bcontent:"내용2"},
      {bno:3, btitle:"제목3", bcontent:"내용3"}
    ]
  );
}

function Exam04StateInitFun(props) {

  //함수 호출코드가 아닌 함수 그 자체를 넣으면 초기에 한번만 실행
  const [boardList, setBoardList] = useState(getBoardList);
  const [newBno, setNewBno] = useState(4);

  const addBoard = (event) => {
    setBoardList(boardList.concat({
      bno:newBno,
      btitle:"제목" + newBno,
      bcontent:"제목" + newBno
    }));
    setNewBno(newBno+1);
  };

  return (
    <div className="card">
    <div className="card-header">
    Exam04StateInitFun
    </div>
    <div className="card-body">
      <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th>bno</th>
            <th>btitle</th>
            <th>bcontent</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map(board=>(
            <tr className="text-center" key={board.bno}>
              <th>{board.bno}</th>
              <td>{board.btitle}</td>
              <td>{board.bcontent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Exam04StateInitFun;
