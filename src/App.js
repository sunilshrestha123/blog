import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import Aboutus from './components/pages/Aboutus';
import Gallery from './components/pages/Gallery';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='contact' element={<Contact />} />
        <Route path='aboutus' element={<Aboutus />} />
        <Route path='gallery' element={<Gallery />} />
      </Routes>
      <div></div>
      {/* footer design for mina blog */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
