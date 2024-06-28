import React from 'react';
import Header from '../../../components/Header';
import styled from 'styled-components';
//import { Button, InputBox} from '../../../components/styles/logincss';
//import ferramentasImage from '../../../components/styles/images/ferramentas.jpg'; // Importar a imagem diretamente
import Footer from '../../../components/Footer';
//import { FundoCad } from '../../../components/styles/cadastrocss';
import { Link } from 'react-router-dom';


function Admin() {
    if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
        return (
            <>
     
            <Header position={"relative"}/>
            
            <center><br/><br/><a href="/AdmServico">Acessar Servicos</a></center><br/><br/>

            <Footer />
            
            </> 
     
         );
    }
    else{
        window.location.href = "/";
    }
    
}

export default Admin;
