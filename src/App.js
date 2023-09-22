import './App.css';
import Login from './component/Login';
import Singup from './component/Singup';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/register' element = {<Singup/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/' element = {<Home/>}/>
    
    
    </Routes>
    
    </Router>
    </div>
  );
}

export default App;
