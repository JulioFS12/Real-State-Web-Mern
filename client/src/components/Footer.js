import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer bg-dark mt-5">
        <div className="container">
            <div className="row py-4 align-items-center">
                <ul className="nav col  flex-column flex-sm-row text-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Anuncios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Contacto</Link>
                    </li>
                </ul>

                <p className="copyright text-light m-0 col-md-4 text-center text-md-right mt-4 mt-md-0">
                        2018. Derechos Reservados 
                </p>
            </div>
        </div>
    </footer>
    )
}
