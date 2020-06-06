import React from 'react';
import './App.css';
import Edit from "./components/Edit/Edit";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Switch} from "react-router-dom";


const routes = [
    {
        path: "/",
        component: Edit,
        exact: true

    },
    {
        path: "/profile",
        component: Profile,


    },
];

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper-content">
                <Switch>
                {routes.map(route => (
                    <Route
                        path={route.path}
                        component={route.component}
                        key={route.path.toString()}
                        exact={route.exact}
                    />
                ))}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
