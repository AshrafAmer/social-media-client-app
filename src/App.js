import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Middleware from './Services/Middleware';
import Layout from "./Components/Auth/Layout";
import Home from './Components/Home/Home';
import './App.css';

function App() {
  return (
    <HashRouter>
          <Route exact path="/login" render={() => <Layout load="login" /> } />
          <Route exact path="/register" render={() => <Layout load="register" /> } />
          {/* Form Steps Routes */}
          <Middleware exact path="/" component={Home} posts='all'/>
          <Middleware exact path="/timeline" component={Home} posts='timeline'/>
    </HashRouter>
  );
}

export default App;
