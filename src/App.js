import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addrecipe from './Components/Addrecipe';
import Searchrecipe from './Components/Searchrecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewrecipe from './Components/Viewrecipe';
function App() {
  return (
   <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Addrecipe/>}/>
       <Route path="/search" exact element={<Searchrecipe/>}/>
       <Route path="/view" exact element={<Viewrecipe/>}/>
     </Routes>
     
     
     </BrowserRouter>
   </div>
  );
}

export default App;
