import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/SingleCourse";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/courses/" component = {Courses} />
      <Route exact path = "/courses/:slug" component = {SingleCourse} />
      <Route component = {Error} />
    </Switch>
    </>
  );
}

export default App;
