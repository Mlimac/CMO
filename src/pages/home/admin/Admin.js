import React from 'react';
import Header from '../../../components/Header';
import styled from 'styled-components';
import {useState, useEffect} from "react";
import api from '../../../api/api';

//import { Button, InputBox} from '../../../components/styles/logincss';
//import ferramentasImage from '../../../components/styles/images/ferramentas.jpg'; // Importar a imagem diretamente
import Footer from '../../../components/Footer';
//import { FundoCad } from '../../../components/styles/cadastrocss';
import { Link } from 'react-router-dom';


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
                });
            }
        else{
        setRenderizar(false);
        }
        
    }, []);



    if(renderizar){
        return (
            <>
     
            <Header position={"relative"}/>
            
            <center><br/><br/><a href="/AdmServico">Acessar Servicos</a></center><br/><br/>

            <Footer />
            
            </> 
     
         );
    }
    
}

export default Admin;
