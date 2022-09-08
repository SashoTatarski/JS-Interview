import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CallingFunctionalComponentDemo from "./demos/CallingFunctionalComponentDemo";
import KeyPropDemo from "./demos/KeyPropDemo";
import UseStateLazyInitAndFuncUpdateDemo from "./demos/UseStateLazyInitAndFuncUpdateDemo";
import UsingAndInJsxDemo from "./demos/UsingAndInJsxDemo";
import RerenderingDemo from "./demos/RerenderingDemo";
import StateColocationDemo from "./demos/StateColocationDemo";
import OptimizeContextDemo from "./demos/optmize-context-demo";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className='nav'>
        <Link to='call-func-component-demo'>
          Calling functional component demo
        </Link>
        <Link to='key-prop-demo'>Key prop demo</Link>
        <Link to='use-state-demo'>Use state demo</Link>
        <Link to='using-and-in-jsx-demo'>Using && in JSX demo</Link>
        <Link to='re-rendering-demo'>Re-rendering demo</Link>
        <Link to='state-colocation-demo'>State colocation demo</Link>
        <Link to='optimize-context-demo'>Optimize context demo</Link>
      </div>
      <Switch>
        <Route
          exact
          path='/call-func-component-demo'
          component={CallingFunctionalComponentDemo}
        />
        <Route exact path='/key-prop-demo' component={KeyPropDemo} />
        <Route
          path='/use-state-demo'
          component={UseStateLazyInitAndFuncUpdateDemo}
        />
        <Route path='/using-and-in-jsx-demo' component={UsingAndInJsxDemo} />
        <Route path='/re-rendering-demo' component={RerenderingDemo} />
        <Route path='/state-colocation-demo' component={StateColocationDemo} />
        <Route path='/optimize-context-demo' component={OptimizeContextDemo} />
      </Switch>
    </Router>
  );
}
