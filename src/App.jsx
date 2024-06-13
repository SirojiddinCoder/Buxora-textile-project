import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Collection from './pages/collection';
import Contact from './pages/contact';
import Details from './Components/KuzKolleksiya/Details';
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bizhaqimizda" element={<About />} />
        <Route path="/toplamlar" element={<Collection />} />
        <Route path="/boglanish" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Home />} />
      </Routes>
     
    </div>
  );
}

export default App;
