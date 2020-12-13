import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
    margin-left: 5%;
    padding: 2%;
    width: 60%;
    height: 90%;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px red;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
    color: black;
    margin-left: 30px;
    font-weight: 700;
    font-size: 3vw;
`;

export const DateAndQuote = () => {
    return(
      <BoxWrapper>
          <Text>Insert Date/Quote Here</Text>
      </BoxWrapper>
    );
};