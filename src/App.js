import 'App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World src/app.js!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

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

export default App;
