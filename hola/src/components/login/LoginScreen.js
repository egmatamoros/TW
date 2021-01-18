import React, {useContext} from 'react'
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";
import axios from "axios";
import XMLData from '../../xml/base.xml'
import {useForm} from "../../hooks/useForm";

export const LoginScreen = ({history}) =>{

    const [formValues, handleInputChange]= useForm({
        User: '',
        password: ''
    });
    const {User, password} = formValues
    let datos = null
    let conjunto = null

    const {dispatch} = useContext(AuthContext);
    async function leerxml (){
        await axios.get(XMLData, {
            "Content-Type": "application/xml; charset=utf-8"
        })
            .then((response) => {
                datos = response.data;
            });
        const ps = require('xml2js').parseString
        ps(datos, function (err, result) {
            conjunto = result.RAIZ.USER[0].$.USU + result.RAIZ.USER[0].$.pass
        })
    }
    leerxml()
    const handleLogin = (e) =>{
        e.preventDefault();
        //history.push('/')
        try {

            if(User + password === conjunto)
            {
                dispatch({
                    type: types.login,
                    payload: {
                        name: User
                    }
                })
                history.replace('/')

            }
            else{
                alert('Usuario no registrado')
            }


        }catch (a) {
            throw a
        }

    }

    return(
        <div className={'auth_main'}>
            <div className={'auth_box-container'}>
                <h3 className={'auth_title'}>Login</h3>
                <form action=" ">
                    <input
                        className={'auth_input'}
                        type="text"
                        placeholder={'User'}
                        name={'User'}
                        autoComplete={'off'}
                        value={User}
                        onChange={handleInputChange}
                    />
                    <input
                        className={'auth_input'}
                        type="password"
                        placeholder={'Password'}
                        name={'password'}
                        autoComplete={'off'}
                        value={password}
                        onChange={handleInputChange}
                    />
                    <button
                        className={'btn1 btn-prima btn-block'}
                        onClick={handleLogin}
                    >
                        login
                    </button>
                </form>
                </div>
        </div>
    )
}