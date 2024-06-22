import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
