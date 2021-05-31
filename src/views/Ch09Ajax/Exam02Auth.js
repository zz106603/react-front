import { login, logout } from "apis/auth";
import { addAuthHeader, removeAuthHeader } from "apis/axiosConfig";
import { getBoardList } from "apis/boards";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";

function Exam02Auth(props) {
  const [user, setUser] = useState({
    userid: "",
    userpassword: ""
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  };

  const globalUid = useSelector((state) => {
    return state.authReducer.uid;
  });

  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    try {
      //로그인 요청
      const response = await login(user);
      //요청 헤더에 JWT 토큰 추가
      addAuthHeader(response.data.authToken);
      //Redux에 인증 내용 저장
      dispatch(createSetUidAction(response.data.userid));
      dispatch(createSetAuthTokenAction(response.data.authToken));

      //SessionStorage에 인증 내용 저장(브라우저 갱신시 사용)
      sessionStorage.setItem("uid", response.data.userid);
      sessionStorage.setItem("authToken", response.data.authToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async (event) => {
    try{
      removeAuthHeader();
      dispatch(createSetUidAction(""));
      dispatch(createSetAuthTokenAction(""));

      sessionStorage.removeItem("uid");
      sessionStorage.removeItem("authToken");
    }catch(error){
      console.log(error);
    }
  }

  const handleBoardList = async (event) => {
    try{
      const response = await getBoardList();
    }catch(error){
      console.log(error);
    }
  };
  
  return(
    <div className="card">
      <div className="card-header">
        Exam02Auth
      </div>
      <div className="card-body">
        <div>
          <button className="btn btn-info btn-sm" onClick={handleBoardList}>게시물 목록(인증 필요)</button>
        </div>
        <hr />
        {globalUid === "" ?
        <div>
            <div className="form-group row">
              <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="userid" value={user.userid} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="upassword" className="col-sm-2 col-form-label">User Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" name="userpassword" value={user.userpassword} onChange={handleChange}/>
              </div>
            </div>
            <button className="btn btn-success btn-sm" onClick={handleLogin}>로그인</button>
        </div>
        :
        <div>
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>로그아웃</button>
        </div>
        }
      </div>
    </div>
  );
}

export default Exam02Auth;