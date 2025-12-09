import { useEffect, useState } from 'react'
import servicioProductos from '../../servicios/productos'
import { useStateLocalStorage } from '../../Hooks/useStateLocalStorage'

export function Index() {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useStateLocalStorage('carrito', [])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosData = await servicioProductos.getAll()
        setProductos(productosData)
      } catch (error) {
        console.error('Error al cargar productos:', error)
      } finally {
        setLoading(false)
      }
    }
    cargarProductos()
  }, [])

  function agregar(producto) {
    const carritoClon = [...carrito]
    const id = producto.id
    const productoExistente = carritoClon.find(p => p.id == id)

    if (!productoExistente) {
      producto.cantidad = 1
      carritoClon.push(producto)
    } else {
      productoExistente.cantidad++
      const index = carritoClon.findIndex(p => p.id == id)
      carritoClon.splice(index, 1, productoExistente)
    }
    setCarrito(carritoClon)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Cargando productos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Listado de Productos</h1>
        <p className="text-gray-400">Descubre nuestra amplia selección de productos</p>
      </div>

      {productos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map((producto, i) => (
            <div key={i} className="card group">
              <div className="relative overflow-hidden rounded-lg mb-4 bg-slate-700 aspect-square">
                <img
                  src={producto.foto}
                  alt={`foto de ${producto.nombre} ${producto.marca}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300?text=Sin+Imagen'
                  }}
                />
                {producto.envio && (
                  <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
                    ✓ Envío Gratis
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 min-h-[3rem]">
                {producto.nombre}
              </h3>

              <div className="space-y-2 mb-4">
                <p className="text-2xl font-bold text-indigo-400">
                  ${producto.precio?.toLocaleString()}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    {producto.marca}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    Stock: {producto.stock}
                  </span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">{producto.detalles}</p>
                <p className="text-xs text-gray-500">Categoría: {producto.categoria}</p>
              </div>

              <button
                onClick={() => agregar(producto)}
                disabled={producto.stock === 0}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  producto.stock === 0
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {producto.stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-slate-800 rounded-xl p-8 max-w-md mx-auto">
            <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h2 className="text-2xl font-bold text-white mb-2">No se encontraron productos</h2>
            <p className="text-gray-400">Intenta más tarde o contacta con soporte</p>
          </div>
        </div>
      )}
    </div>
  )
}