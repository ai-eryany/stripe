import React from 'react';
import More from 'components/more/More';
import Footer from '../components/footer/Footer';
import Hero from 'components/Hero/Hero';
import Unified from 'components/unified/Unified';
import Terminal from 'components/terminal/Terminal';
import Approach from 'components/approach/Approach';
import Scale from 'components/scale/Scale';

function Home() {
    return (
        <main>
            <Hero />
            <Unified />
            <Terminal />
            <Approach />
            <Scale />
            <More />
            <Footer />
        </main>
    );
}

export default Home;
