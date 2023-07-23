import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Principale from './components/principale';
import Codice from './components/Codice';
import Utente from './components/Utente';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/> }/>
        <Route path='/principale' element={<Principale/>}/>
        <Route path='/codice/:ilMioCodice' element={<Codice/>}/>
        <Route path='/Utenti' element={<Utente/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
        
  );
}

export default App;


