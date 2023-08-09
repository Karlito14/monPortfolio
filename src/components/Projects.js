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
                    <h2 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Mes projets</span></h2>
                </div>
                <ul className="nav justify-content-center mb-3 list-project">
                    <li className="nav-item text-center item-project">
                        <p role="button" className="btn btn-outline-primary rounded-pill w-100" id="tous" onClick={onClick}>Tous</p>
                    </li>
                    <li className="nav-item text-center item-project">
                        <p role="button" className="btn btn-outline-primary rounded-pill w-100" id="html" onClick={onClick}>HTML / CSS</p>
                    </li>
                    <li className="nav-item text-center item-project">
                        <p role="button" className="btn btn-outline-primary rounded-pill w-100" id="javascript" onClick={onClick}>JavaScript</p>
                    </li>
                    <li className="nav-item text-center">
                        <p role="button" className="btn btn-outline-primary rounded-pill w-100" id="react" onClick={onClick}>React JS</p>
                    </li>
                </ul>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {filteredPortfolio.map((projet) => {
                            return (
                                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" key={projet.id + '-' + projet.name}>
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center project-item">
                                            <div className="p-4 div-description-projet">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h2 className="fw-bolder">{projet.name}</h2>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                    {
                                                        projet.languagesIcons.map((languageIcons, index) => {
                                                            return (
                                                                    <i key={index} className={languageIcons + " text-gradient icone-language me-2"}></i>
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </div>
                                                <p>{projet.info}</p>
                                                <a href={projet.git} target="_blank" className="btn btn-info me-2">GitHub</a>
                                                {projet.source && <a href={projet.source} target="_blank" className="btn btn-primary">Demo</a>}
                                            </div>
                                            <img className="img-fluid img-project" src={projet.picture} alt={projet.name} />
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