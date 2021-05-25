import { useState } from "react";
import { getBoard, updateBoard } from "./data";

function BoardUpdateForm(props) {

  const bno = parseInt(props.match.params.bno);
  //함수호출을 하려면 getBoard(bno)가 아닌 getBoard로 불러와야하는데 bno를 받아야하기 때문에 화살표 함수로 함수를 준다.
  const [board, setBoard] = useState(() => {
    return getBoard(bno)
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    updateBoard(board);
    //props를 이용한 URL이동
    props.history.goBack();
  };

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value,
    })
  };

  const handleCancel = (event) => {
    props.history.goBack();
  };

  return (
    <div className="card">
      <div className="card-header">
        Component: BoardUpdateForm
      </div>
      <div className="card-body">
        <form onSubmit={handleUpdate}>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-primary btn-sm mr-2" value="수정"/>
              <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardUpdateForm;