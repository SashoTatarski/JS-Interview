import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import Reducer from './reducer';
import Callback from './callback';
import Memo from './memo';
import RefElement from './ref-element';
import RefPersistentValue from './ref-persistent-value';
import RefTimeout from './ref-timeout';
import ImperativeHandle from './imperative-handle';
import LayoutEffect from './layout-effect';
import DebugValue from './debug-value';

const App = () => {
    return (
        <div >
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/03.advanced-hooks/reducer">useReducer</Link>
                        </li>
                        <li>
                            <Link to="/03.advanced-hooks/callback">useCallback</Link>
                        </li>
                        <li>
                            <Link to="/03.advanced-hooks/memo">useMemo</Link>
                        </li>
                        <li>
                            <Link to="/03.advanced-hooks/ref">useRef</Link>
                            <Switch>
                                <Route path={"/03.advanced-hooks/ref"}>
                                    <ul>
                                        <li>
                                            <Link to="/03.advanced-hooks/ref/element">DOM Elements</Link>
                                        </li>
                                        <li>
                                            <Link to="/03.advanced-hooks/ref/persistent-value">Persistent Value</Link>
                                        </li>
                                        <li>
                                            <Link to="/03.advanced-hooks/ref/timeout">Timeout</Link>
                                        </li>
                                    </ul>
                                </Route>
                            </Switch>
                        </li>
                        <li>
                            <Link to="/03.advanced-hooks/imperative-handle">useImperativeHandle</Link>
                        </li>
                        <li>
                            <Link to="/03.advanced-hooks/layout-effect">useLayoutEffect</Link>
                        </li>
                        <li>
                            <Link to="/03.advanced-hooks/debug-value">useDebugValue</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
            </div>
            <Switch>
                <Route path="/03.advanced-hooks/reducer">
                    <Reducer />
                </Route>
                <Route path="/03.advanced-hooks/callback">
                    <Callback />
                </Route>
                <Route path="/03.advanced-hooks/memo">
                    <Memo />
                </Route>
                <Route path="/03.advanced-hooks/ref/element">
                    <RefElement />
                </Route>
                <Route path="/03.advanced-hooks/ref/persistent-value">
                    <RefPersistentValue />
                </Route>
                <Route path="/03.advanced-hooks/ref/timeout">
                    <RefTimeout />
                </Route>
                <Route path="/03.advanced-hooks/imperative-handle">
                    <ImperativeHandle />
                </Route>
                <Route path="/03.advanced-hooks/layout-effect">
                    <LayoutEffect />
                </Route>
                <Route path="/03.advanced-hooks/debug-value">
                <DebugValue />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
