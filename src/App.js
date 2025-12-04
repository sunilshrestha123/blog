import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import Aboutus from './components/pages/Aboutus';
import Gallery from './components/pages/Gallery';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Errorpage from './components/pages/Errorpage';
import Myteam from './components/pages/myteam/Myteam';

const App = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <div ClassName='content'>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/blog' element={<Home />} />

          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Errorpage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='myteam' element={<Myteam />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
      {/* <div>
        <Button variant='primary' onClick={handleClick}>
          Coount:{count}
        </Button>
      </div> */}
      {/* footer design for mina blog */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
