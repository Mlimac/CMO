import React from 'react';
import ReactDOM from 'react-dom/client';
import Page1 from './pages/home/home/Page1';
import Login from './pages/home/login/Loginpage'
import { BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ErrorPage from './pages/home/error/error';
import Cadastro from './pages/home/cadastro/Cadastro';

//Componetização

 const router = createBrowserRouter([{
     path: "/",
     element:<Page1/>,
     errorElement:<ErrorPage/>
 },
 {
     path:"login",
     element:<Login/>,
     },
 {
     path:"cadastro",
     element:<Cadastro/>,
     },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<RouterProvider router={router}/>
<Outlet/>
</>
);
    
