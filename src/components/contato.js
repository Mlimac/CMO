import React from 'react';
import './styles/contato.css';
import whats from './assets/images/icon whats.png';
import telefone from './assets/images/telefone.png';


function Contato() {
  return (
    <>
{/*Seção de contatos*/}    
<div className='contatos-direita'>
  {/*Icon Telefone*/}    
  <div className='telefone-item'>
    <a href="tel:+5541985163602">
        <img src={telefone} alt='Telefone' />
    </a>
  </div>

   {/*Icon Whatsapp*/}  
  <div className='whatsapp-item'>
    <a href="https://wa.me//5541985163602?text=Olá tudo bem? Tenho interesse em fazer um orçamento." target="_blank">
        <img src={whats} alt='WhatsApp' />
    </a>
  </div>
</div>
    </>
  );
}

export default Contato;