import { Routes, Route, useLocation } from 'react-router-dom';
import styles from "./style";
import {Footer, Navbar,} from "./components";
import Home from "./pages/Home";
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Project';
import { useEffect } from 'react';
import Aos from 'aos';
import Partners from './pages/Partners';
import Blog from './pages/Blog';
import Voting from './pages/Voting';
import Gallery from './pages/Gallery';

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
    Aos.init()
  }, [pathname])
  return(

    <>
    <div className="App bg-primary w-full overflow-hidden">
          <Navbar />
        <div className={'mt-20'}>
          <Routes>
            <Route index path='/' element={<Home/>} />
            <Route  path='/about' element={<About/>} />
            <Route  path='/services' element={<Services/>} />
            <Route  path='/contact' element={<Contact/>} />
            <Route  path='/projects' element={<Projects/>} />
            <Route  path='/partners' element={<Partners/>} />
            <Route  path='/blog' element={<Blog/>} />
            <Route  path='/voting' element={<Voting/>} />
            <Route  path='/gallery' element={<Gallery/>} />
          </Routes>
        </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    </>
  )
};

export default App;
