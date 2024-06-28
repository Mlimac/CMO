import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';

const URL_Servidor = "http://localhost:5000";
const api = axios.create({
   baseURL: URL_Servidor
})



function AdmServico(){

    return(
        <>
    
            <Header position={"relative"}/>
                
            <center>
                <table>
                <caption>
                <strong>Serviços:</strong>
            </caption>
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">ID</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Chris</th>
                    <td>HTML tables</td>
                    
                    
                    </tr>
                    <tr>
                    <th scope="row">Dennis</th>
                    <td>Web accessibility</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Sarah</th>
                    <td>JavaScript frameworks</td>
                
                    </tr>
                    <tr>
                    <th scope="row">Karen</th>
                    <td>Web performance</td>
                    
                    </tr>
                </tbody>
                
                </table>
            </center>
            
            <Footer/>
    
        </>
    
    )


}


export default AdmServico
