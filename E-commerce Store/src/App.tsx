import './App.css'
import Card from './Component/Card'
import Navbar from './Component/Navbar'

function App() {

  return (
    <>
    {/* bg-gradient-to-r from-gray-100 to-gray-200 */}
    <div className="min-h-screen ">
      <Navbar/>
      <Card/>
      </div>
    </>
  )
}

export default App
