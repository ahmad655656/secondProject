import './App.css';
import Container from './Components/Container/Container';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Jop_details from './Pages/Jop_details/Jop_details';
import Jop_listing from './Pages/Jop_listing/Jop_listing';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Router>
     <Container>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/jop_listing' element={<Jop_listing />} />
      <Route path='/jop_details' element={<Jop_details />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     </Container>
     </Router>
    </div>
  );
}

export default App;
