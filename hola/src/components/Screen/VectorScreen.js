import React, {useState} from 'react';
import{useCounter,useCounter1,useCounter3,useCounter4,useCounter5,useCounter6} from "../../hooks/useCounter";

export const VectorScreen = (props) => {
    const {state,increment,decrement} = useCounter();
    const {state1,increment1,decrement1} = useCounter1();
    const {state3,increment3,decrement3} = useCounter3();
    const {state4,increment4,decrement4} = useCounter4();
    const {state5,increment5,decrement5} = useCounter5();
    const {state6,increment6,decrement6} = useCounter6();

    const [count, setCount] = useState(1);
    const estado = props.match.params.estado;
    function obtenerVariables(variable) {
        var query = estado;
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    }
    let nuevo = obtenerVariables('nuevo');
    let hola = 'no es nuevo';
    let exito= 'NO ES EXITOSO';
    if (nuevo == '1') {
        hola = 'Es nuevo!!!';
        exito = obtenerVariables('exito');
    }
    function newSite(tipo) {
        var web = '../vectores.html?' + 'tipo=' + count + '&comXv1='+ state +'&comYv1=' + state1 + '&comXv2=' + state3 + '&comYv2=' + state4 + '&multia=1&multib=1';
        document.getElementById('frame').src = web
    } 
    return (
        <div className={'vector_main move-main'}>
            <div className={'main_box-container'}>
                <div>

                    Estado: {hola} y {exito}
                    <button
                        className={'btn btn-danger ml-1'}
                        onClick={
                            function () {
                                setCount(1);
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
                                setCount(2);
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
                                setCount(3);
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
                                increment5();
                                newSite();
                            }
                        }
                    >
                    </button>
                    {state5}
                    <button
                        className={'arrow down mr-1 ml-1'}
                        style={{ backgroundColor: "#2e8ece"}}
                        onClick={
                            function () {
                                decrement5();
                                newSite();
                            }
                        }
                    >
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;

                    <button
                        className={'arrow up mr-1 ml-1'}
                        style={{ backgroundColor: "#2e8ece"}}
                        onClick={
                            function () {
                                increment6();
                                newSite();
                            }
                        }
                    >
                    </button>
                    {state6}
                    <button
                        className={'arrow down mr-1 ml-1'}
                        style={{ backgroundColor: "#2e8ece"}}
                        onClick={
                            function () {
                                decrement6();
                                newSite();
                            }
                        }
                    >
                    </button>

                </div>

            </div>
            <div className={'vector_box-container move_Vector'}>
                Base Vectors
                <div className={'mt-2'}>
                    &nbsp;ax= &nbsp;&nbsp;&nbsp; ay=
                    <div className={'mt-1'}>
                        <button
                            className={'arrow up mr-1'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    increment();
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {state}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    decrement();
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
                                    increment1();
                                    newSite();
                                }
                            }
                        >
                        </button>

                        {state1}

                        <button
                            className={'arrow down mr-1 ml-2'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    decrement1();
                                    newSite();
                                }
                            }
                        >
                        </button>
                    </div>
                </div>
                <div className={'mt-2'}>
                    &nbsp; bx= &nbsp;&nbsp;&nbsp; by=
                    <div className={'mt-1'}>
                        <button
                            className={'arrow up arrow up mr-1'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    increment3();
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {state3}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    decrement3();
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
                                    increment4();
                                    newSite();
                                }
                            }
                        >
                        </button>
                        {state4}
                        <button
                            className={'arrow down mr-1 ml-2'}
                            style={{ backgroundColor: "#2e8ece"}}
                            onClick={
                                function () {
                                    decrement4();
                                    newSite();
                                }
                            }
                        >
                        </button>
                    </div>
                    <div className={'mt-2'}>
                        <button
                            className={'btn btn-danger ml-1'}
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
            <div className={'vector_box-container2'}>
                <iframe  id="frame" src={'../vectores.html?' + 'tipo=' + count + '&comXv1='+ state +'&comYv1=' + state1 + '&comXv2=' + state3 + '&comYv2=' + state4 + '&multia=1&multib=1' } title="vectores" width="810px" height="510px"></iframe>
            </div>
        </div>
    )
}