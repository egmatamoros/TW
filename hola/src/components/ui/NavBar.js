import React, {useContext} from 'react'
import { Link, NavLink,useHistory } from 'react-router-dom'
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

export const Navbar = () => {
    const {user:{name}, dispatch} = useContext(AuthContext);
    const history = useHistory();
    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
        history.replace('/login')
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Vectors
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/proyects"
                    >
                        Mis Proyectos
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/new/1"
                    >
                        Nuevo Proyectos
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className={'nav-item nav-link text-info'}>
                        {name}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}