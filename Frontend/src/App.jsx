import { useState } from 'react'
import './App.css'
import {Navigate, Route,Routes} from 'react-router-dom';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Routes>
            <Route path='/' element={<Navigate to="/login"/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
