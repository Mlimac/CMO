import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';
import {useState, useEffect} from "react";
import icone_editar from  "../../../components/assets/images/editar.png";

const URL_Servidor = "http://localhost:5000";
const api = axios.create({
 baseURL: URL_Servidor
})


 

function EditarServicos(){

    const postServicos = async () => {
      try {

        let titulo = document.getElementById("titulo").value;
        let descricao = document.getElementById("descricao").value;
        let url_imagem = document.getElementById("url_imagem").value;
        let ativo = (document.getElementById("ativo").checked ? 1 : 0);
        let ordem = document.getElementById("ordem").value;
        
        const { data } = await api.post('/servicos', new URLSearchParams("titulo=" + titulo + "&desc=" + descricao + "&url_imagem=" + url_imagem + "&ativo=" + ativo + "&ordem=" + ordem));
        alert("Serviço editado com sucesso");
      } catch (error) {
        alert(error);
      }
    }


    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {


            let url = new URL(window.location.href);    
            let id = url.searchParams.get("id");
            const { data } = await api.get('/servicos' + id);
            setServicos(data);
            } catch (error) {
            console.log(error);
            }
        }

        fetchData();
    }, []);


    if (servicos.length > 0) {

        return(
            <>

                <Header position={"relative"}/>

                    <center>
                        <br/><b>Serviços</b><br/><br/>
                        <b>Titulo: </b><input type="text" id="titulo" defaultValue={servicos[0].titulo_servico}></input><br/><br/>
                        <b>Descrição: <br/></b><textarea id="descricao" style={{"width": "600px", "height": "200px"}} defaultValue={servicos[0].desc_servico}></textarea><br/>
                        <b>URL Imagem: </b><input id="url_imagem" type="text" defaultValue={servicos[0].url_servico}></input><br/>
                        <br></br><input type="checkbox" id="ativo" name="ativo" value="Ativo" />
                        <label for="ativo"> Ativo </label><br/><br/>
                        <b>Ordem: </b><input id="ordem" type="text" defaultValue={servicos[0].ordem}></input><br/><br/>
                        <button onClick={postServicos}>Atualizar</button><br/>
                        
                    </center>
                <Footer/>

             </>

        )
    }
    
}

 export default EditarServicos
