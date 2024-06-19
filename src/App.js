import './App.css';
import React from 'react';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout'; 
function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path ='/' element={[<Header/>, <Home/>]}/>
          <Route path ='/checkout' element={[<Header/>, <Checkout/>]}/>
          <Route path='/login' element={[<Header/>, <Home/>]}/>
        </Routes>
     </div>

    </Router>
  );
}

export default App;
