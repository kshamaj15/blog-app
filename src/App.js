import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import main from './Assets/work_desk.jpeg';

import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <img width="100%" src={main}/>
      <div className="about">
        <p>You can learn blogs about Data Structure, Algorithms and other tech Skills</p>
        <p>Tech Blog provide you a platform to create and publish your own blogs.</p>
      </div>
    </div>
  );
}

export default App;
