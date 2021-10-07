import React, { useState } from 'react'
import styled from 'styled-components';

const WhatIOffer = () => {
    return (
        <Wrapper>
            <h4>WHAT I OFFER</h4>
            <hr />

            <Carousel
                title="Product Design Course"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <hr />
            <Carousel
                title="Moms Too Can Design Initiative"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consectetur ad consequatur voluptate reiciendis, veniam earum. Iste eum dolores nihil impedit fuga aliquam laudantium, dolore tempora minima temporibus odio ullam?"
            />
            <hr />
            <Carousel
                title="Contract Jobs"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consectetur ad consequatur voluptate reiciendis, veniam earum. Iste eum dolores nihil impedit fuga aliquam laudantium, dolore tempora minima temporibus odio ullam?"
            />
            <hr />
            <Carousel
                title="Speaking Engagement"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consectetur ad consequatur voluptate reiciendis, veniam earum. Iste eum dolores nihil impedit fuga aliquam laudantium, dolore tempora minima temporibus odio ullam?"
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
        max-height: 250px;
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
            max-height: 400px;
            transition: all 1s ease-out;
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