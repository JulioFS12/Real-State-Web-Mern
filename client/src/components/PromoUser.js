import React from 'react'
import { Link } from 'react-router-dom'

export const PromoUser = () => {
    return (
        <section className="dreams">
            <div className="container promo">
                <div className="row text-light">
                    <div className="col">
                        <h3>Encuentra la casa de tus sueños</h3>
                        <p>Llena el formulario de contacto y un asesor se pondrá en contacto a la brevedad.</p>
                        <Link to="/" className="btn btn-warning text-uppercase py-2 mt-4">Contactános</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
