import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Include/NavBar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact';
import ProductDetail from './components/Product/ProductDetail';

function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
          <Route path="" element={< Home />}>Home</Route>
          <Route path='/pages/blog' element={< Blog />}>Blog</Route>
          <Route path='/pages/ProductPage' element={< ProductPage />}>Product</Route>
          <Route path='/pages/contact' element={< Contact />}>Contact</Route>
          {/* Dynamic */}
          <Route path='/ProductDetail/:id' element={< ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
