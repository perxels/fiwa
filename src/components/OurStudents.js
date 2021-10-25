import React from 'react'
import styled from 'styled-components';

import Students from '../assets/img/combined.png'

const OurStudents = () => {
    return(
        <Wrapper data-aos="fade-right">
            <div className="inner">
                <h3>
                    70% of my students get Job <br /> immediately after the training
                </h3>
                <p>Building the next generation of <br/>Product Designers</p>
            </div>
        </Wrapper>
    )
}

export default OurStudents
    
const Wrapper = styled.div`
    position: relative;
    max-width: 100vw;
    height: 500px;
    overflow: hidden;
    padding: 0;
    margin: 6rem -6rem 0 -6rem;
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
            font-weight: 700;
        }
        p {
            font-weight: 400;
            font-size: 24px;
            color: #C4C4C4;
            br{
                display: none;
            }
        }
    }
    @media(max-width: 768px) {
        position: relative;
        max-width: 100%;
        height: 500px;
        overflow: hidden;
        padding: 0;
        margin: 3rem 0rem 0 0rem;
        background: url(${Students});
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            
        }
        .inner {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h3 {
                font-size: 1.3rem;
                line-height: 2rem;
                margin-bottom: 16px;
            }
            p {
                font-size: .9rem;
                text-align: center;
                br {
                    display: initial;
                }
            }
        }
    }
`