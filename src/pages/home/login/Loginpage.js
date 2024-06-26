import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Button, InputBox, Fundo } from '../../../components/styles/logincss';
import ferramentasImage from '../../../components/styles/images/ferramentas.jpg'; // Importar a imagem diretamente

const Background = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-image: url(${props => props.backgroundImage}); // Usar a prop para definir a imagem de fundo
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function Login() {
  return (
    <>
      <Header />
      <Background backgroundImage={ferramentasImage}>
        <Fundo>
          <h1>Login</h1>
          <form>
            <InputBox>
              <div className="input-box2">
                <input type="text" placeholder="Email" required />
              </div>
            </InputBox>
            <InputBox>
              <div className="input-box2">
                <input type="password" placeholder="Senha" required />
              </div>
              <Button>Login</Button>
            </InputBox>
          </form>
        </Fundo>
      </Background>
      <Footer />
    </>
  );
}

export default Login;
