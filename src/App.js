import './App.css';
import Home from './TaskManager'
import Header from './components/header'
import Footer from './components/footer'
import about from './about'
function App() {
  return (
   
    <div className='app'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
