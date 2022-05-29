import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addrecipe from './Components/Addrecipe';
import Searchrecipe from './Components/Searchrecipe';
function App() {
  return (
   <div>
     <Addrecipe/>
     <Searchrecipe/>
   </div>
  );
}

export default App;
