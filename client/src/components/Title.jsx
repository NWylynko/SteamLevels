import React from "react";
import Font from 'react-font'
import styled from "styled-components";

const Header = styled.h1`
  font-size: 5vw;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 42px;
  }
`;

const Title = ({children}) => (
  <Font family="Londrina Shadow">
    <Header>{children}</Header>
  </Font>
);

export default Title
