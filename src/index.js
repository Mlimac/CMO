import React from 'react';
import ReactDOM from 'react-dom/client';
import Page1 from './pages/home/home/Page1';
import Login from './pages/home/login/Loginpage'
import Admin from './pages/home/admin/Admin'
import { BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ErrorPage from './pages/home/error/error';
import Form from './pages/home/form/form';
import FormularioProblema from './pages/home/form/form';
import AdmServico from './pages/home/admin/AdmServico';
import EditarServicos from './pages/home/admin/EditarServicos';
import CriarServico from './pages/home/admin/CriarServico';
import AdmFilial from './pages/home/admin/AdmFilial';
import CriarFilial from './pages/home/admin/CriarFilial';
import EditarFilial from './pages/home/admin/EditarFilial';
import Minutos from "./pages/home/30min"

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
     path:"form",
     element:<FormularioProblema/>,
     },
{   
    path:"admin",
    element:<Admin/>,
    },
{   
    path:"admservico",
    element:<AdmServico/>,
    },
{   
    path:"editarservicos",
    element:<EditarServicos/>,
    },

{   
    path:"CriarServico",
    element:<CriarServico/>,
    },
{   
    path:"AdmFilial",
    element:<AdmFilial/>,
    },
{   
    path:"CriarFilial",
    element:<CriarFilial/>,
    },
{   
    path:"EditarFilial",
    element:<EditarFilial/>,
    },
    ,
{   
    path:"30min",
    element:<Minutos/>,
    },
    

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<RouterProvider router={router}/>
<Outlet/>
</>
);
    
