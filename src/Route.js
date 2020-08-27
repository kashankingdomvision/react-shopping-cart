import React from 'react';
import Home from './component/Home.js';
import About from './component/About.js';
// import Contact from './component/Contact.js';
import { createBrowserHistory } from "history";
import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const customHistory = createBrowserHistory();

class Routes extends React.Component {
    render() {
        return(
            <Router history={customHistory}>
            <div>

                {/* Method # 1  */}
                {/* <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} /> */}

                {/* Method # 2 */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route  path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
        );
    }
}


export default Routes;