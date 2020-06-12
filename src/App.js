import React, { useState } from 'react';
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

  @media (max-width: 922px) {
      width: 90%;
  }
`

function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  let backdrop;

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  }

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar drawerClickHandler={drawerToggleClickHandler}/>
        <SideDrawer show={sideDrawerOpen} />
        { backdrop }
        <ScrollTop />
        <Main>
          <Switch>
            {/* remember to create a theme for displaying imgs if needed */}
            <Route path='/' component={Category} exact />
            <Route path='/categories' component={Categories} />
            <Route path='/:category_id' component={Category} />
            <Route path='/:photo_id' component={ImgDetails} />
          </Switch>
        </Main>
        <WeOffer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
