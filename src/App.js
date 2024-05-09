import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import Aboutus from './components/pages/Aboutus';
import Gallery from './components/pages/Gallery';

// import Errorpage from './components/pages/Errorpage';
import Myteam from './components/pages/myteam/Myteam';
import './App.css';
const App = () => {
  return (
    <div>
      <div className='header'>
        <Navbar />
      </div>

      <div ClassName='content'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/blog' element={<Home />} />

          <Route path='/home' element={<Home />} />
          {/* <Route path='*' element={<Errorpage />} /> */}
          <Route path='contact' element={<Contact />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='bussiness' element={<Myteam />} />
          <Route path='economy' element={<Myteam />} />
          <Route path='music' element={<Myteam />} />
          <Route path='marketing' element={<Myteam />} />
        </Routes>
      </div>
      {/* <div>
        <Button variant='primary' onClick={handleClick}>
          Coount:{count}
        </Button>
      </div> */}
      {/* footer design for mina blog */}
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
