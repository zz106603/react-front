import { Redirect, Route, Switch } from "react-router-dom";
import ComA from "./ComA";
import ComB from "./ComB";

function Ch01ComponentDeclaration(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch01ComponentDeclaration
    </div>
      <div className="card-body">
      <Switch>
        <Route path={`${props.match.url}/coma`} exact component={ComA}/>
        <Route path={`${props.match.url}/comb`} exact component={ComB}/>
        <Redirect to="/" />
    </Switch>
    </div>
    </div>
  );
}

export default Ch01ComponentDeclaration;