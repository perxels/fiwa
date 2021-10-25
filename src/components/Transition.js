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
                A research in 2020 showed that 30% of women become full housewives immediately after getting married. 
                This research also shows that one of the top skills a housewife can take up is product design. This is 
                why I introduced the Moms Too Can Design Initiative. This is with a goal of bringing many house wives 
                with/without children into a place of owning a skill, keeping up with their dreams and still running the 
                family efficiently. If you are reading this and you are a mother, I want you to know there is no limit to
                what you can achieve as a woman and I will gladly walk you through this design path.
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