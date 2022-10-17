import logo from './logo.svg';
import './App.css';
import { useEffect, createContext, useState } from 'react'
import SocketCom from './components/SocketChat';
import { Socket } from 'phoenix';
import { SocketContext } from './context/SocketContext'
import { AuthContext } from './context/AuthContext.js'
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx';
import Register from './components/Register.jsx';
import axios from './axios'
import Container from '@mui/material/Container';
function App({ children }) {
  const socket = new Socket('ws://localhost:10606/socket')
  socket.connect();
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{
      isAuth,
      token,
      setAuth,
      setToken
    }}>
      <SocketContext.Provider value={socket}>
        <div className="App">

          <ResponsiveAppBar></ResponsiveAppBar>
          <Container maxWidth="sm" sx={{
            padding: "20px"
          }}>
            {children}
          </Container>
        </div >
      </SocketContext.Provider >
    </AuthContext.Provider>
  );
}

export default App;
