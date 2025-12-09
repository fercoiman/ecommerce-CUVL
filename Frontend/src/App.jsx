import { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from './componentes/Navbar'

import { Index as Inicio } from './componentes/INICIO/Index'
import { Index as Alta } from './componentes/ALTA/Index'
import { Index as Carrito } from './componentes/CARRITO/Index'
import { Index as Contacto } from './componentes/CONTACTO/Index'
import { Index as Nosotros } from './componentes/NOSOTROS/Index'
import { Index as Otra } from './componentes/OTRA/Index'

import Footer from './componentes/Footer'

import { HashRouter, Route, Routes } from 'react-router'
import { useStateLocalStorage } from './Hooks/useStateLocalStorage'

function AppContent() {
  const navigate = useNavigate()
  const [carrito] = useStateLocalStorage('carrito', [])
  const [busqueda, setBusqueda] = useState('')

  const totalItems = carrito.reduce((sum, item) => sum + (item.cantidad || 1), 0)

  const handleBuscar = (e) => {
    e.preventDefault()
    if (busqueda.trim()) {
      // Aquí puedes implementar la lógica de búsqueda
      console.log('Buscando:', busqueda)
      // Por ahora solo navegamos a inicio
      navigate('/inicio')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <header className="sticky top-0 z-50 bg-slate-800 border-b border-slate-700 shadow-xl">
        <Navbar />
        <div className="bg-slate-800 border-t border-slate-700">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div 
                onClick={() => navigate('/inicio')}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  EC
                </div>
                <span className="text-white font-bold text-xl hidden sm:block">Ecommerce CUVL</span>
              </div>

              {/* Barra de búsqueda */}
              <div className="flex-1 max-w-2xl">
                <form onSubmit={handleBuscar} className="flex gap-2">
                  <input
                    type="text"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar productos..."
                    className="input-dark flex-1 w-full"
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
                    <span className="hidden sm:inline">Buscar</span>
                    <span className="sm:hidden">🔍</span>
                  </button>
                </form>
              </div>

              {/* Botón Carrito */}
              <button
                onClick={() => navigate('/carrito')}
                className="relative bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                title="Ver carrito"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="alta" element={<Alta />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="otra" element={<Otra />} />
          <Route path='*' element={<Inicio />} />
        </Routes>
      </main>

      <Footer texto="Copyright 2025" />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}

export default App
