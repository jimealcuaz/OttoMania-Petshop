
/*FUNCION FLECHA QUE RETORNA DETERMINADO CONTENIDO*/

/*EN LO SIGUIENTE ESTOY CREANDO UN COMPONENTE CON EL ATAJO RAFCE*/

import React from 'react';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
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

