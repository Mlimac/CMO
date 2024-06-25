import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Poppins", sans-serif;
`;

const Fundo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(0);
  transition: filter 0.3s ease;
  z-index: -1;

  &.blur {
    filter: blur(5px);
  }
`;

const Login2 = styled.div`
  width: 420px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 10px;
  padding: 30px 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 1;
  text-align: center;

  h1 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const InputBox = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.597);
    border-radius: 40px;
    font-size: 16px;
    color: #ffffff5c;
    padding: 0 20px;
    outline: none;
    transition: border-color 0.3s, transform 0.3s;

    &:focus {
      border-color: #ffffff;
      transform: scale(1.05);
    }

    &::placeholder {
      color: white;
    }
  }
`;

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin-bottom: 15px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 45px;
  background: #ffffff53;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 16px;
  color: #000000;
  font-weight: 600;
  margin-top: 10px;
`;

const RegisterLink = styled.div`
  font-size: 14.5px;
  text-align: center;
  margin-top: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login() {
  return (
    <>
      <Header />
      <PageContainer backgroundImage="/src/components/styles/images/ferramentas.jpg">
        <Fundo className="fundo" />
        <Login2>
          <h1>Login</h1>
          <InputBox>
            <input type="text" placeholder="Email" required />
          </InputBox>
          <InputBox>
            <input type="password" placeholder="Senha" required />
          </InputBox>
          <RememberForgot>
            <label>
              <input type="checkbox" /> Lembrar Senha
            </label>
            <a href="#">Esqueceu a senha ?</a>
          </RememberForgot>
          <Btn type="submit">Login</Btn>
          <RegisterLink>
            <p>Não possui cadastro? <a href="#">Cadastre-se</a></p>
          </RegisterLink>
        </Login2>
      </PageContainer>
    </>
  );
}

export default Login;
