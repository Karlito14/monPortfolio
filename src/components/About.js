import React from "react";

const About = () => {
    return (
        <section className="bg-light">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xxl-8">
                        <div className="text-center my-5">
                            <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">A propos de moi</span></h2>
                            <p className="lead fw-light mb-4">Développeur React / JavaScript</p>
                            <p className="text-muted">Passionné par la tech et l'informatique, j'ai réalisé tout au long de ma formation Openclassrooms différents projets en <strong>HTML, CSS, JavaScript, React JS et Node JS.</strong><br/></p>
                            <div className="d-flex justify-content-center fs-2 gap-4">
                                <a className="text-gradient icone-reseaux" href="https://twitter.com/Leiroz1Carlos" target="_blank"><i className="bi bi-twitter"></i></a>
                                <a className="text-gradient icone-reseaux" href="https://www.linkedin.com/in/carlos-leiroz/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                <a className="text-gradient icone-reseaux" href="https://github.com/Karlito14" target="_blank"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;