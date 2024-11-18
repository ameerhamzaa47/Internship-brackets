import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Header'
import About from './Component/About'
import Contact from './Component/Contact'
import Page404 from './Component/Page404'
import ErrorBoundary from './Component/ErrorBoundary'

function App() {

  return (
    <>
     <BrowserRouter>
     <ErrorBoundary>
    <Header/>
    <hr/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Page404/>}/>
      </Routes>
      </ErrorBoundary>
     </BrowserRouter>
    </>
  )
}

export default App
