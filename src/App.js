import 'App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import AddTask from './tasks-template/AddTask';
// import editTask from './tasks-template/EditTask';
import Home from './TaskManager'
import index from './tasks-template/index';


function App() {
  return (
 //could be app
    <div className="App"> 
      <header className="App-header">
        <h1>
          Did it work?
        </h1>
            </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

App.js
