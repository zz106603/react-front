import { Switch, Route } from "react-router-dom";
import Exam01WrapElement from "./Exam01WrapElement";
import Exam02Expressions from "./Exam02Expressions";
import Exam03Condition from "./Exam03Condition";
import Exam04InlineCss from "./Exam04InlineCss";
import Exam05CssClass from "./Exam05CssClass";
import Exam06EventHandling from "./Exam06EventHandling";
import Exam07Repeat from "./Exam07Repeat";
import Exam08Ref from "./Exam08Ref";

// index만 특별하게 생략이 가능
// import Exam05CssClass from "./Exam05CssClass/index";


function Ch02JSX(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch02JSX
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component={Exam01WrapElement} />
          <Route path={`${props.match.url}/exam02`} exact component={Exam02Expressions} />
          <Route path={`${props.match.url}/exam03`} exact component={Exam03Condition} />
          <Route path={`${props.match.url}/exam04`} exact component={Exam04InlineCss} />
          <Route path={`${props.match.url}/exam05`} exact component={Exam05CssClass} />
          <Route path={`${props.match.url}/exam06`} exact component={Exam06EventHandling} />
          <Route path={`${props.match.url}/exam07`} exact component={Exam07Repeat} />
          <Route path={`${props.match.url}/exam08`} exact component={Exam08Ref} />
        </Switch>
      </div>
    </div>
  );
}

export default Ch02JSX;