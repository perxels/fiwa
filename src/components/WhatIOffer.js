import React, { useState } from 'react'
import styled from 'styled-components';

const WhatIOffer = () => {
    return(
        <Wrapper>
            <h4>WHAT I OFFER</h4>
            <hr />
            {/* <div className="carousel">
                <h3>Product Design Course</h3>
                <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consectetur ad consequatur voluptate reiciendis, veniam earum. Iste eum dolores nihil impedit fuga aliquam laudantium, dolore tempora minima temporibus odio ullam?
                </div>
            </div> */}
            <Carousel 
                title="Product Design Course"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consectetur ad consequatur voluptate reiciendis, veniam earum. Iste eum dolores nihil impedit fuga aliquam laudantium, dolore tempora minima temporibus odio ullam?"
            />
            <hr />
             <Carousel 
                title="Product Design Course"
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
`

const Carousel = ({title, content}) => {
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
    height: 80px;
    overflow: hidden;
    transition: all 1s ease-out;
    margin: 0;

    &.active {
        height: 150px;
        h3::before {
            content: '-';
            font-size: 60px;
            position: absolute;
            left: 0;
            top: -15px;
        }
    }

    color: white;
    h3 {
        text-align: right;
        position: relative;
        color: #E8D89A;
        font-weight: 700;
        font-size: 60px;
        margin: 0;
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
    }
    

`