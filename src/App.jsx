import React, { useState } from 'react';

import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="app">
//       <header className="app-header">
//         <img src={logo} className="app-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="app-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>facial-detection-sample</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div className="app-nav">
        <a href="/">[ Top ]</a>
        <a href="/girl">[ Girl ]</a>
        <a href="/contact">[ Contact ]</a>
      </div>
      <div className="app-message">
        Welcome to <span className="app-name">facial-detection-sample</span> !!!
      </div>
      <div className="app-clicks">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
