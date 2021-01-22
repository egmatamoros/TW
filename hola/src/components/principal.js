import React from 'react';

export const principal = () => {
    return (
        <div className={'principal_index move-main'}>
            <div className="card text-white bg-dark mb-3" style={{maxWidth: 540}}>
                <div className="card-header">Informacion</div>
                <div className="card-body">
                    <h5 className="card-title">Objetivo</h5>
                    <p className="card-text">Crear una página web con los aprendizajes obtenidos en la materia
                        tecnologías para la web, tales como los estilos, creación de un entorno gráfico creado con la
                        herramientas que nos proporciona React, un ejemplo de esto fue la creación del NavBar el cual se
                        ocupa react-router-dom, se implementó un conjunto de rutas públicas y privadas de tal forma que
                        uno no puede acceder a algunas rutas sin estar logueado dando una seguridad extra al proyecto.
                    </p>
                    <center>
                    <img
                        src="./resources/logo_sin_fondo.svg"
                        width={250}
                        height={200}
                        alt="Logo del proyecto"
                    />
                    <br/>
                    <audio src="../mfondo.mp3" controls autoplay loop>
                        <p>Tu navegador no implementa el elemento audio</p>
                    </audio>
                    </center>
                </div>
            </div>
        </div>

    )
}

