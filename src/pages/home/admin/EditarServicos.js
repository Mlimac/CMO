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
        const { data } = await api.post('/servicos', {});
        
        //alert("Serviço editado com sucesso")
      } catch (error) {
        console.log(error);
        alert(error.data);
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
                        <b>Descrição: <br/></b><textarea style={{"width": "600px", "height": "200px"}} defaultValue={servicos[0].titulo_servico}></textarea><br/>
                        <b>URL Imagem: </b><input type="text" defaultValue={servicos[0].url_servico}></input><br/><br/>
                        <button onClick={postServicos}>Atualizar</button>
                    </center>
                <Footer/>

             </>

        )
    }
    
}

 export default EditarServicos
