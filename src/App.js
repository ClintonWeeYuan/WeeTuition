import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home/Home'
import MainClass from './Classes/MainClass';
import AboutUs from './AboutUs/AboutUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/mainclass' component={MainClass}/>
          <Route path='/aboutus' component={AboutUs}/>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
