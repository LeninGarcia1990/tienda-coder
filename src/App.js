import logo from './logo.svg';
import './App.css';
import NavBar from './components/general/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <>
    <NavBar titulo='VarietyStore'/>  
    <ItemListContainer/>
    </>
  );
}

export default App;
