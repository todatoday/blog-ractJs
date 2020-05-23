import React from 'react';


import './App.css';
import NavBar from './component/NavBar';
import SouNav from './component/SouNav';
import Footer from './component/Footer';
import Home from './component/Home';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './component/Contact';
import About from './component/About';
import Post from './component/Post';

 

function App() {

  return (
    <div className="App"  >
       <Router>
       
       <NavBar />
      <SouNav/>

      <div className="page-content">
         
        
      
    

      <div>
        <Switch>
        <Route path="/" component={Home} exact />
            <Route path="/contact-us" component={Contact} />
            <Route path="/about-us" component={About} />
            <Route path="/post/:slug" component={Post} />
        </Switch>
      </div>



      </div>
      </Router>
  
      <Footer/>

    </div>
  );
}

export default App;
