import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ResgisterPage from './pages/ResgisterPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage.jsx';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/register" element={<ResgisterPage />} />
        </Routes>
      </App>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
