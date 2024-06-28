// import React from 'react';
import "./App.css";
import Left from "./components/left/Left";
import Navbar from "./components/navbar/Navbar";
import Right from "./components/right/Right";
import Section from "./components/section/Section";

function App() {
  return (
    <div className="container">
      <div className="header">
        <nav>
          <Navbar/>
        </nav>
        <Section/>
      </div>
      <div className="main">
        <Left/>
        <Right/>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
