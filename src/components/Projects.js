import React, { useState } from "react";
import {portfolioData} from '../data/portfolioData';
import { NavLink } from "react-router-dom";

const Projects = () => {
    const [language, setLanguage] = useState('');

    const onClick = (event) => {
        setLanguage(event.target.id);
    };

    let filteredPortfolio = [];

    if(!language || language === 'tous'){
        filteredPortfolio = portfolioData;
    } else {
        for(let project of portfolioData){
            if(project.language === language){
                filteredPortfolio.push(project);
            }
        }
    }

    return (
        <>
        <section className="py-5">
            <div className="container px-5 mb-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Mes projets</span></h1>
                </div>
                <ul className="nav justify-content-center mb-3">
                    <li className="nav-item me-5">
                        <p role="button" className="nav-link border border-primary rounded-pill" id="tous" onClick={onClick}>Tous</p>
                    </li>
                    <li className="nav-item me-5">
                        <p role="button" className="nav-link border border-primary rounded-pill" id="html" onClick={onClick}>HTML / CSS</p>
                    </li>
                    <li className="nav-item me-5">
                        <p role="button" className="nav-link border border-primary rounded-pill" id="javascript" onClick={onClick}>JavaScript</p>
                    </li>
                    <li className="nav-item">
                        <p role="button" className="nav-link border border-primary rounded-pill" id="react" onClick={onClick}>React JS</p>
                    </li>
                </ul>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {filteredPortfolio.map((projet) => {
                            return (
                                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" key={projet.id + '-' + projet.name}>
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center project-item">
                                            <div className="p-5 div-description-projet">
                                                <h2 className="fw-bolder">{projet.name}</h2>
                                                <p>{projet.info}</p>
                                                <a href={projet.git} target="_blank" className="btn btn-info me-2">GitHub</a>
                                                <a href={projet.source} target="_blank" className="btn btn-primary">Demo</a>
                                            </div>
                                            <div className="div-img-project">
                                                <img className="img-fluid img-project" src={projet.picture} alt={projet.name} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5 bg-gradient-primary-to-secondary text-white">
            <div className="container px-5 my-5">
                <div className="text-center">
                    <h2 className="display-4 fw-bolder mb-4">Construisons quelque chose ensemble</h2>
                    <NavLink className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to='/contact' >Contactez-moi</NavLink>
                </div>
            </div>
        </section>
        </>
    )
};

export default Projects;