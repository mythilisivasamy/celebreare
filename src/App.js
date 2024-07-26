import './App.css';
import { useState } from 'react';
import Controls from './components/Controls';

function App() {
  const [ctrls, setCtrls] = useState([]);
  return (
    <div className="container">
      <Controls ctrls={ctrls} setCtrls={setCtrls} />
    </div>
  );
}

export default App;
