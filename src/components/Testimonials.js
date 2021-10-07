import React from 'react'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'

const Testimonials = () => {
    return (
        <Section>
            <div className="what">
                What my students are saying
            </div>

            <Carousel pauseOnHover={true}>
                <Carousel.Item>
                    <div className="carousel__item">
                        <div className="testifier">
                            <h3>John Doe</h3>
                            <p>Project Manager at Bolt</p>
                        </div>
                        <div className="testimony">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel__item">
                        <div className="testifier">
                            <h3>John Doe</h3>
                            <p>Project Manager at Bolt</p>
                        </div>
                        <div className="testimony">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel__item">
                        <div className="testifier">
                            <h3>John Doe</h3>
                            <p>Project Manager at Bolt</p>
                        </div>
                        <div className="testimony">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel__item">
                        <div className="testifier">
                            <h3>John Doe</h3>
                            <p>Project Manager at Bolt</p>
                        </div>
                        <div className="testimony">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </Section>
    )
}

export default Testimonials

const Section = styled.section`
    width: 100vw;
    margin: auto -6rem;
    .what{
        margin-top: 8rem;
        margin-bottom: 3rem;
        color: #FFCD00;
        text-align: center;
        font-size: 40px;
        font-weight: 700;
    }
    .carousel__item {
        display: grid;
        grid-template-columns: 2fr 3fr;
        width: 100%;
        height: 500px;
        color: #111111;
        background: #E8D99A;
        padding: 6rem; 

        .testifier {
            margin-left: 6rem;
            position: relative;
            h3 {
                font-weight: 700;
                font-size: 60px;
            }
            p {
                font-weight: 400;
                font-size: 24px;
            }
            &::before {
                content: open-quote;
                font-size: 180px;
                font-weight: 700;
                position: absolute;
                left: -7rem;
                top: -3.7rem;
                color: #000000;
                
            }
        }
        .testimony {
            font-weight: 400;
            font-size: 24px;
        }
    }
    .carousel-indicators .active{
        background-color: #000000;
    }

    @media(max-width: 768px) {
        width: 100%;
        margin: 0;
        .what{
            margin-top: 6rem;
            margin-bottom: 3rem;
            color: #FFCD00;
            text-align: center;
            font-size: 1.7rem;
        }
        .carousel__item {
            grid-template-columns: 1fr;
            width: 100%;
            height: fit-content;
            padding: 2rem; 

            .testifier {
                margin-left: 6rem;
                position: relative;
                h3 {
                    font-weight: 700;
                    font-size: 40px;
                    margin-bottom: 0;
                }
                p {
                    font-weight: 400;
                    font-size: 16px;
                }
                &::before {
                    font-size: 140px;
                    font-weight: 700;
                    left: -6rem;
                    top: -3.5rem;
                }
            }
            .testimony {
                margin: 3rem auto;
                font-weight: 400;
                font-size: 1.2rem;
            }
        }
        .carousel {
            background: #E8D99A;
            padding-bottom: 4rem;
            .carousel-indicators{
                margin-bottom: 4rem;
                justify-content: flex-start;
                margin-left: 2rem;
                
            }
        }
    }
`
