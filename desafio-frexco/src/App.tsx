import React from 'react';
import './App.css';
import { Container } from '@mui/system';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Estoque from './pages/Estoque';
import Nav from './components/Nav';



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/produtos" element ={<Produtos/>}/>
          <Route path="/estoque" element ={<Estoque/>}/>
        </Routes>
      </BrowserRouter>
    
  
    <Container maxWidth="sm">
      Aqui vai ficar o Conteúdo
    </Container>
    </>
  );
}

export default App;
