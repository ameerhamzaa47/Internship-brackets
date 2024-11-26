import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Component/Register'
import Login from './Component/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Component/Profile'
function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<h1>'404'</h1>} />
      </Routes>
        <ToastContainer />
     </Router>
    </>
  )
}

export default App
