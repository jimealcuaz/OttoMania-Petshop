
/*FUNCION FLECHA QUE RETORNA DETERMINADO CONTENIDO*/

/*EN LO SIGUIENTE ESTOY CREANDO UN COMPONENTE CON EL ATAJO RAFCE*/

import React from 'react';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="./imagenes/favicon.ico" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>OttoMania</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Contacto</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Perros</a></li>
                                    <li><a class="dropdown-item" href="#">Gatos</a></li>
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

