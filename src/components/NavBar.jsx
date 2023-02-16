import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body rounded">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex flex-column" href="/"><img src="./imagenes/favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img><h6 className="text-muted">OttoMania</h6></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/" aria-current="page">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">Contacto</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/categoria/perros">Perros</Link></li>
                                    <li><Link className="dropdown-item"to="/categoria/gatos">Gatos</Link></li>
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

