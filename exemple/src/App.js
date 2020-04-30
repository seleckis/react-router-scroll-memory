import React, { useRef, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ScrollMemory from 'react-router-scroll-memory';
import Home from './Home';
import Details from './Details';
import About from './About';
import { Nav } from './Nav';

// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
  }
  nav {
    display: flex;
    padding:1rem;
    a {
      margin: .5rem;
    }
  }
`;

const App = () => {
  const elementRef = useRef(null);
  const checkboxId = "inCustomElement";
  const [isChecked, setChecked] = useState(false);
  const onCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div>
      <Nav />
      <GlobalStyle />
      <div>
        <input type="checkbox" id={checkboxId} onChange={onCheckboxChange} />
        <label htmlFor={checkboxId}>In Custom Element</label>
      </div>
      <ScrollMemory elementRef={elementRef} />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} isCustomElement={isChecked} setRef={elementRef} />} />
        <Route path="/detail/:id" component={Details} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
