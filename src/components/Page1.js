import './styles/page1.css';

import Slide from './Slide'
import SM from './assets/images/samsung.png';
import CN from './assets/images/CONSUL.png';
import EL from './assets/images/eletrolux.png';
import PH from './assets/images/PHILCO.png';
import BR from './assets/images/BRTEMP.png';
import LG from './assets/images/LG.png';
import PN from './assets/images/PN.png';



// Função dos Slides


function Page1(){
    
    
    return (
        <>
        <div className='wrapper'>
            <main>
            <section id='home'>
                <section className='module parallax parallax-1'>
                 <div className='conserto'>
                 <h1>Qualidade de Serviço para você!</h1>
                 <h3>Consertamos seu aparelho em 30 minutos</h3>
                 <h4>(041) 98516-3600</h4>
                 <div className='botao'>
                 <button className='cadastro'><a href='#login'>Como podemos ajudar?</a></button>
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
                     {/* Telhas */}

                <div className="tiles-container">
                    <div className="tile">
                        <i className="samsung"></i>
                        <img src={SM} alt='samsung' />
                    </div>
                    <div className="tile">
                        <i className="LG"></i>
                        <img src={LG} alt='lg' />
                    </div>
                    <div className="tile">
                        <i className="consul"></i>
                        <img src={CN} alt='consul' />
                    </div>
                    <div className="tile">
                        <i className="brastemp"></i>
                        <img src={BR} alt='brastemp' />
                    </div>
                    <div className="tile">
                        <i className="electrolux"></i>
                        <img src={EL} alt='electrolux' />
                    </div>
                    <div className="tile">
                        <i className="philco"></i>
                        <img src={PH} alt='Philco' />
                    </div>
                    <div className="tile">
                        <i className="panasonic"></i>
                        <img src={PN} alt='panasonic' />
                    </div>
                </div>


                </section>
                
<section id='localizacao'>
            <section className='module-parallax-parallax-3'>
                



            <div className='local'>
                    <h3>Estamos localizados em dois bairros, <br></br>onde possuimos
                    estacionamento próprio para conforto máximo do cliente!</h3>
                </div>
                <div className='mapa'>
                    
                 <div className='reboucas'>
                    <h1>Rebouças</h1>
                    <h4>Av. Pres. Kennedy, 410 - Rebouças, Curitiba - PR, 80220-200</h4>
                    <iframe title='CMO' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28826.77451840247!2d-49.320364832565886!3d-25.426666214059896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48c9eafed17%3A0x4194004e10920a8f!2sCasa%20do%20Microondas!5e0!3m2!1spt-BR!2sbr!4v1715124704168!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                <div className='santa'>
                    <h1>Santa Felicidade</h1>
                    <h4>R. Saturnino Miranda, 84 - Santa Felicidade, Curitiba - PR, 82030-320</h4>

                    <iframe title='CMO'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28833.137778854765!2d-49.37223222568361!3d-25.40004949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1ae32644999%3A0x112b39ed55ccaa7e!2sCasa%20do%20Microondas!5e0!3m2!1spt-BR!2sbr!4v1715127629757!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </section>


                <section className='module-content '>
                    <div className='container'>
                    </div>
                </section>
            </section>
            
            </main>
        </div>
        </>
   )
}
export default Page1