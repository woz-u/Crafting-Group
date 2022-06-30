import './App.css';
import Home from './TaskManager'
import Header from './components/header'
import Footer from './components/footer'
import Breadcrumb from './components/breadcrumb'
function App() {
  return (
   
    <div className='app'>
      <Header />
      <Breadcrumb />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
