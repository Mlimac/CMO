import './styles/Header.css'

function Header(){
    return (
    <div className="header">
      <div className="header__left">
       <img className='logo' src="" alt="logo"></img>
       <h2>Casa do Microondas</h2>
      </div>
      <div className="header__center">
        <ul className='header__lists'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#home'>Sobre</a></li>
            <li><a href='#home'>Fotos</a></li>
            <li><a href='#home'>Localização</a></li>
            <li><a href='#home'>Busca e Entrega</a></li>
            <li><a href='#home'>Contato</a></li>
    </ul>
      </div>
      <div className="header__right">
        
      </div>
    </div>
    )
}

export default Header