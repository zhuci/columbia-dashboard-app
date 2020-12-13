import React from "react";
import styled from "styled-components";

export const Greeting = () => {
    return(
      <BoxWrapper>
          <Logo>
          <a href="https://ibb.co/f1J6fz8">
              <img src="https://i.ibb.co/Vj6nRcH/CU-Insignia.png" alt="CU-Insignia" border="0" height="50">
              </img>
            </a>
            </Logo>
          <Text>Good Evening, Columbia!</Text>
      </BoxWrapper>
    );
};

const BoxWrapper = styled.div`
    margin: 1.5%;
    padding: 2%;
    width: 70%;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px red;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    padding: 1.3vw;
    padding-bottom: .6vw;
    background-color: white;
    border-radius: 3vw;
`;

const Text = styled.div`
    color: black;
    margin-left: 30px;
    font-weight: 700;
    font-size: 3vw;
`;
