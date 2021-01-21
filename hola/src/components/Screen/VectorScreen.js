import React, {useState} from 'react';
import{useCounter,useCounter1,useCounter3,useCounter4,useCounter5,useCounter6} from "../../hooks/useCounter";
import {useForm} from "../../hooks/useForm";

export const VectorScreen = (props) => {
    const [Gv1x, setGv1x] = useState(3); //variable v1x 
    const [Gv1y, setGv1y] = useState(2); //variable v1y
    const [Gv2x, setGv2x] = useState(5); //variable v2x
    const [Gv2y, setGv2y] = useState(8); //variable v2y
    const [GA, setGA] = useState(1); //variable A
    const [GB, setGB] = useState(1); //variable B
    const [Tipo, setTipo] = useState(1); //variable tipo ecuacion
    let texto1, texto2;
    var id = 0;
    const [formValues, handleInputChange]= useForm({
        Nombre: ''
    });
    const {Nombre} = formValues
    //Con esto definimos el texto del tipo de ecuacion
    if(Tipo == '2'){
        texto1 = "a  - ";
    } else {
        texto1 = "a  + ";
    }
    if(Tipo == '3'){
        texto2 = "b  +  c = 0";
    } else {
        texto2 = "b = c";
    }
    //obtenemos el string de la URL
    const parametros = props.match.params.estado;
    //Funcion para obtener las variables de la url
    function obtenerVariables(variable) {
        var query = parametros;
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return 1;
    }
    //Declaramos las variables que podemos pedir 
    if (parametros != '1') {
        setGv1x(parseInt(obtenerVariables('comXv1'),10));
        setGv1y(parseInt(obtenerVariables('comYv1'),10));
        setGv2x(parseInt(obtenerVariables('comXv2'),10));
        setGv2y(parseInt(obtenerVariables('comYv2'),10));
        setGA(parseInt(obtenerVariables('multiA'),10));
        setGB(parseInt(obtenerVariables('multiB'),10));
        setTipo(parseInt(obtenerVariables('tipo'),10));
        id = parseInt(obtenerVariables('id'),10);
        props.match.params.estado = '1';
    }
    function newSite(tipo) {
        var web = '../vectores.html?' + 'tipo=' + Tipo + '&comXv1='+ Gv1x +'&comYv1=' + Gv1y + '&comXv2=' + Gv2x + '&comYv2=' + Gv2y + '&multia=' + GA +'&multib=' + GB;
        document.getElementById('frame').src = web
    } 
    async function guardar() {
        var peticion =  "/ServletGuardar?nombre="+ Nombre +"&comXv1="+ Gv1x +"&comYv1="+ Gv1y +"&comXv2="+ Gv2x +"&comYv2="+ Gv2y +"&tipo="+ Tipo +"&multiA="+ GA +"&multiB="+ GB +"&id=" + id;
        await fetch(peticion)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <div className={'vector_main move-main'}>
            <div className={'main_box-container'}>
                <div>
                    {Nombre}
                    <button
                        className={'btn btn-danger ml-1'}
                        onClick={
                            function () {
                                setTipo(1);
                                newSite();
                            }
                        }
                    >
                        a+b=c
                    </button>
                    <button
                        className={'btn btn-danger ml-1'}
                        onClick={
                            function () {
                                setTipo(2);
                                newSite();
                            }
                        }
                    >
                        a-b=c
                    </button>
                    <button
                        className={'btn btn-danger ml-1'}
                        onClick={ 
                            function () {
                                setTipo(3);
                                newSite();
                            }
                        }
                    >
                        a+b+c=0
                    </button>

                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;


                    <button
                        className={'arrow up mr-1 ml-1'}
                        style={{ backgroundColor: "#2e8ece"}}
                        onClick={
                            function () {
                                setGA(GA + 1);
                                newSite();
                            }
                        }
                    />&nbsp;
                    {GA}
                    <button
                        className={'arrow down mr-1 ml-1'}
                        style={{ backgroundColor: "#2e8ece"}}
                        onClick={
                            function () {
                                setGA(GA - 1);
                                newSite();
                            }
                        }
                    />
                    {texto1}

                    <button
                        className={'arrow up mr-1 ml-1'}
                        style={{ backgroundColor: "#2e8ece"}}
                        onClick={
                            function () {
                                setGB(GB + 1);
                                newSite();
                            }
                        }
                    >
                    </button>&nbsp;
                    {GB}
                    <button
                        className={'arrow down mr-1 ml-1'}
                        style={{ backgroundColor: "#2e8ece"}}
                        onClick={
                            function () {
                                setGB(GB - 1);
                                newSite();
                            }
                        }
                    >
                    </button>
                    {texto2}

                    &nbsp;&nbsp;&nbsp;
                    Nombre:
                    <input
                        type="text"
                        placeholder={'Nombre'}
                        name={'Nombre'}
                        autoComplete={'off'}
                        value={Nombre}
                        onChange={handleInputChange}
                    />

                </div>

            </div>
            <div className={'vector_box-container move_Vector'}>
                Base Vectors
                <div className={'mt-2'}>
                    &nbsp;ax= &nbsp;&nbsp; ay=
                    <div className={'mt-1'}>
                        <button
                            className={'arrow up mr-1'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    setGv1x(Gv1x + 1);
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {Gv1x}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    setGv1x(Gv1x - 1);
                                    newSite();
                                }
                            }
                        >
                        </button>

                        <button
                            className={'arrow up mr-1 ml-1'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    setGv1y(Gv1y + 1);
                                    newSite();
                                }
                            }
                        >
                        </button>

                        {Gv1y}

                        <button
                            className={'arrow down mr-1 ml-2'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    setGv1y(Gv1y - 1);
                                    newSite();
                                }
                            }
                        >
                        </button>
                    </div>
                </div>
                <div className={'mt-2'}>
                    &nbsp; bx= &nbsp;&nbsp; by=
                    <div className={'mt-1'}>
                        <button
                            className={'arrow up arrow up mr-1'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    setGv2x(Gv2x + 1);
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {Gv2x}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    setGv2x(Gv2x - 1);
                                    newSite();
                                }
                            }
                        >
                        </button>

                        <button
                            className={'arrow up mr-1 ml-1'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    setGv2y(Gv2y + 1);
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {Gv2y}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    setGv2y(Gv2y - 1);
                                    newSite();
                                }
                            }
                        >
                        </button>
                    </div>
                    <div className={'mt-2'}>
                        <button
                            className={'btn btn-danger ml-1'}
                            onClick={
                                function () {
                                    guardar();
                                }
                            }
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
            <div className={'vector_box-container2'}>
                <iframe  id="frame" src={'../vectores.html?' + 'tipo=' + Tipo + '&comXv1='+ Gv1x +'&comYv1=' + Gv1y + '&comXv2=' + Gv2x + '&comYv2=' + Gv2y + '&multia=' + GA +'&multib=' + GB } title="vectores" width="810px" height="510px"></iframe>
            </div>
        </div>
    )
}