import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer'


function Login() {
  return (
    <>
      <>
        <Header/>
            <div className="background blur"></div> 
            <div className="main">
                <h1>Login</h1>
                <form>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Senha" required />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </>
    </>
  );
}

export default Login;
