import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="py-5">
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-5">
                        <div className="text-center text-xxl-start">
                            <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Developpement web &middot; SEO</div></div>
                            <p className="fs-3 fw-light text-muted">Je peux vous aider à</p>
                            <h3 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Mettre en ligne votre business et le développer</span></h3>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <NavLink className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to='/competences'>Compétences</NavLink>
                                <NavLink className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to='/projets'>Projets</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7">
                        <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                            <div className="profile bg-gradient-primary-to-secondary">
                                <img className="profile-img" src="./media/avatar.png" alt="mon-profil" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;