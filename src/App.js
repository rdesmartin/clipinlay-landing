import React from 'react';
import './App.scss';
import { Provider } from 'react-redux'
import configureStore from './store';

import Container from 'react-bootstrap/Container';

import AppNavbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Demo from './pages/Demo.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || 'undefined';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <div className="App">
          <header className="App-header">
            <AppNavbar />
          </header>
          <Container className="mt-2">
            <Switch>
              <Route path="/timeline">
                <div style={{height:"100px"}}/>
                <h1>Timeline</h1>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
    //   <Provider store={configureStore()}>
    //     <Router>
    //       <div className="App">
    //         <header className="App-header">
    //           <AppNavbar />
    //         </header>
    //         <Container className="mt-2">
    //           <Switch>
    //             <Route exact path="/">
    //               <Home />
    //             </Route>
    //             <Route path="/demo">
    //               <Demo />
    //             </Route>
    //           </Switch>
    //         </Container>
    //       </div>
    //     </Router>
    //   </Provider>
  );
}

export default App;
