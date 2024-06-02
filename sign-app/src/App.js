import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp/SignUp';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
