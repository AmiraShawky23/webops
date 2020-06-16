import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import NavbarScrolled from './Components/Navbar/NavbarScrolled';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop'
import Category from './Components/Category/Category'
// import ImgDetails from './Components/Category/ImgDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import styled from 'styled-components';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import WeOffer from './Components/WeOffer/WeOffer';
import Categories from './Components/Categories/Categories';
import { motion } from "framer-motion";

const Main = styled.main`
  width: 72%;
  margin: 0 auto;
  margin-top: 7rem;

  @media (max-width: 1400px) {
      width: 80%;
  }
  @media (max-width: 1200px) {
      width: 92%;
  }
  @media (max-width: 922px) {
    width: 90%;
    margin-top: 10rem;
  }
`

function App() {

  let backdrop;

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  }
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(true);
  
  useEffect(() => {
    function handleScroll() {
        const yPos = window.scrollY;
        const isScrolledDown = yPos < 100;

        setShouldShowActions(isScrolledDown);
        setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
    window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [isClient]); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }
  const size = useWindowSize();

  return (
    <BrowserRouter>
      <div className="App">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: shouldShowActions ? 1 : 0 }}
          transition={{ opacity: { duration: 0.2 } }}
        >
          <Navbar drawerClickHandler={drawerToggleClickHandler}/>
        </motion.div>
        {
          size.width > 768 &&
          <motion.div
            initial={{ opacity: 0, display: 'none' }}
            animate={{ opacity: shouldShowActions ? 0 : 1, display: shouldShowActions ? 'none' : 'block'  }}
            transition={{ opacity: { duration: 0.2 }, display: { duration: 0.3 } }}
          >
            <NavbarScrolled drawerClickHandler={drawerToggleClickHandler}/>
          </motion.div>
        }
        <SideDrawer show={sideDrawerOpen} />
        { backdrop }
        <Main>
          <Switch>
            {/* remember to create a theme for displaying imgs if needed */}
            <Route path='/' component={Category} exact />
            <Route path='/categories' component={Categories} />
            <Route path='/:category_id' component={Category} />
            {/* <Route path='/:photo_id' component={ImgDetails} /> */}
          </Switch>
        </Main>
        <ScrollTop />
        <WeOffer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
