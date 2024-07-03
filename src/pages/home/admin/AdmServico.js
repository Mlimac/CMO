import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import {useState, useEffect} from "react";
import icone_editar from  "../../../components/assets/images/editar.png";
import icone_lixo from  "../../../components/assets/images/lixo.png";
import styled from 'styled-components'; 
import { Button, InputBox, Fundo } from '../../../components/styles/logincss';
import ferramentasImage from '../../../components/styles/images/ferramentas.jpg';

const URL_Servidor = "http://localhost:5000";
const api = axios.create({
   baseURL: URL_Servidor
})

const Background = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-image: url(${props => props.backgroundImage}); // Usar a prop para definir a imagem de fundo
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;



function AdmServico(){


const [servicos, setServicos] = useState([]);


  useEffect(() => {
    async function fetchData() {
      if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
        try {
          
            const { data } = await api.get('/admServicos', {headers: {"x-access-token" : sessionStorage.getItem("token")}});
            setServicos(data);
          
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
            <Background backgroundImage={ferramentasImage}>
              <Fundo>
            
                
            <center>
                <br/><button onClick={() => {window.location.href="/CriarServico"}}>Criar Serviço</button>
                <table>
                <caption>
                <h1>Serviços:</h1>
            </caption>
            <br/>

                <tbody>
                
                  {servicos.map((d, index) => (
                      <> <tr>
                      
                      <th scope="row" style={{"font-weight":"normal"}}>{d.titulo_servico}</th>
                      <td><a href={"/EditarServicos?id=" + d.id_servico}> <img src={icone_editar} height="20px;"/></a></td>
                      
                      </tr><br/></>
                  ))}
                    
                </tbody>
                
                </table>
            </center>
            </Fundo>  
            </Background>
            <Footer/>
    
        </>
    
    )


}


export default AdmServico
