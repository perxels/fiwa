import React from 'react'
import styled from 'styled-components';

import Intro from '../components/Intro';
import Clients from '../components/Clients';
import Transition from '../components/Transition';
import WhatIOffer from '../components/WhatIOffer';
import OurStudents from '../components/OurStudents';

const Home = () => {
    return(
        <Wrapper>
            <Intro />
            <Clients />
            <Transition />
            <WhatIOffer />
            <OurStudents />
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    padding: 2rem 6rem;
    position: relative;
`