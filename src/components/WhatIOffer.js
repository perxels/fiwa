import React, { useState } from 'react'
import styled from 'styled-components';

const WhatIOffer = () => {
    return (
        <Wrapper data-aos="fade-up">
            <h4>WHAT I OFFER</h4>
            <hr />

            <Carousel
                title="Product Design Course"
                content="I am a self-taught UIUX designer and looking at all I went through learning this skill I really can
                        tell you that it is hard learning UIUX design yourself thus the reason I do all it takes to ensure
                        everyone interested in product design gets the best design education they need.
                        I am a product design facilitator and I do this successfully with a hands-on approach, a very
                        elaborate teaching curriculum and simplified practical sessions.
                        "
            />
            <hr />
            <Carousel
                title="Moms Too Can Design Initiative"
                content="A research in the US in 2020 showed that 30% of women turn full housewives just after
                    marriage and this same research shows that one of the top skills a housewife can take up is
                    product design and that is why I introduced the Moms Too Can Design Initiative.
                    This is with a goal of bringing many house wives with/without children into a place of owning a
                    skill, keeping up with their dreams and still having a perfect family.
                    If you are reading this and you are a mother of 2, 3 or more children, I want you to know there is
                    no limit to what you can achieve as a woman and I will gladly walk you through this design path."
            />
            <hr />
            <Carousel
                title="Contract Jobs"
                content="I am open to work on part-time projects which involves building products to solve specific
                        problems in any industry."
            />
            <hr />
            <Carousel
                title="Speaking Engagement"
                content="Apart from designing, one other core skill I possess is good communication skills and I do this
                by speaking about my design experience and other design-related topics at events.
                All you need to do to get me to your event is this, send me a personal email -
                officialfiwa@gmail.com
                Schedule a meeting with me and we get to fix a date that works for both parties
                I will be super-duper excited to join you on a conversation.
                "
            />
            <hr />
        </Wrapper>
    )
}
export default WhatIOffer

const Wrapper = styled.section`
    margin-top: 12rem;
    padding-left: 7rem;
    h4 {
        color: #FFFFFF;
        text-align: right;
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 30px;
    }
    hr {
        border: 0.3px solid rgba(255, 205, 0, 0.3);
    }
    @media(max-width:768px) {
        margin-top: 6rem;
        padding-left: 0rem;
        h4{
            font-size: 18px;
        }
    }
`

const Carousel = ({ title, content }) => {
    const [active, setActive] = useState(false)
    return (
        <CarouselWrapper
            className={active ? 'active' : ''}

        >
            <h3
                className={active ? 'active' : ''}
                onClick={() => setActive(!active)}
            >{title}</h3>
            <div className="content">
                {content}
            </div>
        </CarouselWrapper>
    )
}

const CarouselWrapper = styled.div`
    position: relative;
    max-height: 100px;
    overflow: hidden;
    transition: all 0s ease-out;
    margin: 0;
    padding: 30px 0;

    &.active {
        max-height: 550px;
        transition: all 1s ease-out;
        h3::before {
            content: '-';
            font-size: 60px;
            position: absolute;
            left: 0;
            top: -15px;
        }
        h3 {
            margin: 0 0 35px 0;
        }
    }

    color: white;
    h3 {
        text-align: right;
        position: relative;
        color: #E8D89A;
        font-weight: 700;
        font-size: 50px;
        margin: 0 0 100% 0;
        cursor: pointer;
    }
    h3::before {
        color: #FFCD00;
        content: '+';
        font-size: 50px;
        position: absolute;
        left: 0;
        top: -15px;
    }
    .content{
        max-width: 70%;
        margin-left: auto;
        padding: 0;
        font-size: 14px;
        font-weight: 400;
        color: #C4C4C4;
        line-height: 24px;
    }
    @media(max-width: 768px) {
        position: relative;
        max-height: 80px;
        overflow: hidden;
        transition: all 0s ease-out;
        margin: 0;
        padding: 10px 0;

        &.active {
            max-height: 1000px;
            transition: all 2s ease-out;
            h3::before {
                content: '-';
                font-size: 30px;
                position: absolute;
                left: -2.5rem;
                top: -15px;
            }
            h3 {
                margin: 0 0 25px 2.5rem;
            }
        }

        h3 {
            text-align: right;
            position: relative;
            color: #E8D89A;
            font-weight: 700;
            font-size: 25px;
            margin: 0 0 100% 2.5rem;
        }
        h3::before {
            color: #FFCD00;
            content: '+';
            font-size: 30px;
            position: absolute;
            left: -2.5rem;
            top: -10px;
        }
        .content{
            max-width: 90%;
            margin-left: auto;
            padding: 0;
            font-size: 14px;
            font-weight: 400;
            color: #C4C4C4;
            line-height: 24px;
            text-align: right;
        }
    }

`