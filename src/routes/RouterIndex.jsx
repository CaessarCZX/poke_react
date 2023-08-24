import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PokemonDetails from '../pages/PokemonDetails'

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pokemon/:id' element={<PokemonDetails />} />
    </Routes>
  )
}

export default RouterIndex
