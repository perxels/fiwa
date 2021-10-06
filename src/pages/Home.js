import React from 'react'
import styled from 'styled-components';

import Intro from '../components/Intro';
import Clients from '../components/Clients';
import Transition from '../components/Transition';
import WhatIOffer from '../components/WhatIOffer';

const Home = () => {
    return(
        <>
            <Intro />
            <Clients />
            <Transition />
            <WhatIOffer />
        </>
    )
}

export default Home

const Wrapper = styled.div`

`