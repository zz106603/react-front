import { useState } from "react";

function ComCFun() {
  const [joinForm, setJoinForm] = useState({
    uid: "",
    uname: "",
    upassword: "",
    ujob: "developer",
    uskill: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(joinForm);
  };

  const handleChange = (event) => {
    if (event.target.name !== "uskill") {
      setJoinForm({
        ...joinForm,
        // 변수의 값이 속성 이름으로 들어갈 때는 대괄호를 사용
        [event.target.name]: event.target.value,
      });
    } else {
      if (event.target.checked) {
        //체크가 되었을 경우 concat으로 추가
        // setJoinForm({
        //   ...joinForm,
        //   uskill: joinForm.uskill.concat(event.target.value)
        // });
        setJoinForm((prevJoinForm) => {
          return {
            ...prevJoinForm,
            uskill: prevJoinForm.uskill.concat(event.target.value),
          };
        });
      } else {
        //체크 해제
        // setJoinForm({
        //   ...joinForm,
        //   uskill: joinForm.uskill.filter((item) => {
        //     return item !== event.target.value
        //   })
        // });
        setJoinForm((prevJoinForm) => {
          return {
            ...joinForm,
            uskill: joinForm.uskill.filter((item) => {
              return item !== event.target.value;
            })
          };
        });
      }
    }
  };

  return (
    <div className="card">
      <div className="card-header">ComCFun</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">ID</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="uid" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="uname"
                onChange={handleChange}
                autoComplete="username"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="upassword"
                onChange={handleChange}
                autoComplete="current-password"
              />
            </div>
          </div>
          <fieldset className="form-group row">
            <legend className="col-form-label col-sm-2 float-sm-left pt-0">Job</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ujob"
                  value="developer"
                  onChange={handleChange}
                  checked={joinForm.ujob === "developer"}
                />
                <label className="form-check-label">개발자</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ujob"
                  value="designer"
                  onChange={handleChange}
                  checked={joinForm.ujob === "designer"}
                />
                <label className="form-check-label">디자이너</label>
              </div>
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ujob"
                  value="pm"
                  onChange={handleChange}
                  checked={joinForm.ujob === "pm"}
                />
                <label className="form-check-label">프로젝트 관리자</label>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <legend className="col-form-label col-sm-2 float-sm-left pt-0">skill</legend>
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="uskill"
                  value="java"
                  onChange={handleChange}
                />
                <label className="form-check-label">자바</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="uskill"
                  value="spring"
                  onChange={handleChange}
                />
                <label className="form-check-label">스프링</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="uskill"
                  value="react"
                  onChange={handleChange}
                />
                <label className="form-check-label">리액트</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary btn-sm">
                가입
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComCFun;
