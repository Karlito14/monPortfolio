import React from 'react';

const Resume = () => {
    return(
        <main className="flex-shrink-0">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Compétences</span></h2>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        <section>
                            <div className="d-flex justify-content-between mb-4 flex-direction">
                                <h3 className="text-primary fw-bolder mb-0 mt-4">Expériences</h3>
                                <a className="btn btn-primary px-4 py-3" href="#!">
                                    <div className="d-inline-block bi bi-download me-2"></div>
                                    Télécharger mon CV
                                </a>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">Décembre 2022 - Aujourd'hui</div>
                                                <div className="small fw-bolder">Développeur Web</div>
                                                <div className="small text-muted">Openclassrooms</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Créer la page d'accueil d'une agence de voyage en HTML / CSS</li>
                                                <li className="list-group-item">Créer une page web dynamique avec JavaScript</li>
                                                <li className="list-group-item">Planifier le développement du site d'un client</li>
                                                <li className="list-group-item">Débugger et optimiser le site d'une photographe</li>
                                                <li className="list-group-item">Créer une application web de location immobilière en React</li>
                                                <li className="list-group-item">Développer le back end d'un site de notation de livres</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">Avril 2014 - Octobre 2022</div>
                                                <div className="small fw-bolder">Vente de véhicules d'Occasions</div>
                                                <div className="small text-muted">A mon compte</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                        <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Achat / Vente de véhicules</li>
                                                <li className="list-group-item">Achat des pièces et Réparations des véhicules</li>
                                                <li className="list-group-item">Passage au Controle Technique</li>
                                                <li className="list-group-item">Nettoyage des Véhicules</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 className="text-secondary fw-bolder mb-4">Formations</h3>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">Septembre 2023 - Aout 2025</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">Ecole CESI</div>
                                                    <div className="small text-muted">Aix-en-Provence</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">Bac +2</div>
                                                    <div className="small text-muted">Développeur web</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><span className='fw-bold'>Recueillir le besoin</span> auprès d'un client et le formaliser dans le cadre d'une étude préliminaire.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Concevoir avec UML l'application</span> et respecter les bonnes pratiques en la matière (design pattern, normes de codage...).</li>
                                                <li className="list-group-item"><span className='fw-bold'>Développer les programmes</span> à l'aide des langages Java ou .NET et les optimiser.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Concevoir la logique</span> algorithmique du programme.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Programmer la solution</span>, que cela soit web, mobile ou client lourd (dont accès à la base de données).</li>
                                                <li className="list-group-item"><span className='fw-bold'>Participer à la réalisation</span> des tests unitaires automatisés et fonctionnels.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">Décembre 2022 - Aout 2023</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">Openclassrooms</div>
                                                    <div className="small text-muted">Paris</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">Certification professionnelle</div>
                                                    <div className="small text-muted">Développeur Web</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><span className='fw-bold'>Construire un site web responsive et dynamique</span> s’adaptant à tout type d’écran.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Créer des API et des bases de données</span> pour développer des sites complets et dynamiques.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Optimiser les performances</span> et réaliser la maintenance de sites web déjà existants.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Gérer un projet web de A à Z :</span> de la planification du projet à la présentation de la solution au client.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="pb-5"></div>
                        <section>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="mb-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Langages et Bibliothèques</span></h3>
                                        </div>
                                        <div className="accordion accordion-flush" id="accordion">
                                            <div className="accordion-item">
                                                <h4 className="accordion-header">
                                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#html" aria-expanded="false" aria-controls="html">
                                                    HTML / CSS
                                                </button>
                                                </h4>
                                                <div id="html" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <ul className="list-group list-group-flush mr-2">
                                                        <li className="list-group-item">Intégrer du contenu conformément à une maquette avec HTML et CSS</li>
                                                        <li className="list-group-item">Implémenter une interface responsive avec HTML et CSS</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h4 className="accordion-header">
                                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#js" aria-expanded="false" aria-controls="js">
                                                    JavaScript
                                                </button>
                                                </h4>
                                                <div id="js" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Récupérer les données utilisateurs dans le JavaScript via des formulaires</li>
                                                        <li className="list-group-item">Manipuler les éléments du DOM avec JavaScript</li>
                                                        <li className="list-group-item">Gérer les événements utilisateurs avec JavaScript</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h4 className="accordion-header">
                                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#react" aria-expanded="false" aria-controls="react">
                                                    React JS
                                                </button>
                                                </h4>
                                                <div id="react" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Configurer la navigation entre les pages de l'application avec React Router</li>
                                                        <li className="list-group-item">Initialiser une application avec Create React App</li>
                                                        <li className="list-group-item">Développer des éléments de l'interface d'un site web grâce à des composants React</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#node" aria-expanded="false" aria-controls="node">
                                                    Node JS
                                                </button>
                                                </h2>
                                                <div id="node" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Implémenter un modèle logique de données conformément à la réglementation</li>
                                                        <li className="list-group-item">Mettre en œuvre des opérations CRUD de manière sécurisée</li>
                                                        <li className="list-group-item">Stocker des données de manière sécurisée</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="mb-0">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Outils Professionnels</span></h3>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3 mb-4">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">SEO</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Google Analytics</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Google Search Console</div></div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-md-3">
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Figma</div></div>
                                            <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Canva</div></div>
                                            <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Postman</div></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Resume;