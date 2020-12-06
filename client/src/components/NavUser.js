import React from 'react';
import { Link } from 'react-router-dom'

export const NavUser = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-container">
            <Link className="navbar-brand" to="/">Welcome</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-dark navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Abour Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Advertising
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/">House</Link>
                            <Link className="dropdown-item" to="/">Aparment</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/">Party at de beach</Link>
                        </div>
                    </li>
                </ul>
                <Link className="navbar-brand" to="/">Real State JF Dev</Link>
            </div>
        </nav>
    )
}
