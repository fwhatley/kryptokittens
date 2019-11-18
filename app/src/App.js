import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getKitties = () => {
    let list = [];
    for(let i = 0; i < 100; i++) {
      let height = getRandomArbitrary(200, 300);
      let width = getRandomArbitrary(300,400);
      let url = `http://placekitten.com/${height}/${width}`;
      list.push(<img src={url} alt="random cat"/>);
    }
    return list;
  }
  
  return (
    <div>
      <div className='container'>
        { getKitties().map((k) => k) }
      </div>
    </div>

  );
}

export default App;
