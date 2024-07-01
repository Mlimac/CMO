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

    var id = 0;
    const putServicos = async () => {
        if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
            try {

                let titulo = document.getElementById("titulo").value;
                let descricao = document.getElementById("descricao").value;
                let url_imagem = document.getElementById("url_imagem").value;
                let ativo = (document.getElementById("ativo").checked ? 1 : 0);
                let ordem = document.getElementById("ordem").value;
                //alert(descricao);
                let url = new URL(window.location.href);    
                id = url.searchParams.get("id");
                const { data } = await api.put('/servicos'+id, new URLSearchParams("titulo=" + titulo + "&desc_servico=" + descricao + "&img_servico=" + url_imagem + "&ativo=" + ativo + "&ordem=" + ordem), {headers: {"x-access-token" : sessionStorage.getItem("token")}} );
                alert("Serviço editado com sucesso");
            } catch (error) {
                alert(error.response.data);
            }
        }
        else{
            alert("Você não está logado ou seu login expirou.");
            window.location.href = "/";
        }
    }


    const [servicos, setServicos] = useState([]);

    

    useEffect(() => {
        
        async function fetchData() {
            try {


            let url = new URL(window.location.href);    
            id = url.searchParams.get("id");
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
                        <b>URL Imagem: </b><input id="url_imagem" type="text" defaultValue={servicos[0].img_servico}></input><br/>
                        {
                            servicos[0].ativo === 1 ? (
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
                        <b>Ordem: </b><input id="ordem" type="text" defaultValue={servicos[0].ordem_apresentacao}></input><br/><br/>
                        <button onClick={putServicos}>Atualizar</button><br/>
                        
                    </center>
                <Footer/>
                
             </>

        )
    }
    
}

 export default EditarServicos
