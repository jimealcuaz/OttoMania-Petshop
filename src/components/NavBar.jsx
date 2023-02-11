
/*FUNCION FLECHA QUE RETORNA DETERMINADO CONTENIDO*/

/*EN LO SIGUIENTE ESTOY CREANDO UN COMPONENTE CON EL ATAJO RAFCE*/

import React from 'react';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="./imagenes/favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>OttoMania</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Perros</a></li>
                                    <li><a className="dropdown-item" href="#">Gatos</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>

        </div>
    );
};

export default NavBar

