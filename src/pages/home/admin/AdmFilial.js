import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import {useState, useEffect} from "react";
import icone_editar from  "../../../components/assets/images/editar.png";
import icone_lixo from  "../../../components/assets/images/lixo.png";

const URL_Servidor = "http://localhost:5000";
const api = axios.create({
   baseURL: URL_Servidor
})




function AdmFilial(){


const [filiais, setFiliais] = useState([]);


  useEffect(() => {
    async function fetchData() {
      if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
        try {
          
            const { data } = await api.get('/filiais', {headers: {"x-access-token" : sessionStorage.getItem("token")}});
            setFiliais(data);
          
        }
        catch (error) {
        console.log(error.response.data);
        window.location.href = "/";
        }
      }
      else window.location.href = "/";
    }       
    
    fetchData();
  }, []);

  
  /*function deleteServico(id_servico_del){

    try {

      const { data } = api.delete('/servicos/' + id_servico_del);
      alert("Serviço removido com sucesso");
    } catch (error) {
      alert(error);
    }
      //<td> <a href="javascript:void(0)" onClick={() => deleteServico(d.id_servico)}><img src={icone_lixo}  height="20px;"/></a></td>
  }*/


    return(
        <>
    
            <Header position={"relative"}/>
                
            <center>
                <br/><button onClick={() => {window.location.href="/CriarFilial"}}>Criar Filial</button>
                <table>
                <caption>
                <h1>Filiais:</h1>
            </caption>
            <br/>

                <tbody>
                
                  {filiais.map((d, index) => (
                      <> <tr>
                      
                      <th scope="row" style={{"font-weight":"normal"}}>{d.nome}</th>
                      <td><a href={"/EditarFilial?id=" + d.id_filial}> <img src={icone_editar} height="20px;"/></a></td>
                      
                      </tr><br/></>
                  ))}
                    
                </tbody>
                
                </table>
            </center>
            
            <Footer/>
    
        </>
    
    )


}


export default AdmFilial
