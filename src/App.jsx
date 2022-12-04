import { Routes, Route } from 'react-router-dom';
import styles from "./style";
import {Footer, Navbar,} from "./components";
import Home from "./pages/Home";
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => (
    <>
    <div className="App bg-primary w-full overflow-hidden">
          <Navbar />
        <div className={'mt-20'}>
          <Routes>
            <Route index path='/' element={<Home/>} />
            <Route index path='/services' element={<Services/>} />
            <Route index path='/about' element={<About/>} />
            <Route index path='/contact' element={<Contact/>} />
            {/* 
            <Route index path='/Projects' element={<Projects/>} /> */}
          </Routes>
        </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    </>
);

export default App;
