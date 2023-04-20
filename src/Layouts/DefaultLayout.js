import React from 'react';
import HeroCarousal from '../components/HeroCarousal/HeroCarousal';
import Navbar from '../components/Navbar/Navbar';

const DefaultLayout = (props) => {

    return (
        <>
            <Navbar />
            <HeroCarousal />
            {props.children}
        </>
    );
};

export default DefaultLayout;