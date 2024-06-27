import React from 'react';
import Header from '../../../components/Header';
import styled from 'styled-components';
import { Button, InputBox} from '../../../components/styles/logincss';
import ferramentasImage from '../../../components/styles/images/ferramentas.jpg'; // Importar a imagem diretamente
import Footer from '../../../components/Footer';
import { FundoCad } from '../../../components/styles/cadastrocss';
import { Link } from 'react-router-dom';

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

function Cadastro() {
    
    return (
        <>
        <Header/>
        <Background backgroundImage={ferramentasImage}>
            <FundoCad>
            <div className="background blur"></div> 
                <h1>Cadastro</h1>
                <form>
                    <InputBox>
                    <div className="input-box">
                        <input type="text" placeholder="Nome" required />
                    </div>
                    </InputBox>

                    <InputBox>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required />
                    </div>
                    </InputBox>

                    <InputBox>
                    <div className="input-box">
                        <input type="password" placeholder="Senha" required />
                    </div></InputBox>

                    <InputBox>
                    <div className="input-box">
                        <input type="password" placeholder="Confirmar Senha" required />
                    </div>
                    </InputBox>
                    <Button>cadastrar</Button>
                </form>
                <div className="register-link">
                    <p>Já possui uma conta? <Link to="/login">Login</Link></p>
                </div>
                </FundoCad>
            </Background>
            <Footer/>
        </>
    );
}

export default Cadastro;
