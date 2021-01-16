import React from 'react';

export const principal = () => {
    return (
        <div className={'principal_index move-main'}>
            <div className="card text-white bg-dark mb-3" style={{maxWidth: 540}}>
                <div className="card-header">Informacion</div>
                <div className="card-body">
                    <h5 className="card-title">Objetivo</h5>
                    <p className="card-text">Se tiene el objetivo de crear una Pagina echa con React, HTML 5, Servlet. A la
                        vez de que sirve como complemento de todos los aprendizajes esperados a lo largo del curso</p>
                    <img
                        src="../images/logo.png"
                        width={250}
                        height={200}
                        className={'principal_image'}
                    />
                </div>
            </div>
        </div>

    )
}

