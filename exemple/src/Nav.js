import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.nav`
  display: flex;
`;

export const Nav = () => (
  <Container>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </Container>
);