
import React from 'react';
import {Navbar} from "../components/ui/NavBar";
import {Route, Switch, Redirect} from "react-router-dom";

import {principal} from "../components/principal";
import {VectorScreen} from "../components/Screen/VectorScreen";
import {TableScreen} from "../components/Screen/TableScreen";
import {probar} from "../components/Screen/probar";
import {ver} from "../components/Screen/ver";

export const DashboardRoutes = () =>{
    return(
        <>
            <Navbar/>
            <div className={'container mt-2'}>
                <Switch>
                    <Route exact path={'/inicio'} component={principal}/>
                    <Route exact path={'/proyects'} component={TableScreen}/>
                    <Route exact path={'/new/:estado'} component={VectorScreen}/>
                    <Route exact path={'/probar'} component={probar}/>
                    <Route exact path={'/ver'} component={ver}/>
                    <Redirect to={'/inicio'}/>
                </Switch>
            </div>
        </>
    )
}
