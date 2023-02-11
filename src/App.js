import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
      <Router>
    <Navbar />
    <Routes>
        <Route exacth path='/'  element={ <Home />} />
        <Route exacth path='/about'  element={ <About />} />
        <Route exacth path='/cocktail/:id'  element={ <SingleCocktail />} />
        <Route exacth path='*'  element={ <Error />} />
        </Routes>
      </Router>
  )
}

export default App
