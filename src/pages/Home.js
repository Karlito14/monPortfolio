import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <Navigation />
            <Header />
            <About />
            <Footer />
        </React.Fragment>    
    )
};

export default Home;