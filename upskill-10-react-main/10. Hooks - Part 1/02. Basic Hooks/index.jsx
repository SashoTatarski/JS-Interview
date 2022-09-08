import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import State from './state';
import EffectDOM from './effect-dom';
import EffectData from './effect-data';
import Context from './context';

const App = () => {
    return (
        <div >
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/02.basic-hooks/state">useState</Link>
                        </li>
                        <li>
                            <Link to="/02.basic-hooks/effect">useEffect</Link>
                            <Switch>
                                <Route path={"/02.basic-hooks/effect"} >
                                    <ul>

                                        <li>
                                            <Link to="/02.basic-hooks/effect/dom">useEffect working with DOM</Link>
                                        </li>
                                        <li>
                                            <Link to="/02.basic-hooks/effect/data">useEffect Data Fetching</Link>
                                        </li>
                                    </ul>
                                </Route>
                            </Switch>
                        </li>
                        <li>
                            <Link to="/02.basic-hooks/context">useContext</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
            </div>
            <Switch>
                <Route path="/02.basic-hooks/state">
                    <State />
                </Route>
                <Route path="/02.basic-hooks/effect/dom">
                    <EffectDOM />
                </Route>
                <Route path="/02.basic-hooks/effect/data">
                    <EffectData />
                </Route>
                <Route path="/02.basic-hooks/context">
                    <Context />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
