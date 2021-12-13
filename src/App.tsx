import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Search from './components/Search'
import Ability from './pages/Ability'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Type from './pages/Type'

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:pokemon" element={<Pokemon />} />
        <Route path="type/:type" element={<Type />} />
        <Route path="ability/:ability" element={<Ability />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App
