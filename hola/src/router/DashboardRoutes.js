
import React from 'react';
import {Navbar} from "../components/ui/NavBar";
import {Route, Switch, Redirect} from "react-router-dom";

import {principal} from "../components/principal";
import {VectorScreen} from "../components/Screen/VectorScreen";
import {TableScreen} from "../components/Screen/TableScreen";

export const DashboardRoutes = () =>{
    return(
        <>
            <Navbar/>
            <div className={'container mt-2'}>
                <Switch>
                    <Route exact path={'/inicio'} component={principal}/>
                    <Route exact path={'/proyects'} component={TableScreen}/>
                    <Route exact path={'/new/:estado'} component={VectorScreen}/>

                    <Redirect to={'/inicio'}/>
                </Switch>
            </div>
        </>
    )
}
