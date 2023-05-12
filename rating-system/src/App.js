import { StarMarking } from "./Components/StarRating";
import './Style/App.css';
import React, { useState } from 'react'
import Dialog from './Components/dialog/Dialog'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <StarMarking />
        <div className="dialogPage">
          <h3>DialogPage</h3>
          <button onClick={() => setShow(!show)}>toggle</button>
          {show && <Dialog />}
      </div>
      </header>
    </div>
  );
}

export default App;
