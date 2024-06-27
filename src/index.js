import React from 'react';
import ReactDOM from 'react-dom/client';
import Page1 from './pages/home/home/Page1';
import Login from './pages/home/login/Loginpage'
import Admin from './pages/home/admin/Admin'
import { BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ErrorPage from './pages/home/error/error';
import Cadastro from './pages/home/cadastro/Cadastro';
import Form from './pages/home/form/form';
import FormularioProblema from './pages/home/form/form';

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
 {
     path:"form",
     element:<FormularioProblema/>,
     },
{   
    path:"admin",
    element:<Admin/>,
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<RouterProvider router={router}/>
<Outlet/>
</>
);
    
