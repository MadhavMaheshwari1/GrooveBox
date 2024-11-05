// src/App.js
import './app.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing';
// import Navbar from './Components/Home/Navbar';

function App() {
  // const token = window.localStorage.getItem('token');

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
