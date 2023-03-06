import React, { useEffect , useState } from 'react';
//style
import './App.css';
//components
import BurgerMenu from './components/BurgerMenu';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Infobar from './components/Infobar';
//fontawesome icons
import './fonts/fontawesome/css/font-awesome.min.css';

const App = () => {
  const [scrollTop , setScrollTop] = useState(0);

  useEffect(()=>{
    document.dir = 'rtl';

    const scrollHandler = ()=>{
      setScrollTop(window.scrollY);
    }

    window.addEventListener('scroll' , scrollHandler);

    return ()=>{
      window.removeEventListener('scroll' , scrollHandler);
    }
  },[]);
  
  return (
      <div>
            <Infobar/>
            <BurgerMenu scrollTop={scrollTop}/>
            <Landing/>
            {/* <Footer/> */}
      </div>
     
   
  );
};

export default App;