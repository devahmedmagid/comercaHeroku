import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url('https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #006480;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 10px;
  &:disabled {
    color: #3da6c3;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Do Not Remember The Password?</Link>
          <Link>Create A New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
