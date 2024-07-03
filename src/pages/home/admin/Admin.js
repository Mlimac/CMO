import React from 'react';
import Header from '../../../components/Header';
import styled from 'styled-components';
import {useState, useEffect} from "react";
import api from '../../../api/api';
import { Button, Fundo } from '../../../components/styles/logincss';
import ferramentasImage from '../../../components/styles/images/ferramentas.jpg'; // Importar a imagem diretament
import Footer from '../../../components/Footer';

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

function Admin() {
    
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
                window.location.href = "/";
                }
            })
            .catch((error) => {
                sessionStorage.setItem('token', '')
                window.location.href = "/";
                }
            );
        }
        else{
        setRenderizar(false);
        }
    }, []);

    if(renderizar){
        return (
            <> 
                <Header position={"relative"}/>
                <Background backgroundImage={ferramentasImage}>
                    <Fundo>
                        <h1>Página de ADM</h1>
                        <center><br/><br/>
                        <Button> <a href="/AdmServico">Acessar Servicos</a><br/></Button>
                            <Button><a href="/AdmFilial">Acessar Filiais</a></Button>
                        </center><br/><br/>
                    </Fundo>
                </Background>
                <Footer />
            </> 
         );
    }
}

export default Admin;
