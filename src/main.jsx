import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,Routes
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Services from './pages/services/Services.jsx'
import About from './pages/about/About.jsx';
import Sales from './pages/sales/Sales.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route path='' element={ <Home/>} />
     <Route path='services' element={ <Services/>} />
     <Route path='about' element={ 
      <About/>} />
     <Route path='sales' element={<Sales/>}/>
    
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
