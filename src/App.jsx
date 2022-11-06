import {Routes, Route} from 'react-router-dom' 
import React from 'react';
import './main.css'

//Components :
import Header from './Components/Header';
import PrivateRoutes from './Components/PrivateRoutes';

// Pages : 
import Home from './pages/Home';
import Showreel from './pages/Showreel';
import Realisations from './pages/Realisations';
import Infos from './pages/Infos';
import SingleRealisation from './pages/SingleRealisation';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import AddRealisation from './pages/AddRealisation';
//pages test:
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
    <Header />
      <Routes>
      <Route element={<PrivateRoutes/>}>
        
        <Route path='/' element={<Home />} />
        <Route path='/showreel' element={<Showreel />} />
        <Route path='/realisation' element={<Realisations />} />
        <Route path='/infos' element={<Infos />} />
        <Route path='/realisation/:_id' element={<SingleRealisation />}/>
        <Route path='/logout' element={<h1>Logout</h1>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update' element={<UpdateProduct/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='addrealisation' element={<AddRealisation/>}/>
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
