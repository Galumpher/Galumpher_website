import React from 'react';
import Introduction from './Introduction';
import GettingStarted from './GettingStarted';
import Contribute from './Contribute';
import AboutUs from './AboutUs';
import Features from './Features';

const HomePage = () => {
    return (
        <>
            <div id='home'>
                <h2 id='introduction-section'>Introduction</h2>
                <Introduction />
                <h2 id='features-section'>Features</h2>
                <Features />
                <h2 id='gettingstarted-section'>Getting Started</h2>
                <GettingStarted />
                <h2 id='contribute-section'>Want To Contribute?</h2>
                <Contribute />
                <h2 id='aboutus-section'>About Us</h2>
                <AboutUs />
            </div>

        </>
    );
};

export default HomePage;