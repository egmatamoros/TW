import React, {useContext} from 'react'
import {principal} from "../principal";
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

export const LoginScreen = ({history}) =>{

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () =>{
        //history.push('/')
        try {
            dispatch({
                type: types.login,
                payload: {
                    name: 'Fernando'
                }
            })
            history.replace('/')
        }catch (e) {
            throw e
        }

    }

    return(
        <div className={'auth_main'}>
            <div className={'auth_box-container'}>
                <h3 className={'auth_title'}>Login</h3>
                <form action="">
                    <input
                        className={'auth_input'}
                        type="text"
                        placeholder={'Email'}
                        name={'email'}
                        autoComplete={'off'}
                    />
                    <input
                        className={'auth_input'}
                        type="password"
                        placeholder={'Password'}
                        name={'password'}
                        autoComplete={'off'}
                    />
                    <button
                        className={'btn1 btn-primary btn-block'}
                        onClick={handleLogin}
                    >
                        login
                    </button>
                </form>
                </div>
        </div>
    )
}