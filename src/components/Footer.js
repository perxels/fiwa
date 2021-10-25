import React from 'react'
import styled from 'styled-components';

import {ReactComponent as Logo} from '../assets/img/fiwa.svg'
import {ReactComponent as Instagram} from '../assets/img/Instagram.svg'
import {ReactComponent as Dribble} from '../assets/img/Dribble.svg'
import {ReactComponent as Twitter} from '../assets/img/Twitter.svg'
import {ReactComponent as Youtube} from '../assets/img/Youtube.svg'
import {ReactComponent as LinkedIn} from '../assets/img/linkedin.svg'

const Footer = () => {
    return(
        <Wrapper>
            <hr style={{border: '2px solid #FFCD00', bottom: '200px', margin: 'auto -6rem'}} />
            <ContentWrapper>
                <Logo />
                <span>© 2021 Abiodun Fiwa. All rights reserved</span>
                <div className="socials">
                    <a href="https://www.instagram.com/abiodunfiwa/"><Instagram /></a>
                    <a href="https://www.linkedin.com/in/abiodun-fiwa-okunade-6111a914a/"><LinkedIn /></a>
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
        width: 58px;
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