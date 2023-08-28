import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Carrusel/Carrusel'
import List from './components/List/List'
import Foot from './components/Footer/Footer'





function App() {
  return (
    <div className='bg-dark'>
      <Navbar/>
      <Home/>
      <List/>
      <Foot/>
    </div>
  )
}

export default App
