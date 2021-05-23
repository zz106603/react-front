import {useState} from "react";

function ComCTwoWayBinding(props) {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    //set함수에 매개값을 넣으면 자동 바인딩
    setContent(event.target.value);
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          ComCTwoWayBinding
        </div>
        <div className="card-body">
          <div>
            입력1: <input type="text" onChange={handleChange} value={content}/>
          </div>
          <div>
            입력1: <input type="text" onChange={handleChange} value={content}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComCTwoWayBinding;