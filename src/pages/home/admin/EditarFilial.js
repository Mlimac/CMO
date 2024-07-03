import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import {useState, useEffect} from "react";
import icone_editar from  "../../../components/assets/images/editar.png";
import styled from 'styled-components'; 
import { Button, InputBox, Fundo } from '../../../components/styles/logincss';
import ferramentasImage from '../../../components/styles/images/ferramentas.jpg';


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

const URL_Servidor = "http://localhost:5000";
const api = axios.create({
 baseURL: URL_Servidor
})


 

function EditarFilial(){

    var id = 0;
    const putFiliais = async () => {
        if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
            try {

                let nome = document.getElementById("nome").value;
                let bairro = document.getElementById("bairro").value;
                let endereco = document.getElementById("endereco").value;
                let ativo = (document.getElementById("ativo").checked ? 1 : 0);
                let url_mapa = document.getElementById("url_mapa").value;
                let idFilial = document.getElementById("id").value;

                let url = new URL(window.location.href);    
                id = url.searchParams.get("id");
                const { data } = await api.put('/filiais'+id, new URLSearchParams("nome=" + nome + "&bairro=" + bairro + "&endereco=" + endereco + "&ativo=" + ativo + "&url=" + url_mapa + "&id=" + idFilial), {headers: {"x-access-token" : sessionStorage.getItem("token")}} );
                alert("Filial atualizada com sucesso");
            } catch (error) {
                alert(error.response.data);
            }
        }
        else{
            alert("Você não está logado ou seu login expirou.");
            window.location.href = "/";
        }
    }



    const [filiais, setFiliais] = useState([]);

    

    useEffect(() => {
        
        async function fetchData() {
            try {


            let url = new URL(window.location.href);    
            id = url.searchParams.get("id");
            const { data } = await api.get('/filiais' + id);
            setFiliais(data);
            } catch (error) {
            console.log(error);
            }
        }

        fetchData();
    }, []);


    if (filiais.length > 0) {

        return(
            <>

                <Header position={"relative"}/>
                <Background backgroundImage={ferramentasImage}>
    <Fundo>
                    <center>
                        <br/><b>Filial</b><br/><br/>
                        <b>Nome: </b><input type="text" id="nome" defaultValue={filiais[0].nome_filial}></input><br/><br/>
                        <b>Bairro: </b><input type="text" id="bairro" defaultValue={filiais[0].bairro}></input><br/><br/>
                        <b>Endereço: </b><input id="endereco" type="text" defaultValue={filiais[0].endereco}></input><br/><br/>
                        <b>URL Mapa: </b><input id="url_mapa" type="text" defaultValue={filiais[0].url_mapa}></input><br/><br/>
                        {
                            filiais[0].ativo === 1 ? (
                                <>
                                    <br></br><input type="checkbox" defaultChecked id="ativo" name="ativo" value="Ativo" />
                                    <label for="ativo"> Ativo </label><br/><br/>
                                </>
                                
                            ) : (
                                <>
                                    <br></br><input type="checkbox" id="ativo" name="ativo" value="Ativo" />
                                    <label for="ativo"> Ativo </label><br/><br/>
                                </>
                            )
                        }
                        <b>Id: </b><input id="id" type="text" defaultValue={filiais[0].id_filial}></input><br/><br/>
                        <button onClick={putFiliais}>Atualizar</button><br/>
                    </center>
                    </Fundo>
     </Background>
                <Footer/>

            </>

        )
    }
    
}

 export default EditarFilial
