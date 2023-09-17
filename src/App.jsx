import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Favorites from './Favorites';
import Home from './Home'
import Skills from './Skills';
import Spots from './Spots';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favs' element={<Favorites/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='spots' element={<Spots/>}/>
        </Routes>
      <footer style={{textAlign:'center'}}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/favs'>Favorites</Link></li>
          <li><Link to='skills'>Skills</Link></li>
          <li><Link to='spots'>Spots</Link></li>
        </ul>
        <p>&copy;{new Date().getFullYear()} Felix Gerzon</p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;