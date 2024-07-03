import React from 'react';
import { useEffect, useState } from 'react';

import styled from 'styled-components';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import api from '../../../api/api';
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

  const [renderizar, setRenderizar] = useState(false);

  //verifica se já está logado e se o token já expirou
  useEffect(() => {
    if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
      api.get('/verificarLogin', { headers: {"x-access-token" : sessionStorage.getItem("token")} })
      .then((response) => {if(response.data.st === "ok") {window.location.href = "/Admin";}})
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

    async function logar(){
      let Email = document.getElementById("email").value;
      let Senha = document.getElementById("password").value;
  
      try {
        const { data } = await api.post('/login', new URLSearchParams("usuario=" + Email + "&senha=" + Senha));
        if(data.autenticado){
          sessionStorage.setItem('token', data.token);
          window.location.href = "/Admin";
        }
          
      } catch (error) {
        alert(error.response.data);
      }
    }

    return (
      <>
        <Header position={"fixed"}/>
        <Background backgroundImage={ferramentasImage}>
          <Fundo>
            <h1>Login</h1>
            <form>
              <InputBox>
                <div className="input-box2">
                  <input id="email" type="text" placeholder="Email" required />
                </div>
              </InputBox>
              <InputBox>
                <div className="input-box2">
                  <input id="password" type="password" placeholder="Senha" required />
                </div>
              </InputBox>
            </form>
            <Button onClick={logar}>Login</Button>
          </Fundo>
        </Background>
        <Footer />
      </>
    );
  }
}

export default Login;
