import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Blogdetails from "./Blogdetails";
import Notfound from "./Notfound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/create" component={Create} />
                        <Route
                            exact
                            path="/blogs/:id"
                            component={Blogdetails}
                        />
                        <Route exact path="*" component={Notfound} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
