import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';

const URL_Servidor = "http://localhost:5000";
const api = axios.create({
   baseURL: URL_Servidor
})




function CriarServico(){


    var id = 0;
    const postServicos = async () => {
      if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
        try {

          let titulo = document.getElementById("titulo").value;
          let descricao = document.getElementById("descricao").value;
          let url_imagem = document.getElementById("url_imagem").value;
          let ativo = (document.getElementById("ativo").checked ? 1 : 0);
          let ordem = document.getElementById("ordem").value;

          const { data } = await api.post('/servicos', new URLSearchParams("titulo=" + titulo + "&desc=" + descricao + "&img=" + url_imagem + "&ativo=" + ativo + "&ordem=" + ordem), {headers: {"x-access-token" : sessionStorage.getItem("token")}} );
          alert("Serviço criado com sucesso");
        } catch (error) {
          alert(error.response.data);
        }
      }
      else{
        alert("Você não está logado ou seu login expirou.");
        window.location.href = "/";
      }
    }


    

        return(
            <>

                <Header position={"relative"}/>
                    <center>
                        <br/><b>Serviços</b><br/><br/>
                        <b>Titulo: </b><input type="text" id="titulo"></input><br/><br/>
                        <b>Descrição: <br/></b><textarea id="descricao" style={{"width": "600px", "height": "200px"}}></textarea><br/>
                        <b>URL Imagem: </b><input id="url_imagem" type="text"></input><br/>
                        <br></br><input type="checkbox" id="ativo" name="ativo" value="Ativo" />
                        <label for="ativo"> Ativo </label><br/><br/>
                        <b>Ordem: </b><input id="ordem" type="text"></input><br/><br/>
                        <button onClick={postServicos}>Criar</button><br/>
                    </center>
                <Footer/>

            </>

        )

}


export default CriarServico
