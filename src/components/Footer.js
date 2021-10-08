import React from 'react'
import styled from 'styled-components';

import {ReactComponent as Logo} from '../assets/img/fiwa.svg'
import {ReactComponent as Instagram} from '../assets/img/Instagram.svg'
import {ReactComponent as Dribble} from '../assets/img/Dribble.svg'
import {ReactComponent as Twitter} from '../assets/img/Twitter.svg'
import {ReactComponent as Youtube} from '../assets/img/Youtube.svg'

const Footer = () => {
    return(
        <Wrapper>
            <hr style={{border: '2px solid #FFCD00', bottom: '200px', margin: 'auto -6rem'}} />
            <ContentWrapper>
                <Logo />
                <span>© 2021 Abiodun Fiwa. All rights reserved</span>
                <div className="socials">
                    <Instagram />
                    <Dribble />
                    <Twitter />
                    <Youtube />
                </div>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Footer
const Wrapper = styled.footer`
    @media(max-width: 768px) {
        hr {display: none;}
    }
`

const ContentWrapper = styled.div`
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
    @media(max-width: 768px){
        flex-direction: column;
        margin: 25px 1rem 0 1rem;
        height: 130px;
        span {
            font-size: 70%;
            text-align: center;
        }
    }
`