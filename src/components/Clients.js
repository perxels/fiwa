import React from 'react'
import styled from 'styled-components';

import cchub from '../assets/img/cchub_logo.png'
import perxels from '../assets/img/perxels_logo.png'
import enoverlab from '../assets/img/enoverlab_logo.png'
import google from '../assets/img/google_logo.png'

const Clients = () => {
    return(
        <Wrapper>
            
                <p>
                    Worked with over <span>3000</span> clients, <br />
                    students and startups including
                </p>
            
            <div className="logos">
                <img src={cchub} alt="cchub logo" />
                <img src={perxels} alt="perxels logo" />
                <img src={enoverlab} alt="enoverlab logo" />
                <img src={google} alt="google logo" />
            </div>
        </Wrapper>
    )
}

export default Clients

const Wrapper = styled.section`
    margin: 12rem auto 6rem auto;
    
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
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`