import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Min from "../../../src/components/styles/images/30minutos.jpg"
import styled from 'styled-components'; 
import ferramentasImage from '../../components/styles/images/ferramentas.jpg'; // Importar a imagem diretamente

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

function Minutos(){

  return (
    <>
      <Header position={"relative"}/>
      <Background backgroundImage={ferramentasImage}>
      <img src={Min}></img>
      </Background>
      <Footer/>
    </>
  );

};
 
export default Minutos;