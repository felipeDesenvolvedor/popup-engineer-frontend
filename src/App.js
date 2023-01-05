import './App.css';
import Overlay from './components/popup/Overlay';

function App() {
  return (
    <>
      <div><h1 onClick={()=>{alert('teste')}}>Conteudo da pagina</h1></div>
      <Overlay />
    </>
  );
}

export default App;
