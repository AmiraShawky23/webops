import React, { useState, useRef } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop'
import Category from './Components/Category/Category'
import ImgDetails from './Components/Category/ImgDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import styled from 'styled-components';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import WeOffer from './Components/WeOffer/WeOffer';
import Categories from './Components/Categories/Categories';

const Main = styled.main`
  width: 72%;
  margin: 0 auto;
  margin-top: 7rem;

  @media (max-width: 1400px) {
      width: 80%;
  }
  @media (max-width: 922px) {
      width: 90%;
  }
`

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


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

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar drawerClickHandler={drawerToggleClickHandler}/>
        <SideDrawer show={sideDrawerOpen} />
        { backdrop }
        <Main>
          <Switch>
            {/* remember to create a theme for displaying imgs if needed */}
            <Route path='/' component={Category} exact />
            <Route path='/categories' component={Categories} />
            <Route path='/:category_id' component={Category} />
            <Route path='/:photo_id' component={ImgDetails} />
          </Switch>
        </Main>
        <ScrollTop onClick={executeScroll} />
        <WeOffer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
