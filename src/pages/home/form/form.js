import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styled from 'styled-components'; 
import { Fundo } from '../../../components/styles/logincss';
import ferramentasImage from '../../../components/styles/images/ferramentas.jpg'; // Importar a imagem diretamente


const FormularioProblema = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ nome, email, assunto });


    setNome('');
    setEmail('');
    setAssunto('');

  };
  
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
  return (
    <>
    <Header/>
    <Background backgroundImage={ferramentasImage}>
    <Fundo>
      <h1>Contate-nos!</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Assunto:</label>
        <textarea
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
     </Fundo>
     </Background>
    <Footer/>
    </>
  );
};

export default FormularioProblema;