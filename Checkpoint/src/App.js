import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Trabalhos from './components/Trabalhos';

import './App.scss'


export default class App extends Component {
  nomeEmpresa = 'Checkpoint 1';

  render() {
    return (
      <>
        <Header empresa={this.nomeEmpresa} />
        <main>
          <Banner>
            <h2>Quem sou eu?</h2>
            <p>
              Uma Batata!!!!!
            </p>
          </Banner>
          <h3 className="tituloCards" id="tituloCards">Trabalhos :</h3>
          <Trabalhos>
          </Trabalhos>
          <Galeria />
        </main>
        <div className="background"></div>
      </>
    );
  }
}
