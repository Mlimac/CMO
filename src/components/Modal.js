import React, {useState} from 'react';
import './styles/modal.css'
import minutos from './styles/images/30minutos.jpg'

function Modal(){

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }
  return(
      <>
        <button onClick={toggleModal}className='btn-modal'> 
        
        open</button>

        <div className='modal'>
        <div className='overlay'></div>
        <div className='modal-content'>
        <img src={minutos}></img>
        </div>
        </div>        
      </>
  )
}

export default Modal