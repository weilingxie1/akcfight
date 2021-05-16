
import React from 'react'
import MatchSheet from './components/MatchSheet'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row align-items-center justify-content-center">          
          <div className="sm-12 md-8 lg-6">
            <h1>Inoue Hai Kihon Competition</h1>            
            <MatchSheet />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
