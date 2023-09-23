import Navbar from "./Components/Navbar"
import NavBottom from './Components/NavBottom';
import Footer from './Components/Footer';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login"
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <Router >
      <Navbar onSelectCategory={handleSelectCategory}/>
      <NavBottom />
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home selectedCategory={selectedCategory}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
      <Footer />
    </Router >
  );
}

export default App;
