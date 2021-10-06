import React from 'react'
import styled from 'styled-components';

import Students from '../assets/img/combined.png'

const OurStudents = () => {
    return(
        <Section>
            <Wrapper>
                <div className="inner">
                    <h3>
                        70% of my students get Job <br /> immediately after the training
                    </h3>
                    <p>Building the next generation of Product Designers</p>
                </div>
            </Wrapper>
            <div className="footer">
                What my students are saying
            </div>
        </Section>
    )
}

export default OurStudents

const Section = styled.section`
    .footer{
        margin-top: 8rem;
        margin-bottom: 3rem;
        color: #FFCD00;
        text-align: center;
        font-size: 40px;
    }
`
    
const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 500px;
    overflow: hidden;
    padding: 0;
    margin: auto -6rem;
    margin-top: 6rem;
    background: url(${Students});
    img {
        width: 100%;
        height: 100%;
        object-fit: center;
        
    }
    .inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background:  */

        h3 {
            font-size: 40px;
            color: #FFCD00;
            text-align: center;
            line-height: 50px;
            margin-bottom: 16px;
        }
        p {
            font-weight: 400;
            font-size: 24px;
            color: #C4C4C4;
        }
    }
`