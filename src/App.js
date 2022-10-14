import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import Socket from './components/socket';
function App() {
  return (
    <div className="App">
      <Socket />
    </div>
  );
}

export default App;
