import {ReactComponent as Logo} from '../assets/img/fiwa.svg'
import {ReactComponent as Hamburger} from '../assets/img/hamburger.svg'

import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return(
        <Wrapper>
            <a href="/"><Logo className="logo"/></a>
            <Hamburger />
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media(max-width: 768px) {
       padding: 1rem;
       justify-content: flex-end;
       svg.logo {
           display: none;
       }
   }
`