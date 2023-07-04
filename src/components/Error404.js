import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container justify-content-center d-flex flex flex-column min-vh-100 align-items-center">
            <p className="fs-3">Ooops ! Cette page n'existe pas.</p>
            <h1 className="h1-error text-gradient">404</h1>
            <p className="fs-4">Nous ne trouvons pas la page que vous recherchez</p>
            <NavLink to='/' className='text-decoration-none btn btn-outline-secondary text-uppercase' type="button">Retourner à l'accueil</NavLink>
        </div>
    )
};

export default Error404;