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
          <logo></logo>
          <Banner>
            <img className="imagem" src="https://i.imgur.com/x1BTn14.jpeg" alt="yup"/>
            <h2>Quem sou eu?</h2>
            <p>
              Eu me chamo Breno Rodrigues Souza, eu tenho 18 anos, quero estudar ciencia da computação e estou estudando na DH Programação no Curso CTD. 
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
};
