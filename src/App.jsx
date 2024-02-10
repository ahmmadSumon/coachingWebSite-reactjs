import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App