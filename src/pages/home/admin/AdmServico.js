import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import {useState, useEffect} from "react";
import icone_editar from  "../../../components/assets/images/editar.png";

const URL_Servidor = "http://localhost:5000";
const api = axios.create({
   baseURL: URL_Servidor
})




function AdmServico(){


const [servicos, setServicos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get('/servicos');
        setServicos(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

 

  if (servicos.length > 0) {
    console.log(servicos);
    


    return(
        <>
    
            <Header position={"relative"}/>
                
            <center>
                <table>
                <caption>
                <h1>Serviços:</h1>
            </caption>
            <br/>

                <tbody>
                    {servicos.map((d, index) => (
                       <> <tr>
                        <th scope="row" style={{"font-weight":"normal"}}>{d.titulo_servico}</th>
                        <td><a href={"/EditarServicos?id=" + d.id_servico}> <img src={icone_editar} height="20px;"></img></a></td>
                        
                        </tr><br/></>
                    ))}
                    
                </tbody>
                
                </table>
            </center>
            
            <Footer/>
    
        </>
    
    )}


}


export default AdmServico
