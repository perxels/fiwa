import React from 'react'
import styled from 'styled-components';

import {ReactComponent as Logo} from '../assets/img/fiwa.svg'
import {ReactComponent as Instagram} from '../assets/img/Instagram.svg'
import {ReactComponent as Dribble} from '../assets/img/Dribble.svg'
import {ReactComponent as Twitter} from '../assets/img/Twitter.svg'
import {ReactComponent as Youtube} from '../assets/img/Youtube.svg'

const Footer = () => {
    return(
        <>
            <hr style={{border: '2px solid #FFCD00', bottom: '200px', margin: 'auto -6rem'}} />
            <Wrapper>
                <Logo />
                <span>© 2021 Abiodun Fiwa. All rights reserved</span>
                <div className="socials">
                    <Instagram />
                    <Dribble />
                    <Twitter />
                    <Youtube />
                </div>
            </Wrapper>
        </>
    )
}

export default Footer

const Wrapper = styled.footer`
    margin: 25px 6rem 0 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #D9DBE1;
    svg {
        width: 48px;
    }
    .socials {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`