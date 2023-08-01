import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Projets from './pages/Projets';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/competences' element={<Competences />}></Route>
        <Route path='/projets' element={<Projets />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
