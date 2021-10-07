import React from 'react'
import styled from 'styled-components';

import Fiwa from '../assets/img/fiwa1.jpg'

const Intro = () => {
    return(
        <Wrapper>
            <div className="about">
                <p>Hello, I'm fiwa.</p>
                <h1>Senior<br/>Product<br/> Designer.</h1>
                <small>
                    I train and mentor aspiring Product Designers <br/>
                    to grow and thrive in the industry
                </small>
            </div>
            <div>
                <div className="img-holder">
                    <img src={Fiwa} alt="Fiwa" />
                    <div className="lets-talk">Let's talk.</div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Intro

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-right: 12rem;
  min-height: 700px;

  .about {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: -3rem;

      p {
          color: #FFCD00;
          font-size: 24px;
          font-weight: 700;
      }
      h1 {
          color: #FFFFFF;
          font-size: 60px;
          line-height: 58px;
          font-weight: 700;
          margin: 44px 0 23px 0;
      }
      small {
          color:  #C4C4C4;
          font-size: 14px;
          line-height: 24px;
          font-weight: 400;
      }
  }

  .img-holder {
      position: absolute;
      width: fit-content;
      overflow: hidden;
      border: solid 2px #FFCD00;
      border-top: none;
      top: 0;

      img {
          max-width: 554px;
          max-height: 554px;
          margin: 0 50px;
      }

      .lets-talk {
        margin-top: -5px;
        height: 92px;
        width: 100%;
        background: #FFCD00;
        color: #111111;
        font-size: 48px;
        font-weight: 700;
        display: flex;
        align-items:  center;
        justify-content: center;
      }
  }
`