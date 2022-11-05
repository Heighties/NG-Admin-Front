import {Routes, Route} from 'react-router-dom' 
import React from 'react';
import Header from './Components/Header';
import './main.css'

// Pages : 
import Home from './pages/Home';
import Showreel from './pages/Showreel';
import Realisations from './pages/Realisations';
import Infos from './pages/Infos';
import SingleRealisation from './pages/SingleRealisation';
import Login from './pages/Login';
import Signup from './pages/SignUp';

function App() {
  return (
    <div className='App'>
    <Header />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/showreel' element={<Showreel />} />
        <Route path='/realisation' element={<Realisations />} />
        <Route path='/infos' element={<Infos />} />
        <Route path='/realisation/:_id' element={<SingleRealisation />}/>
      </Routes>
    </div>
  );
}

export default App;
