import { readBoard, updateBoard } from "apis/boards";
import { useEffect, useState } from "react";

function BoardUpdateForm(props) {

  const bno = parseInt(props.match.params.bno);

  const [board, setBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: ""
  });

  useEffect(() => {
    const work = async () => {
      try{
        const response = await readBoard(bno);
        setBoard(response.data);
      }catch(error){
        console.log(error);
      }
    };
    work();
  }, [bno]); //처음에만 실행시키기 위해

  const handleUpdate = async (event) => {
    event.preventDefault();
    try{
      const dirtyBoard = {...board};
      await updateBoard(dirtyBoard);
      props.history.goBack();
    }catch(error){
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value
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
              <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="bcontent" value={board.bcontent} onChange={handleChange}/>
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