import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/header/Header"
import PortFolioItem from "./components/portfolio/PortfolioItem"
import HomePage from "./components/HomePage"
import './App.css';
import "./styles/assets/vendor/nucleo/css/nucleo.css";
import "./styles/assets/vendor/font-awesome/css/font-awesome.min.css";
import "./styles/assets/css/argon-design-system-react.css";


function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/portfolio" component={PortFolioItem} exact={true} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
