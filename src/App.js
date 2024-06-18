import './App.css';
import React from 'react';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path ='/' element={[<Header/>, <Home/>]}/>
          <Route path ='/checkout' element={[<Header/>, <h1>Checkout page</h1>]}/>
          <Route path='/login' element={<h1>Login page</h1>}/>
        </Routes>
     </div>

    </Router>
  );
}

export default App;
