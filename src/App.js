import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About'
import Location from './pages/Location';
import Error404 from './pages/Error404'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;