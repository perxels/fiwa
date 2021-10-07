import React from 'react'
import styled from 'styled-components';

import Header from '../components/Header';
import Intro from '../components/Intro';
import Clients from '../components/Clients';
import Transition from '../components/Transition';
import WhatIOffer from '../components/WhatIOffer';
import OurStudents from '../components/OurStudents';
import Testimonials from '../components/Testimonials';
import LetsTalk from '../components/LetsTalk';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <Wrapper>
            <Header />
            <Intro />
            <Clients />
            <Transition />
            <WhatIOffer />
            <OurStudents />
            <Testimonials />
            <LetsTalk />
            <Footer />
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    padding: 2rem 6rem;
    position: relative;
    overflow: hidden;
`