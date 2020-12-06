import React from "react";
import styled from "styled-components";

export const Greeting = () => {
    return(
      <BoxWrapper>
          <Emoji>🦁</Emoji>
          <Text>Good Afternoon!</Text>
      </BoxWrapper>
    );
};


const BoxWrapper = styled.div`
    margin: 20px;
    padding: 10px;
    width: 25%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    box-shadow: 0px 0px 15px 0px #C1C1C1;
    align-items: center;
`;

const Emoji = styled.div`
    margin: 10px 10px 10px 20px;
    font-size: 30px;
`;

const Text = styled.div`
    color: black;
    margin: 10px;
    font-weight: 600;
    font-size: 30px;



`;
