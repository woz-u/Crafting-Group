import logo from './logo.svg';
import './all.css';
import index from './tasks-template/index';   //'./src/tasks-template/index' for the lists
function App() {
  return (
 //could be app
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/tasks-template/App.js</code> and save to reload. Or point this to Task.js?
          ./tasks-template/index
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
