import { Link } from "react-router-dom";

function AppHeader() {
  //태그가 아니라 자바스크립트로 바뀜
  return (
    <nav className="navbar bg-dark navbar-dark text-white font-weight-bold 
    justify-content-between">
      <Link to="/" className="navbar-brand">
        <img src="/logo512.png" alt="" width="30" height="30" className="align-top" />
        {' '} React
      </Link>
      <div>
        <Link to="/" className="btn btn-success btn-sm">로그인</Link>
      </div>
    </nav>
  );
}

export default AppHeader;