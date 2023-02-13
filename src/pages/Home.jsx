import React from 'react';
import NavBar from 'components/navBar/NavBar';
import Hero from 'components/hero/Hero';
import Brands from 'components/brands/Brands';
import Unified from 'components/unified/Unified';
import Pictures from 'components/pictures/Pictures';
import Terminal from 'components/terminal/Terminal';
import Approach from 'components/approach/Approach';
import Scale from 'components/scale/Scale';
import More from 'components/more/More';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Hero />
                <Brands />
                <Unified />
                <Pictures />
                <Terminal />
                <Approach />
                <Scale />
                <More />
                <Footer />
            </main>
        </>
    );
}

export default Home;
