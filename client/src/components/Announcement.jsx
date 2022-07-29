import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #006480;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Mega Deal! Free Shipping on all orders Over $200</Container>
  );
};

export default Announcement;
