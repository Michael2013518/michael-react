import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//import { MemoryRouter } from 'react-router';

const Home = () => (
    <h1>Home</h1>
);
const Hello = () => (
    <h1>Hello</h1>
);
const About = () => (
    <h1>About us</h1>
);

export default class RouterSample extends React.Component{
    render() {
        return (
            <Router>
           <div style={{ width: "100%", textAlign: "left"}}>
               <ul id="menu">
                   <li>
                       <Link to="/home">Home</Link>
                   </li>
                   <li>
                       <Link to="/hello">Hello</Link>
                   </li>
                   <li>
                       <Link to="about">About</Link>
                   </li>
               </ul>
               <div id="page-container">
                 <Route path="/home" component={Home}></Route>
                 <Route path="/hello" component={Hello}></Route>
                 <Route path="/about" component={About}></Route>
               </div>
           </div> 
           </Router>
        )
    }
}