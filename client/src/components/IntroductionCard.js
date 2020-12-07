import React from 'react';
import { add1, parking, room, wc } from '../assets/Images';

export const IntroductionCard = () => {
    return (
        <section className="mt-5 container">
            <h2 className="text-center mb-5">Houses and Apartments</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                    <div className="card" style={{width: "310px"}}>
                        <img src={add1} className="card-img-top" alt="Card description"/>
                        <div className="card-body">
                            <h3 className="card-title">Casa en Zona de Lujo</h3>
                            <p className="card-text">ivamus vulputate dui ut odio sagittis gravida.</p>
                            <p className="card-precio">$3,000,000</p>
                            <ul className="card-descripcion my-3 list-unstyled d-flex justify-content-between">    
                                <li><img src={wc} alt="wc"/> 3 </li>
                                <li><img src={room} alt="room"/> 3 </li>
                                <li><img src={parking} alt="parking"/> 2 </li>
                            </ul>
                            <button type="button" className="btn btn-warning btn-block">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                    <div className="card" style={{width: "310px"}}>
                        <img src={add1} className="card-img-top" alt="Card description"/>
                        <div className="card-body">
                            <h3 className="card-title">Casa en Zona de Lujo</h3>
                            <p className="card-text">ivamus vulputate dui ut odio sagittis gravida.</p>
                            <p className="card-precio">$3,000,000</p>
                            <ul className="card-descripcion my-3 list-unstyled d-flex justify-content-between">    
                                <li><img src={wc} alt="wc"/> 3 </li>
                                <li><img src={room} alt="room"/> 3 </li>
                                <li><img src={parking} alt="parking"/> 2 </li>
                            </ul>
                            <button type="button" className="btn btn-warning btn-block">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                    <div className="card" style={{width: "310px"}}>
                        <img src={add1} className="card-img-top" alt="Card description"/>
                        <div className="card-body">
                            <h3 className="card-title">Casa en Zona de Lujo</h3>
                            <p className="card-text">ivamus vulputate dui ut odio sagittis gravida.</p>
                            <p className="card-precio">$3,000,000</p>
                            <ul className="card-descripcion my-3 list-unstyled d-flex justify-content-between">    
                                <li><img src={wc} alt="wc"/> 3 </li>
                                <li><img src={room} alt="room"/> 3 </li>
                                <li><img src={parking} alt="parking"/> 2 </li>
                            </ul>
                            <button type="button" className="btn btn-warning btn-block">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                    <div className="card" style={{width: "310px"}}>
                        <img src={add1} className="card-img-top" alt="Card description"/>
                        <div className="card-body">
                            <h3 className="card-title">Casa en Zona de Lujo</h3>
                            <p className="card-text">ivamus vulputate dui ut odio sagittis gravida.</p>
                            <p className="card-precio">$3,000,000</p>
                            <ul className="card-descripcion my-3 list-unstyled d-flex justify-content-between">    
                                <li><img src={wc} alt="wc"/> 3 </li>
                                <li><img src={room} alt="room"/> 3 </li>
                                <li><img src={parking} alt="parking"/> 2 </li>
                            </ul>
                            <button type="button" className="btn btn-warning btn-block">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                    <div className="card" style={{width: "310px"}}>
                        <img src={add1} className="card-img-top" alt="Card description"/>
                        <div className="card-body">
                            <h3 className="card-title">Casa en Zona de Lujo</h3>
                            <p className="card-text">ivamus vulputate dui ut odio sagittis gravida.</p>
                            <p className="card-precio">$3,000,000</p>
                            <ul className="card-descripcion my-3 list-unstyled d-flex justify-content-between">    
                                <li><img src={wc} alt="wc"/> 3 </li>
                                <li><img src={room} alt="room"/> 3 </li>
                                <li><img src={parking} alt="parking"/> 2 </li>
                            </ul>
                            <button type="button" className="btn btn-warning btn-block">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                    <div className="card" style={{width: "310px"}}>
                        <img src={add1} className="card-img-top" alt="Card description"/>
                        <div className="card-body">
                            <h3 className="card-title">Casa en Zona de Lujo</h3>
                            <p className="card-text">ivamus vulputate dui ut odio sagittis gravida.</p>
                            <p className="card-precio">$3,000,000</p>
                            <ul className="card-descripcion my-3 list-unstyled d-flex justify-content-between">    
                                <li><img src={wc} alt="wc"/> 3 </li>
                                <li><img src={room} alt="room"/> 3 </li>
                                <li><img src={parking} alt="parking"/> 2 </li>
                            </ul>
                            <button type="button" className="btn btn-warning btn-block">Warning</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
