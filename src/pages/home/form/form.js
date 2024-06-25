import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

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

  return (
    <>
    <Header/>
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
    <Footer/>
    </>
  );
};

export default FormularioProblema;