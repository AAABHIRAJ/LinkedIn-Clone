import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';


function App() {


  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route exact path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
