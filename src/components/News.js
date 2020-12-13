import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
    margin: 1.5%;
    padding: 2%;
    width: 30%;
    height: 70vw;
    display: flex;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px #707887;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
    color: black;
    margin-left: 30px;
    font-weight: 700;
    font-size: 3vw;
`;

export const News = () => {
    return(
      <BoxWrapper>
          <Text>Insert News Here</Text>
      </BoxWrapper>
    );
};