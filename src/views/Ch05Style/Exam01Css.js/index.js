import style from "./style.module.css";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(style);

function Exam01Css(props) {
  const [state, setState] = useState({
    userId: null
  });

  return (
    <>
      <div className="card">
        <div
          className="card-header" //부트스트랩의 Css Class 적용
        >
          Exam01Css
        </div>
        <div className="card-body">
          <div className={style.wrapper}>Hello, React1</div>
          <div className={`${style.wrapper} ${style.inverted} mt-3`}>Hello, React2</div>
          {state.userId === null ? (
            <div className={classNames(style.wrapper, style.inverted, "mt-3")}>Hello, React3</div>
          ) : (
            <div className={classNames(style.wrapper, "mt-3")}>Hello, React3</div>
          )}
          {/* {}로 객체로 만들고 []으로 속성값으로 만듬 */}
          <div className={classNames(style.wrapper, {[style.inverted]:state.userId === null}, "mt-3")}>Hello, React4</div>

          <div className={cx("wrapper", {inverted : state.userId === null}, "mt-3")}>Hello, React5</div>
        </div>
      </div>
    </>
  );
}

export default Exam01Css;
