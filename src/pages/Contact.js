import React from 'react'
import styled from 'styled-components';

import Header from '../components/Header';
import Form from '../components/Form';
import Fiwa from '../assets/img/fiwa3.jpg'

const Contact = () => {
    return(
        <Wrapper>
            <Header />
            <div className="context">
                <h3>Wanna Work With Me?</h3>
                <p>This is the best idea you've had today.</p>
                <p>Whatever you want, let's do This!.</p>
            </div>
            <div className="flex">
                <Form />
                <div className="for-img">
                    <img src={Fiwa} alt="Fiwa" />
                </div>
            </div>
            <footer>
                <p>
                    Wanna say Hi? Find me at <br />your Fave Hideout below
                </p>
                <p className="socials">
                    <a href="/contact">Instagram</a><a href="/contact">LinkedIn</a><a href="/contact">Twitter</a>
                </p>
            </footer>
        </Wrapper>
    )
}

export default Contact

const Wrapper = styled.div`
    padding: 2rem 2rem;
    position: relative;
    overflow: hidden;
    min-height: 100vh;

    .context {
        margin-top: 4rem;
        h3{
            font-weight: 700;
            font-size: 1.2rem;
            color: #FFCD00;
            margin-bottom: 20px;
        }
        p {
            color: #C4C4C4;
            line-height: 20px;
        }
    }
    form {
        margin-top: 4rem;
        width: 100%;
    }

    footer {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgba(174, 174, 174, 1);
        font-size: 1.2rem;

        .socials {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 1.5rem;
            a {
                margin: 0.5rem auto;
                text-decoration: none;
                color: #FFCD00;
                font-weight: 400;
            }
        }
    }
    .flex {
        display: initial;
        img {
            display: none;
        }
    }

    @media(min-width: 768px) {
        padding: 3rem 6rem;
        .context {
            h3{
                font-size: 1.5rem;
            }
            p {
                font-size: 1.3rem;
                color: #C4C4C4;
                line-height: 1.5rem;
            }
        }
        .flex {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 3rem;
            max-height: 950px;

            form {
                max-width: 521px;
                input {
                    height: 70px;
                }
                button {
                    padding: 1rem 6rem;
                }
            }

            .for-img {
                height: fit-content;
                margin-top: 4rem;
                max-width: fit-content;
                padding: 2rem;
                border: 1px solid #FFCD00;
                img {
                    display: block;
                    height: 100%;
                    max-height: 500px;
                }
            }
        }
        footer {
            margin-top: 4rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            color: rgba(174, 174, 174, 1);
            font-size: 1.2rem;

            p {
                width: fit-content;
                margin-bottom: 0;
                br {
                    display: none;
                }
            }
            .socials {
                width: fit-content;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-top: 1.5rem;
                a {
                    margin: 0.5rem 5rem 0.5rem 0;
                    text-decoration: none;
                    color: #FFCD00;
                    font-weight: 400;
                }
            }
        }
    }
`