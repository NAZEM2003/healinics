import React from 'react';
//components
import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './Services';
import Features from './Features';
import Team from './Team';
//styles
import styles from '../styles/Landing.module.css';

const Landing = () => {
  
    return (
        <div>
            {/* banner start */}
            <Banner/>
            {/* banner end */}

            {/* about us start */}
            <AboutUs/>
            {/* about us end */}

            {/* services start */}
            <Services/>
            {/* services end */}

            {/* Feature Start  */}
            <Features/>
            {/* Feature end  */}

            {/* team start */}
            <Team/>
            {/* team end */}
        </div>
    );
};

export default Landing;