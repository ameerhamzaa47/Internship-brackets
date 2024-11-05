import './App.css'
import Layout from './Flexible Layout'
import Spinner from './LoadingSpinner'
import PhotoGallary from './PhotoGallary'
import ResponsiveNavbar from './Responsive Navbar'

function App() {

  return (
    <>
      <ResponsiveNavbar />
      <PhotoGallary />
      <Layout />
      <Spinner />
    </>
  )
}

export default App
