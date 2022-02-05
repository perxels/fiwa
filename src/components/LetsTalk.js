import React from 'react'
import styled from 'styled-components';

const LetsTalk = () => {
    return(
        <Wrapper>
            <h2>
                You got a cool <br />project in mind?
            </h2>
            <a href="https://api.whatsapp.com/send?phone=2348135369680&text=Hello%20Fiwa%2C%20I%20would%20like%20to%20transition%20into%20UIUX%20Design.%20What%20is%20the%20next%20process%3F">Let's talk.</a>
            
        </Wrapper>
    )
}

export default LetsTalk

const Wrapper = styled.section`
    border: 2px solid #FFCD00;
    margin: 6rem;
    height: 450px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    h2 {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        margin: auto;
    }

    a {
        padding: 22px 100px;
        background: #FFCD00;
        margin: auto;
        font-weight: 700;
        font-size: 36px;
        text-decoration: none;
        color: #111111;
    }
    @media(max-width: 768px) {
        border: 1px solid #FFCD00;
        margin: 4rem 1.5rem;
        padding: 3rem 2rem 1rem 2rem;
        height: 350px;
        grid-template-columns: 1fr;

        h2 {
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 2.5rem;
            text-align: center;
        }

        a {
            width: 100%;
            text-align: center;
            padding: 10px 0;
            font-size: 1.5rem;
        }
    }
`