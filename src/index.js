import ReactDOM from 'react-dom/client';
import {  BrowserRouter, Routes, Route,} from "react-router-dom";
import App from "./App";
// import ReactDOM from 'react-dom'
import './index.css';
import Home from './home';
import About from './about';
import Features from './features';
import TaskManager from './TaskManager';
import './App.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="features" element={<Features />} />
    </Routes>
  </BrowserRouter>
);
// const Index = ({ pathname }) => {
//   switch (pathname) {
//     case '/about':
//       return <About />;
//     case '/features':
//       return <Features />;
//     case '/home':
//       return <Home />  
//     default:
//       return <TaskManager />;
//   }};


// let pathname = window.location.pathname;

// ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

// window.addEventListener('popstate', () => {
//   pathname = window.location.pathname;
// });
// export default Index;

