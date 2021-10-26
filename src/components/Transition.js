import React, {useEffect} from 'react'
import styled from 'styled-components';
import Aos from 'aos';
import "aos/dist/aos.css"

import fiwa from '../assets/img/fiwa2.jpg'

const Transition = () => {
    useEffect(()=>{
        Aos.init({duration : 2000})
    },[])
    return(
        <Wrapper>
            
            <div className="left" data-aos="fade-right">
                <h3>
                    Transition in Product <br/> Design in 3 months
                </h3>
                <p>
                There seems to be a misconception spreading around that the tech world is getting saturated and there is no space for 
                everyone to fit in. Over the years, I have discovered there is always a tech skill you can grab on and most times, 
                the skill you settle for is based on your personality.People also believe if you don’t learn coding or have vast knowledge 
                of Mathematics, you can’t be into Tech. This is false information. It’s not all aspects of the tech industry that require 
                you to learn about coding before you can make money.Product design is one of such skills and it takes consistency and 
                commitment to transition into product design successfully. Over the years I have worked with people from various sectors 
                who have successfully gotten into product design just in the space of 3months and they are living a comfortable life now. 
                Are you thinking of making a transition to tech, product design specifically? Let's talk and get you started today!
                </p>
                <h4>
                    100% GUARANTEED!
                </h4>
            </div>
            
            <div className="right" data-aos="fade-left">
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