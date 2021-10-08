import React from 'react'
import styled from 'styled-components';

import fiwa from '../assets/img/fiwa2.jpg'

const Transition = () => {
    return(
        <Wrapper>
            
            <div className="left">
                <h3>
                    Transition in Product <br/> Design in 3 months
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4>
                    100% GUARANTEED!
                </h4>
            </div>
            
            <div className="right">
                <img src={fiwa} alt="fiwa" />
            </div>
        </Wrapper>
    )
}

export default Transition

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 15%;

    .left {
        max-width: 559px;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
            color: #FFCD00;
            font-size: 28px;
            font-family: 'Eudoxus';
            font-weight: 700;
            br{ 
                display: none;
            }
            
        }
        p {
            color: #FFFFFF;
            font-size: 18px;
            text-align: justify;
            font-weight: 400;
        }
        h4 {
            color: #E8D99A;
            font-size: 35px;
            white-space: nowrap;
        }
    }

    .right {
        img {
            max-width: 554px;
            max-height: 554px;
        }
    }
    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        margin-top: 0;
        padding-left: 3rem;
        padding-right: 3rem;
        .left {
            max-width: 100%;
            /* margin-left: auto;
            display: flex;
            flex-direction: column;
            justify-content: center; */
            h3 {
                color: #FFCD00;
                font-size: 22px;
                font-family: 'Eudoxus';
                text-align: center;
                margin-bottom: 3rem;
                br { 
                    display: initial;
                }
                
            }
            p {
                color: #FFFFFF;
                font-size: 12px;
                text-align: justify;
                font-weight: 400;
                text-align: center;
            }
            h4 {
                color: #E8D99A;
                font-size: 25px;
                text-align: center;
                margin-top: 1.5rem;
            }
        }

        .right {
            display: none;
        }
    }
`