import axios from 'axios';
import Header from "../../../components/Header";
import Footer from '../../../components/Footer';

const URL_Servidor = "http://localhost:5000";
const api = axios.create({
   baseURL: URL_Servidor
})




function CriarFilial(){

    const postFiliais = async () => {
      if("token" in sessionStorage ? sessionStorage.getItem('token').length > 0 : false){
        try {

          let nome = document.getElementById("nome").value;
          let bairro = document.getElementById("bairro").value;
          let endereco = document.getElementById("endereco").value;
          let ativo = (document.getElementById("ativo").checked ? 1 : 0);
          let url_mapa = document.getElementById("url_mapa").value;
          let id = document.getElementById("id").value;

          const { data } = await api.post('/filiais', new URLSearchParams("nome=" + nome + "&bairro=" + bairro + "&endereco=" + endereco + "&ativo=" + ativo + "&url=" + url_mapa + "&id=" + id), {headers: {"x-access-token" : sessionStorage.getItem("token")}} );
          alert("Filial criada com sucesso");
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
                        <br/><b>Filial</b><br/><br/>
                        <b>Nome: </b><input type="text" id="nome"></input><br/><br/>
                        <b>Bairro: </b><input type="text" id="bairro"></input><br/><br/>
                        <b>Endereço: </b><input id="endereco" type="text"></input><br/><br/>
                        <b>URL Mapa: </b><input id="url_mapa" type="text"></input><br/><br/>
                        <b>Ordem: </b><input id="ordem" type="text"></input><br/>
                        <br></br><input type="checkbox" id="ativo" name="ativo" value="Ativo" />
                        <label for="ativo"> Ativo </label><br/><br/>
                        <b>Id: </b><input id="id" type="text"></input><br/><br/>
                        <button onClick={postFiliais}>Criar</button><br/>
                    </center>
                <Footer/>

            </>

        )

}


export default CriarFilial
