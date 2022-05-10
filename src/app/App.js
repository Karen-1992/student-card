import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Account from "./layouts/account";
import MainCard from "./layouts/mainCard";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={MainCard}/>
                <Route path="/account/:type?" component={Account}/>
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
