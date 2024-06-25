import React from 'react';
import Header from '../../../components/Header';

function Cadastro() {
    return (
        <>
        <Header/>
            <div className="background blur"></div> 
            <div className="main">
                <h1>Cadastro</h1>
                <form>
                    <div className="input-box">
                        <input type="text" placeholder="Nome" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Senha" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirmar Senha" required />
                    </div>
                    <button type="submit" className="btn">Cadastro</button>
                </form>
                <div className="register-link">
                    <p>Já possui uma conta? <a href="#">Login</a></p>
                </div>
            </div>
        </>
    );
}

export default Cadastro;
