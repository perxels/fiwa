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
                            <h3>Bolutife Adeniji</h3>
                            {/* <p>Project Manager at Bolt</p> */}
                        </div>
                        <div className="testimony">
                            I remember somebody saying if you are learning from Fiwa, then I do not need to teach you
                            UIUX again 😂. And yes, Fiwa has made me realize that design chose me. It was a beautiful
                            experience learning under her
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel__item">
                        <div className="testifier">
                            <h3>Oluwabukola Jegede</h3>
                            {/* <p>Project Manager at Bolt</p> */}
                        </div>
                        <div className="testimony">
                            Transitioning from graphics design to product design wasn't easy but learning under Fiwa made
                            it possible by giving me a quality design education and ensuring I worked on real-Life project. <br />
                            If you are thinking of transitioning to product design consider learning from Fiwa.
                        </div>
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <div className="carousel__item">
                        <div className="testifier">
                            <h3>John Doe</h3>
                            <p>Project Manager at Bolt</p>
                        </div>
                        <div className="testimony">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </Carousel.Item> */}
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
            font-size: 1.3rem;
        }
        .carousel__item {
            grid-template-columns: 1fr;
            width: 100%;
            height: 450px;
            padding: 2rem; 

            .testifier {
                margin-left: 30%;
                position: relative;
                h3 {
                    font-weight: 700;
                    font-size: 180%;
                    margin-bottom: 0;
                }
                p {
                    font-weight: 400;
                    font-size: 16px;
                }
                &::before {
                    font-size: 100px;
                    font-weight: 700;
                    left: -5rem;
                    top: -2.5rem;
                }
            }
            .testimony {
                margin: 3rem auto;
                font-weight: 400;
                font-size: 1.1rem;
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
