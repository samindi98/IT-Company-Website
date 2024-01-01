
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import Navbar from './components/Navbar'
import News from './components/News'
import Products from './components/Products'
import Service from './components/Service'
import MyFooter from './components/MyFooter'

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <Service/>
      <About/>
      <Products/>
      <Blog/>
      <News/>
      
      <MyFooter/>
   
    </>
  )
}

export default App
