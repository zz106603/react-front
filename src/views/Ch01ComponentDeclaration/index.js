import { Redirect, Route, Switch } from "react-router-dom";
import ComA from "./ComA";
import ComB from "./ComB";

function Ch01ComponentDeclaration() {
  return (
    <div className="card">
      <div className="card-header">
        Ch01ComponentDeclaration
    </div>
      <div className="card-body">
      <Switch>
        <Route path="/ch01/coma" exact component={ComA}/>
        <Route path="/ch01/comb" exact component={ComB}/>
        <Redirect to="/" />
    </Switch>
    </div>
    </div>
  );
}

export default Ch01ComponentDeclaration;