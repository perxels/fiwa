import React from 'react'
import styled from 'styled-components';

import cchub from '../assets/img/cchub_logo.png'
import perxels from '../assets/img/perxels_logo.png'
import enoverlab from '../assets/img/enoverlab_logo.png'
import google from '../assets/img/google_logo.png'

const Clients = () => {
    return (
        <Wrapper>

            <p>
                Worked with over <span>3000</span> clients, <br />
                students and startups including
            </p>
            {/* <marquee behavior="alternate" direction="up" width="80%">
                <marquee direction="right" behavior="alternate">
                    
                </marquee>
            </marquee> */}
            {/* <div className="marquee"> */}
                <div className="logos">
                    <img src={cchub} alt="cchub logo" />
                    <img src={perxels} alt="perxels logo" />
                    <img src={enoverlab} alt="enoverlab logo" />
                    <img src={google} alt="google logo" />
                </div>
            {/* </div> */}
        </Wrapper>
    )
}

export default Clients

const Wrapper = styled.section`
    margin: 3rem auto 6rem auto;
    
    p {
        color: #C4C4C4;
        font-size: 18px;
        text-align: center;
        span {
            color: #FFCD00;
            font-size: 22px;
        }
    }

    .logos {
        /* width: 150%; */
        margin-left: -20%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        animation: animate 20s linear infinite;
        animation-delay: 0s;
        padding-left: 100%;

        img {
            margin-left: 2rem;
        }
    }
    @keyframes animate{
        0%{
            transform: translate(100%,0);
        }
        50%{
            transform: translate(-100%,0);
        }
        100%{
            transform: translate(100%, 0);
        }
    }
    @media(max-width: 768px) {
        margin: 3rem auto 2rem auto;
        p {
            font-size: 16px;
            span {
                font-size: 20px;
            }
        }
        .logos {
            animation: animate 10s linear infinite;
            img {
                margin: auto 1rem;
            }
        }
    }
`