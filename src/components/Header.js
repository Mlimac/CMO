import './styles/Header.css'
import logo from './styles/images/logocmo.png'
import user from './styles/images/Usuario.png'
import './Page1'
import './Modal'

class MobileNavbar{
  constructor(mobileMenu, navList, navLinks){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind()
  }

 handleClick(){
  console.log(this);
  this.navList.classList.toggle(this.activeClass)
 }

  addClickEvent(){
      this.mobileMenu.addEventListener('click', this.handleClick)
  }

  init(){
      if (this.mobileMenu){
          this.addClickEvent();
      }
  
  return this;
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li',

)
mobileNavbar.init();

function Header(){
  
    return (
      <nav>
    <div className="header">
      <div className="header__left">
       <img className='logo' src={logo} alt="logo"></img>
       <h2>Casa do Microondas</h2>
      </div>
      <div className='mobile-menu'>
         <div className='line1'></div>
         <div className='line2'></div>
         <div className='line3'></div>
      </div>
      <div className="header__center">
        <ul className='header__lists'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#servicos'>Serviços</a></li>
            <li><a href='#localizacao'>Localização</a></li>
            
    </ul>
      </div>
      <div className="header__right">
        
      </div>
      <div className='user login'>
  
    <a href='login user'>
      <img className='perfil' src={user} alt="usuario" />
    </a>
  
</div>

    </div>
    </nav>
    )
}

export default Header