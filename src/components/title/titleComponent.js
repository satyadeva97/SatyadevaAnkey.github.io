import React from "react";
import Typewriter from 'typewriter-effect';
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

function TitleComponent() {
    return (
        <MyTitleMessage>
            <div className="main text-center mb-3">
                Hello, I am
                <br/>
                <span>
            <strong>Satya Deva Ankey</strong>
          </span>
            </div>
            <div>
                <Typewriter
                    options={{
                        strings: ["CS Graduate Student at NEU", "Software Engineer"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
            </div>
        </MyTitleMessage>
    )
}

export default TitleComponent;
