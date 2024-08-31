import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Layout from './Layout';

function App () {
  
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </Router>
  );

}

export default App;