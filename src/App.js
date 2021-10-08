import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import Home from "./pages/Home";
import Contact from './pages/Contact';

import PageBg from './assets/img/bg.png'

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/fiwa">
              <Home />
          </Route>
          <Route exact path="/fiwa/contact">
              <Contact />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: black url(${PageBg}) repeat;
  position: relative;
  min-width: 350px;
`