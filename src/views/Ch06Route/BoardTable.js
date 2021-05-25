import { Link } from "react-router-dom";
import qs from "qs";
import {getBoardList} from "./data";

function BoardTable(props) {
  let pageNo = 1;

  //ignoreQueryPrefix:true => 쿼리스트링에서 ? 제외
  const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
  
  console.log(props.location.search);
  console.log(queryString);

  //페이지 번호 설정
  if(queryString.pageNo){
    pageNo = parseInt(queryString.pageNo);
  }

  const boardList = getBoardList(pageNo);
  

  return (
    <div className="card">
      <div className="card-header">
        Component: BoardTable
      </div>
      <div className="card-body">
        <Link to="/ch06/writeForm" className="btn btn-info btn-sm mb-2">추가</Link>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th>bno</th>
              <th>btitle</th>
              <th>bwriter</th>
              <th>bdate</th>
              <th>bhitcount</th>
            </tr>
          </thead>
           <tbody>
            {boardList.map(board=>(
              <tr className="text-center" key={board.bno}>
                <th>{board.bno}</th>
                <td><Link to={`/ch06/${board.bno}/read?pageNo=${pageNo}`}>{board.btitle}</Link></td>
                <td>{board.bwriter}</td>
                <td>{board.bdate}</td>
                <td>{board.bhitcount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Link to="/ch06?pageNo=1" className={`btn ${pageNo===1?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>1</Link>
          <Link to="/ch06?pageNo=2" className={`btn ${pageNo===2?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>2</Link>
          <Link to="/ch06?pageNo=3" className={`btn ${pageNo===3?"btn-danger":"btn-outline-success"} btn-sm mr-1`}>3</Link>
        </div>
      </div>
    </div>
  );
}

export default BoardTable;