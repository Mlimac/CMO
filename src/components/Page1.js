import './styles/page1.css';

import Slide from './Slide'
import marca from './styles/images/marcas.png'



<<<<<<< HEAD

=======
>>>>>>> 169aa025b90a2a8f32edd6318d7964cf54fa0631
// Função dos Slides



function Page1(){
    
    return (
        <>
        <div className='wrapper'>
            <main>
            <section id='home'>
                <section className='module parallax parallax-1'>
                 <div className='conserto'>
                 <h1>Qualidade de Serviço para você</h1>
<<<<<<< HEAD
                 <h4>(041) 98516-3600</h4>
                 <div className='botao'>
                 <button className='cadastro'><a href='#login'>Em que podemos ajudar?</a></button>
=======
                 <h3>Faça seu orçamento</h3>
                 <h4>(041) 98516-3600</h4>
                 <div className='botao'>
                 <button className='cadastro'><a href='#login'>Faça seu cadastro aqui</a></button>
>>>>>>> 169aa025b90a2a8f32edd6318d7964cf54fa0631
                 </div>
                 </div>    
                </section>
            </section>
            <section className='module-content-1'>
                    <div className='container-1'>
                        <h4>Contate-nos, buscamos e entregamos seu aparelho. Muito obrigado pela sua visita!</h4>
                        <p>Devido a Pandemia do COVID-19 estamos atendendo das 08:30h as 17:30h, e a avaliação na hora é feita até as 16h.</p>
                    </div>
            </section>

            <section id='servicos'>
                <section className='module-parallax-parallax-2'>
                
                 <div className='serviços'>
                <div className='slide-container'>
               <Slide/>
                  </div>
                  </div>
                </section>
            </section>
             <section className='module content'>
                    <div className='marcas'>
                    <img src={marca} alt='marca'></img>
                    </div>
                </section>


            <section id='localizacao'>
            <section className='module-parallax-parallax-3'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div className='local'>
                    <h1>Estamos em dois endereços!</h1>
<<<<<<< HEAD
                    <h1>Cada loja possui estacionamento próprio, para conforto máximo do cliente!</h1>
                </div>
                <div className='mapa'>
                    
                 <div className='reboucas'>
=======
                </div>
                <div className='mapa'>
                    
                 <div className='portao'>
                    <h1>Rebouças</h1>
>>>>>>> 169aa025b90a2a8f32edd6318d7964cf54fa0631
                    <iframe title='CMO' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28826.77451840247!2d-49.320364832565886!3d-25.426666214059896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48c9eafed17%3A0x4194004e10920a8f!2sCasa%20do%20Microondas!5e0!3m2!1spt-BR!2sbr!4v1715124704168!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                <div className='santa'>
<<<<<<< HEAD
                
=======
                    <h1>Santa Felicidade</h1>
>>>>>>> 169aa025b90a2a8f32edd6318d7964cf54fa0631
                    <iframe title='CMO'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28833.137778854765!2d-49.37223222568361!3d-25.40004949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1ae32644999%3A0x112b39ed55ccaa7e!2sCasa%20do%20Microondas!5e0!3m2!1spt-BR!2sbr!4v1715127629757!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </section>


                <section className='module-content '>
                    <div className='container'>
                    </div>
                </section>
            </section>
            <section id='login'>
            <section className='module-parallax-parallax-4'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <form>
            <h1>Nos conte seu problema</h1>
<<<<<<< HEAD
=======
                <h3></h3>
>>>>>>> 169aa025b90a2a8f32edd6318d7964cf54fa0631
                <div className='inputform'>
                    <input type='text' placeholder='Nome'/>
                </div>

                <div className='inputform'>
                    <input type='text' placeholder='Email'/>
                </div>

                <div className='inputform'>
<<<<<<< HEAD
                    <input type='text' placeholder='Podemos Ajudar?'/>
                </div>
                <label>Marcas: </label>
                <select>
                    <option>BRASTEMP</option>
                    <option>CCE</option>
                    <option>CONSUL</option>
                    <option>ELETROLUX</option>
                    <option>FISCHER</option>
                    <option>LG</option>
                    <option>MIDEA</option>
                    <option>PANASONIC</option>
                    <option>PHILCO</option>
                    <option>SAMSUNG</option>
                    <option>SANYO</option>
                    <option>SHARP</option>
                </select>
                <br></br>

                <button className='cad'>Prosseguir</button>

            </form>
            
=======
                    <input type='password' placeholder=''/>
                </div>
                <div className='botaocad'>
                <button className='cad'>Cadastre-se</button>
                </div>
                <br></br>
            </form>
>>>>>>> 169aa025b90a2a8f32edd6318d7964cf54fa0631
            <br></br>
            <br></br>
            <br></br>
            </section>
            </section>
            </main>
        </div>
        </>
   )
}
export default Page1