import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import React from "react"
import Home  from './pages/Home/Home';
import Profile from './pages/Home/Profile';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Navbar/>
          <Home/>
        </Route>
        <Route path = "/profile">
          <Navbar/>
          <Profile/>
        </Route>
        <Route path = "/login">
          {user ? <Redirect to ="/"/> : <Login/>}
        </Route>
        <Route path = "/register">
          {user ? <Redirect to ="/"/> : <Register/>}
        </Route>
      </Switch>
    </Router>
    // <Router>
    //   <div className="parentApp">
    //     <div className="navbarApp">
    //       <Navbar/>
    //     </div>
    //     <div className="pagesApp">
    //       <Home/>
    //     </div>
    //   </div>
    // </Router> 
  );
}

export default App;
