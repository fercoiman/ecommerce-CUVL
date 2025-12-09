import { useStateLocalStorage } from '../../Hooks/useStateLocalStorage'
import servicioCarrito from '../../servicios/carrito'

export function Index() {
  const [carrito, setCarrito] = useStateLocalStorage('carrito', [])

  function borrarCarrito() {
    if (confirm('¿Está seguro que quiere eliminar todos los productos del carrito?')) {
      setCarrito([])
    }
  }

  async function generarPedido() {
    if (confirm('¿Está seguro de generar el pedido?')) {
      try {
        const pedido = { fyh: new Date().toLocaleString(), pedido: carrito }
        await servicioCarrito.enviar(pedido)
        alert('¡Pedido generado exitosamente!')
        setCarrito([])
      } catch (error) {
        console.error('Error al generar pedido:', error)
        alert('Error al generar el pedido. Por favor, intente nuevamente.')
      }
    }
  }

  function incrementarItem(id) {
    const carritoClon = [...carrito]
    const producto = carritoClon.find(p => p.id == id)
    if (producto && producto.cantidad < producto.stock) {
      producto.cantidad++
      setCarrito(carritoClon)
    } else if (producto) {
      alert('No hay más stock disponible')
    }
  }

  function decrementarItem(id) {
    const carritoClon = [...carrito]
    const producto = carritoClon.find(p => p.id == id)
    if (producto && producto.cantidad > 1) {
      producto.cantidad--
      setCarrito(carritoClon)
    }
  }

  function borrarItem(id) {
    if (confirm(`¿Está seguro de borrar este producto del carrito?`)) {
      const carritoClon = [...carrito]
      const index = carritoClon.findIndex(p => p.id == id)
      carritoClon.splice(index, 1)
      setCarrito(carritoClon)
    }
  }

  const total = carrito.reduce((sum, item) => sum + (item.precio * (item.cantidad || 1)), 0)
  const totalItems = carrito.reduce((sum, item) => sum + (item.cantidad || 1), 0)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Carrito de Compras</h1>
        <p className="text-gray-400">Revisa y gestiona tus productos</p>
      </div>

      {carrito.length > 0 ? (
        <>
          <div className="card mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
                </h2>
                <p className="text-gray-400">Total: <span className="text-2xl font-bold text-indigo-400">${total.toLocaleString()}</span></p>
              </div>
              <button onClick={borrarCarrito} className="btn-danger">
                Vaciar Carrito
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Producto</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Precio Unit.</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Cantidad</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Subtotal</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {carrito.map((producto, i) => {
                    const subtotal = producto.precio * (producto.cantidad || 1)
                    return (
                      <tr key={i} className="hover:bg-slate-700/50">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={producto.foto}
                              alt={producto.nombre}
                              className="w-20 h-20 object-cover rounded-lg"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/80?text=Sin+Imagen'
                              }}
                            />
                            <div>
                              <h3 className="text-white font-semibold mb-1">{producto.nombre}</h3>
                              <p className="text-sm text-gray-400">{producto.marca}</p>
                              <p className="text-xs text-gray-500">Stock: {producto.stock}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-indigo-400 font-semibold">
                          ${producto.precio?.toLocaleString()}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => decrementarItem(producto.id)}
                              className="bg-slate-700 hover:bg-slate-600 text-white w-8 h-8 rounded-lg font-bold transition-colors"
                            >
                              -
                            </button>
                            <span className="text-white font-semibold min-w-[2rem] text-center">
                              {producto.cantidad || 1}
                            </span>
                            <button
                              onClick={() => incrementarItem(producto.id)}
                              disabled={producto.cantidad >= producto.stock}
                              className="bg-slate-700 hover:bg-slate-600 text-white w-8 h-8 rounded-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-white font-bold">
                          ${subtotal.toLocaleString()}
                        </td>
                        <td className="px-4 py-4">
                          <button
                            onClick={() => borrarItem(producto.id)}
                            className="btn-danger text-sm py-1 px-3"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Subtotal:</span>
                  <span className="text-white font-semibold">${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Envío:</span>
                  <span className="text-emerald-400 font-semibold">Gratis</span>
                </div>
                <div className="border-t border-slate-700 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Total:</span>
                    <span className="text-3xl font-bold text-indigo-400">${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <button onClick={generarPedido} className="btn-success w-full md:w-auto text-lg py-4 px-8">
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="card text-center py-16">
          <svg className="w-24 h-24 text-gray-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-white mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-400 mb-6">Agrega productos desde el catálogo para comenzar</p>
          <a href="#/inicio" className="btn-primary inline-block">
            Ir al Catálogo
          </a>
        </div>
      )}
    </div>
  )
}