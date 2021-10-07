import React from 'react'
import styled from 'styled-components';

const LetsTalk = () => {
    return(
        <Wrapper>
            <h2>
                You got a cool <br />project in mind?
            </h2>
            <a href="#">Let's talk.</a>
            
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
`