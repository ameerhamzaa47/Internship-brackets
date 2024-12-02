import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Component/Register'
import Login from './Component/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Component/Profile'
import Header from './Component/Header'
import Payment from './Component/Payment'
import { StripeProvider } from './Component/StripeContext'
import HomePage from './Component/movie'
import PopularMovies from './Component/P Movie'
import TMDB_TV_API from './Component/tv'
import TMDB_PTV_API from './Component/p tv'

function App() {

  return (
    <>
     <Router>
     <StripeProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/payment' element={<Payment/>} />
        {/*  */}
        <Route path='/movie' element={<HomePage/>} />
        <Route path='/pmovie' element={<PopularMovies/>} />
        <Route path='/tv' element={<TMDB_TV_API/>} />
        <Route path='/ptv' element={<TMDB_PTV_API/>} />
        {/*  */}
        <Route path='*' element={<h1>'404'</h1>} />
      </Routes>
        <ToastContainer />
        </StripeProvider>
     </Router>
    </>
  )
}

export default App
