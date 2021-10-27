import './styles/App.css';
import ClassComponent from './components/ClassComponent';

function App() {
  const nomeEmpresa = 'Rito Games'
  return (
  <div className="App">
    <h3>Convidados: </h3>
    <ClassComponent/>
  </div>
  );
}

export default App;
