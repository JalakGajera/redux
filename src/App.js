import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import FruitDept from './components/FruitDept';
import PacketDept from './components/PacketDept';
import { BrowserRouter  as Router,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route path="/main" component={Main}/>
        <Route path="/frozen-dept" component={FrozenDept} />
        <Route path="/fruit-dept" component={FruitDept} />
        <Route path="/packet-dept" component={PacketDept} />
      </div>
    </Router>
  );
}

export default App;
