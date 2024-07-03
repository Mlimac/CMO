import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import {useState, useEffect} from "react";
import icone_editar from  "../../../components/assets/images/editar.png";
import { Fundo } from '../../../components/styles/logincss';
import ferramentasImage from '../../../components/styles/images/ferramentas.jpg';
import styled from 'styled-components';

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

  return(
      <>
        <Header position={"relative"}/>
        <Background backgroundImage={ferramentasImage}>
          <Fundo>
            <center>
                <br/><button onClick={() => {window.location.href="/CriarFilial"}}>Criar Filial</button>
                <table>
                  <caption>
                    <h1>Filiais:</h1>
                  </caption>
                  <br/>
                  <tbody>
                    {
                      filiais.map((d, index) => (
                          <> 
                            <tr>
                              <th scope="row" style={{"font-weight":"normal"}}>{d.nome_filial}</th>
                              <td><a href={"/EditarFilial?id=" + d.id_filial}> <img src={icone_editar} height="20px;"/></a></td>
                            </tr>
                            <br/>
                          </>
                      ))
                    }
                  </tbody>
                </table>
            </center>
          </Fundo>  
        </Background>
        <Footer/>
      </>
  )
}

export default AdmFilial
