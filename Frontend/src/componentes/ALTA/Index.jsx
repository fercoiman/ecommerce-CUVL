import { useEffect, useState } from 'react'
import servicioProductos from '../../servicios/productos'
import { ObtenerFoto } from './ObtenerFoto'

export function Index() {
  const prodClear = {
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
    envio: false
  }

  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState(prodClear)
  const [editarID, setEditarID] = useState(null)
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

  async function borrar(id) {
    if (confirm(`¿Está seguro de borrar el producto de id ${id}?`)) {
      try {
        const productoEliminado = await servicioProductos.eliminar(id)
        const productosClon = [...productos]
        const index = productosClon.findIndex(p => p.id == productoEliminado.id)
        productosClon.splice(index, 1)
        setProductos(productosClon)
      } catch (error) {
        console.error('Error al eliminar producto:', error)
        alert('Error al eliminar el producto')
      }
    }
  }

  function cancelar() {
    setEditarID(null)
    setProducto(prodClear)
  }

  function editar(id) {
    setEditarID(id)
    const productoEncontrado = productos.find(p => p.id == id)
    setProducto(productoEncontrado)
  }

  async function agregar(e) {
    e.preventDefault()

    try {
      if (editarID) {
        const productoActualizado = await servicioProductos.actualizar(editarID, producto)
        const productosClon = [...productos]
        const index = productosClon.findIndex(p => p.id == productoActualizado.id)
        productosClon.splice(index, 1, productoActualizado)
        setProductos(productosClon)
        setEditarID(null)
      } else {
        const productoGuardado = await servicioProductos.guardar(producto)
        const productosClon = [...productos]
        productosClon.push(productoGuardado)
        setProductos(productosClon)
      }
      setProducto(prodClear)
    } catch (error) {
      console.error('Error al guardar producto:', error)
      alert('Error al guardar el producto')
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Gestión de Productos</h1>
        <p className="text-gray-400">Agrega, edita o elimina productos del catálogo</p>
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          {editarID ? 'Editar Producto' : 'Nuevo Producto'}
        </h2>

        <form onSubmit={agregar} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre *
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={producto.nombre}
                onChange={e => setProducto({...producto, nombre: e.target.value})}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label htmlFor="precio" className="block text-sm font-medium text-gray-300 mb-2">
                Precio *
              </label>
              <input
                id="precio"
                type="number"
                required
                min="0"
                step="0.01"
                value={producto.precio}
                onChange={e => setProducto({...producto, precio: +e.target.value})}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-300 mb-2">
                Stock *
              </label>
              <input
                id="stock"
                type="number"
                required
                min="0"
                value={producto.stock}
                onChange={e => setProducto({...producto, stock: parseInt(e.target.value)})}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label htmlFor="marca" className="block text-sm font-medium text-gray-300 mb-2">
                Marca *
              </label>
              <input
                id="marca"
                type="text"
                required
                value={producto.marca}
                onChange={e => setProducto({...producto, marca: e.target.value})}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label htmlFor="categoria" className="block text-sm font-medium text-gray-300 mb-2">
                Categoría *
              </label>
              <input
                id="categoria"
                type="text"
                required
                value={producto.categoria}
                onChange={e => setProducto({...producto, categoria: e.target.value})}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label htmlFor="foto" className="block text-sm font-medium text-gray-300 mb-2">
                URL de Foto *
              </label>
              <input
                id="foto"
                type="text"
                required
                value={producto.foto}
                onChange={e => setProducto({...producto, foto: e.target.value})}
                className="input-dark w-full"
              />
              <ObtenerFoto />
            </div>
          </div>

          <div>
            <label htmlFor="detalles" className="block text-sm font-medium text-gray-300 mb-2">
              Detalles
            </label>
            <textarea
              id="detalles"
              rows="3"
              value={producto.detalles}
              onChange={e => setProducto({...producto, detalles: e.target.value})}
              className="input-dark w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="envio"
              type="checkbox"
              checked={producto.envio}
              onChange={e => setProducto({...producto, envio: e.target.checked})}
              className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="envio" className="text-gray-300 font-medium">
              Envío gratis disponible
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="submit" className={editarID ? 'btn-success' : 'btn-primary'}>
              {editarID ? 'Actualizar Producto' : 'Agregar Producto'}
            </button>
            {editarID && (
              <button type="button" onClick={cancelar} className="btn-secondary">
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-6">Lista de Productos</h2>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="text-gray-400 mt-4">Cargando productos...</p>
          </div>
        ) : productos.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">#</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Nombre</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Precio</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Stock</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Marca</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Categoría</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Foto</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Envío</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {productos.map((prod, i) => (
                  <tr key={i} className={editarID === prod.id ? 'bg-indigo-900/30' : 'hover:bg-slate-700/50'}>
                    <td className="px-4 py-3 text-gray-300">{prod.id}</td>
                    <td className="px-4 py-3 text-white font-medium">{prod.nombre}</td>
                    <td className="px-4 py-3 text-indigo-400 font-semibold">${prod.precio?.toLocaleString()}</td>
                    <td className="px-4 py-3 text-gray-300">{prod.stock}</td>
                    <td className="px-4 py-3 text-gray-300">{prod.marca}</td>
                    <td className="px-4 py-3 text-gray-300">{prod.categoria}</td>
                    <td className="px-4 py-3">
                      <img
                        src={prod.foto}
                        alt={prod.nombre}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/75?text=Sin+Imagen'
                        }}
                      />
                    </td>
                    <td className="px-4 py-3">
                      {prod.envio ? (
                        <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs font-semibold">
                          Sí
                        </span>
                      ) : (
                        <span className="bg-gray-500/20 text-gray-400 px-2 py-1 rounded text-xs">
                          No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          disabled={editarID && editarID !== prod.id}
                          onClick={() => borrar(prod.id)}
                          className="btn-danger text-sm py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Borrar
                        </button>
                        {editarID === prod.id ? (
                          <button
                            onClick={cancelar}
                            className="btn-secondary text-sm py-1 px-3"
                          >
                            Cancelar
                          </button>
                        ) : (
                          <button
                            disabled={editarID !== null}
                            onClick={() => editar(prod.id)}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Editar
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400 text-lg">No se encontraron productos para mostrar</p>
          </div>
        )}
      </div>
    </div>
  )
}