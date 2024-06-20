import './styles/footer.css';
import facebook from './styles/images/facebook.png';
import instagram from './styles/images/Instagram.png';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="rodape">
          <div className="info">
            <h3>Casa do Microondas</h3>
            <p>Criado pela equipe 7</p>
          </div>
          
          <div className='contatos'>
            <div className='contatos-esquerda'>
              <div className='contato-item'>
                <a href="https://www.facebook.com/felipe.dolberth/">
                  <img src={facebook} alt='Facebook' />
                </a>
              </div>
              
              <div className='contato-item'>
                <a href="https://www.instagram.com/eu.lipehenr/">
                  <img src={instagram} alt='Instagram' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; 2024 Todos os Direitos Reservados - Casa do Micro ondas
        </div>
      </div>
    </footer>
  );
}

export default Footer;