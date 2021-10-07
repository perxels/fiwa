import {ReactComponent as Logo} from '../assets/img/fiwa.svg'
import {ReactComponent as Hamburger} from '../assets/img/hamburger.svg'

import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return(
        <Wrapper>
            <Logo />
            <Hamburger />
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
`