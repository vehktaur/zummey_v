import './App.css';
import ScrollToTop from './ScrollToTop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from './components/Order/Order';
import Recipt from './components/Recipt/Recipt';
import Location from './components/Location/Location';
import ReactGA from 'react-ga';

import { Provider } from 'react-redux';
import store from '../src/components/ReciptRedux/store';



import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TRACKING_ID = 'G-MPW3EMPFEY';
ReactGA.initialize(TRACKING_ID);
// important constants

// const MAP_PUBLIC_TOKEN="pk.eyJ1IjoiZWxpamFobWFwYm94cHJvamVjdCIsImEiOiJjbHN1aGp6MjkxZGR5Mm5xa2RwanpjdnZ4In0.z_q2Zqw0h3cOeJ_FWIVqPA";
// const MAP_SECRET_TOKEN="sk.eyJ1IjoiZWxpamFobWFwYm94cHJvamVjdCIsImEiOiJjbHN2cGJrZzUwcDJuMnFxdHA1OTE2MThlIn0.RnwcnuR3yD4ZTLIa39EA6Q"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<Order />} />
              <Route path="/receipt" element={<Recipt />} />
              <Route path="/location" element={<Location />} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
