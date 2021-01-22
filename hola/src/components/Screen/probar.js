import React, {useState} from 'react';
import{useCounter,useCounter1,useCounter3,useCounter4,useCounter5,useCounter6} from "../../hooks/useCounter";
import {useForm} from "../../hooks/useForm";

export const Probar = (props) => {
    const [Gv1x, setGv1x] = useState(3); //variable v1x
    const [Gv1y, setGv1y] = useState(2); //variable v1y
    const [Gv2x, setGv2x] = useState(5); //variable v2x
    const [Gv2y, setGv2y] = useState(8); //variable v2y
    const [GA, setGA] = useState(1); //variable A
    const [GB, setGB] = useState(1); //variable B
    const [Tipo, setTipo] = useState(1); //variable tipo ecuacion
    const [Nombre, setNombre] = useState("");
    let texto1, texto2;
    var id = 0;

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
    var nombre;
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
        setNombre(obtenerVariables('nom'));
        props.match.params.estado = '1';
    }
    return (
        <div className={'vector_main move-main'}>
            <div className={'main_box-container'}>
                <div>
                   <center>
                        <span style={{ color: "#931323", fontSize: "16pt"}}>
                            Simulacion: {Nombre}
                        </span><br/>
                        {GA}
                        {texto1}
                        {GB}
                        {texto2}

                   </center>
                </div>

            </div>
            <div className={'vector_box-container move_Vector'}>
                Base Vectors
                <div className={'mt-2'}>
                    &nbsp; ax= &nbsp;&nbsp; ay=
                    <div className={'mt-1'}>
                    &nbsp;&nbsp; {Gv1x} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Gv1y}

                        
                    </div>
                </div>
                <div className={'mt-2'}>
                    &nbsp; bx= &nbsp;&nbsp; by=
                    <div className={'mt-1'}>
                    &nbsp;&nbsp; {Gv2x} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Gv2y}
                        
                    </div>
                    <div className={'mt-2'}>
                        
                    </div>
                </div>
            </div>
            <div className={'vector_box-container2'}>
                <iframe  id="frame" src={'../vectores.html?' + 'tipo=' + Tipo + '&comXv1='+ Gv1x +'&comYv1=' + Gv1y + '&comXv2=' + Gv2x + '&comYv2=' + Gv2y + '&multia=' + GA +'&multib=' + GB } title="vectores" width="810px" height="510px"></iframe>
            </div>
        </div>
    )
}