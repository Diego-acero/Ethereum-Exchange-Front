import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import EthSender from './components/EthSender/EthSender';
import {StateProvider} from "./contexts/StateContext";

function App() {
  return (
    <StateProvider>
      <div className="App"> 
          <Header />
          <div>
            <EthSender/>
          </div>
      </div>
    </StateProvider>
  );
}

export default App;
