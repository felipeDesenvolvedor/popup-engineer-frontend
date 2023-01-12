import './App.css';
import OverlayContainer from './components/popup/OverlayContainer';

function App() {
  return (
    <>
      <div><h1 onClick={()=>{alert('teste');}}>Conteudo da pagina</h1></div>
      <OverlayContainer />
    </>
  );
}

export default App;
