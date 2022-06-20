import './App.css';
import Home from '../App'     //'./TaskManager'

import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World! task-template</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Hello />);

function App() {

  return (
    <div className='app'>
      <Home />
    </div>
  );
}

export default App;