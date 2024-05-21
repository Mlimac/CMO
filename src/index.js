import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Page1 from './components/Page1';
import Footer from './components/Footer';
import Contato from './components/contato';
//Componetização



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
 <Header/>
    <Page1/>
    <Contato/>
<Footer/>
</>
);
    
