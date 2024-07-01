import React, { useState, useEffect } from 'react';
import styles from './styles/Header.css'; // Importe o arquivo de estilo CSS

import logo from './styles/images/logocmo.png';
import user from './styles/images/Usuario.png';
import api from "../api/api"

import { Link } from 'react-router-dom';

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }

    return this;
  }
}

const mobileNavbar = new MobileNavbar('.mobile-menu', '.nav-list', '.nav-list li');
mobileNavbar.init();

function Header({position}) {
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [buttonsVisible]);


  function Deslogar(){

    sessionStorage.setItem('token', '');
    window.location.href = "/";

  }

  const [renderizar, setRenderizar] = useState(false);
  useEffect(() => {

    if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
      api.get('/verificarLogin', { headers: {"x-access-token" : sessionStorage.getItem("token")} })
      .then((response) => {
        if(response.data.st === "ok") {
          setRenderizar(true);
        }
        else{
          sessionStorage.setItem('token', '')
          setRenderizar(true);
        }
      })
      .catch((error) => {
         sessionStorage.setItem('token', '')
         setRenderizar(true)
         
         });
    }
    else{
      setRenderizar(true);
    }
      
  }, []);




  if(renderizar){


    return (
   
   

      <nav>
        <div className="header" style={{"--position" : position}}>
          <div className="header__left">
           <Link to="/"> <img className="logo" src={logo} alt="logo"/></Link>
            <h2>Casa do Microondas</h2>
          </div>
          <div className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="header__center">
            <ul className="header__lists">
              <li>
                <a href="/#home" style={{ scrollBehavior: 'smooth' }}>Início</a>
              </li>
              <li>
                <a href="/#servicos" style={{ scrollBehavior: 'smooth' }}>Serviços</a>
              </li>
              <li>
                <a href="/#localizacao" style={{ scrollBehavior: 'smooth' }}>Localização</a>
              </li>
            </ul>
          </div>
          <div className="header__right">
            
            <div className="user" onClick={toggleButtons}>
              <img className="perfil" src={user} alt="usuario" />
              
              {buttonsVisible && (
                <div className="user-buttons">
                  {
                    (
                      ("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false) ? 
                        
                        (
                          <>
                          <Link to='/admin'> <button className="botoes-menu">Admin</button></Link>
                          <button className="botoes-menu" onClick={Deslogar}>Sair</button>
                          </>
                        ) :  
                        
                        (  
                          <Link to='/login'> <button className="botoes-menu">Login</button></Link>
                        ) 
                    )     
                }
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );

  }
  
}

export default Header;
