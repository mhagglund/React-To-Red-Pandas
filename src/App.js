import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App container-fluid">
      <header className="App-header">
        <h1>Red Pandas</h1>
      </header>
      <div className="App-navigation">
        <a href="/">Home</a>
        <a href="#/about">About</a>
      </div>
      <main className="App-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
