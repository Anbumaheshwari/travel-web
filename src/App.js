import Layout from "./Components/Layout/Layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import Destinations from "./pages/Destinations";


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/destinations" element={<Destinations/>} />
      <Route path="*" element={<Pagenotfound/>} />
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
