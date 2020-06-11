import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop'
import Category from './Components/Category/Category'
import ImgDetails from './Components/Category/ImgDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        <Switch>

          {/* remember to create a theme for displaying imgs if needed */}
          <Route path='/' component={Category} exact />
          <Route path='/:category_id' component={Category} />
          <Route path='/:photo_id' component={ImgDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
