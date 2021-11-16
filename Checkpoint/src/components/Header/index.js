/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

const Header = ({ empresa, temaEscuro }) => {

  return (
    <header className="sticky-top">
      <nav className={`navbar navbar-expand-sm navbar-${temaEscuro ? 'dark' : 'light'} bg-${temaEscuro ? 'dark' : 'light'}`} aria-label="Third navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{empresa}</a>
          
          <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tituloCards">Trabalhos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#galeria">Playlist</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;