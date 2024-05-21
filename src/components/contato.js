import React from 'react';
import './styles/contato.css';
import whats from './styles/images/contato.png';
import telefone from './styles/images/telefone.jpg';


function Contato() {
  return (
    
<div>
      <div className='contatos-direita'>
        <div className='contato-item'>
          <a href="tel:+5541985163602">
            <img src={telefone} alt='Telefone' />
          </a>
        </div>

        <div className='contato-item'>
          <a href="https://wa.me//5541985163602?text=Olá tudo bem? Tenho interesse em fazer um orçamento.">
            <img src={whats} alt='WhatsApp' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contato;