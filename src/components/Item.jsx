import React from 'react';
import perro1 from "../../imagenes/perro1.jpg";
import perro2 from "../../imagenes/perro2.jpg";
import perro3 from "../../imagenes/perro3.jpg";
import gatoa from "../../imagenes/gatoa.jpg";
import gatob from "../../imagenes/gatob.jpg";
import gatoc from "../../imagenes/gatoc.jpg";


const Item = () => {
    return (
        <div>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-6 m-10 p-10">
                    <div className="col">
                        <div className="card d-flex justify-content-center">
                            <img src={perro1} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Producto 1</h5>
                                <p className="card-text">$1000</p>
                                <p className="card-text">Stock: 5</p>
                                <a href="#" className="btn btn-outline-info">Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card d-flex justify-content-center">
                            <img src={perro2} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Producto 2</h5>
                                <p className="card-text">$2000</p>
                                <p className="card-text">Stock: 5</p>
                                <a href="#" className="btn btn-outline-info">Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card d-flex justify-content-center">
                            <img src={perro3} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Producto 3</h5>
                                <p className="card-text">$3000</p>
                                <p className="card-text">Stock: 10</p>
                                <a href="#" className="btn btn-outline-info">Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card d-flex justify-content-center">
                            <img src={gatoa} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Producto A</h5>
                                <p className="card-text">$1500</p>
                                <p className="card-text">Stock: 7</p>
                                <a href="#" className="btn btn-outline-info">Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card d-flex justify-content-center">
                            <img src={gatob} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Producto B</h5>
                                <p className="card-text">$2500</p>
                                <p className="card-text">Stock: 3</p>
                                <a href="#" className="btn btn-outline-info">Ver detalle</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card d-flex justify-content-center">
                            <img src={gatoc} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Producto C</h5>
                                <p className="card-text">$3500</p>
                                <p className="card-text">Stock: 8</p>
                                <a href="#" className="btn btn-outline-info">Ver detalle</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item