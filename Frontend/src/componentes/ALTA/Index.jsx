import { useEffect, useState } from 'react'
import './Index.css'

import servicioProductos from '../../servicios/productos'
import { ObtenerFoto } from './ObtenerFoto'


export function Index() {
  console.warn('Index Alta render')

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

  // estado local del componente
  const [ productos, setProductos ] = useState([])
  const [ producto, setProducto ] = useState(prodClear)
  const [ editarID, setEditarID ] = useState(null)

  useEffect(() => {
    console.warn('Componente alta (montado)')

    ;( async () => {
      // Obtengo los productos del recurso remoto
      const productos = await servicioProductos.getAll()
      console.log(productos)

      // Guardamos esos productos en el recurso local
      setProductos(productos)
    })()

    return () => {
      console.error('Componente alta (desmontado)')
    }
  },[])

  async function borrar(id) {
    console.log('borrar',id)

    if(confirm(`¿Está seguro de borrar el producto de id ${id}?`)) {

      // borramos el producto en el recurso remoto
      const productoEliminado = await servicioProductos.eliminar(id)

      // borramos el producto en el recurso local
      const productosClon = [...productos]    // ... spread operator
      const index = productosClon.findIndex(p => p.id == productoEliminado.id)
      productosClon.splice(index, 1)
      setProductos(productosClon)
    }    
  }

  function cancelar(id) {
    console.log('cancelar',id)

    setEditarID(null)

    setProducto(prodClear)
  }

  function editar(id) {
    console.log('editar',id)

    setEditarID(id)

    const producto = productos.find(p => p.id == id)
    setProducto(producto)
  }

  async function agregar(e) {
      e.preventDefault()

      console.log('agregar producto')

      console.log(producto)

      if(editarID) {
          // actualizamos el producto en el recurso remoto
          const productoActualizado = await servicioProductos.actualizar(editarID, producto)
          console.log(productoActualizado)

          // actualizamos el producto en el recurso local
          const productosClon = [...productos]
          const index = productosClon.findIndex(p => p.id == productoActualizado.id)
          productosClon.splice(index, 1, productoActualizado)  
          setProductos(productosClon)           
          
          setEditarID(null)
      }
      else {
          // guardamos el producto en el recurso remoto
          const productoGuardado = await servicioProductos.guardar(producto)
          console.log(productoGuardado)

          // guardamos el producto en el recurso local
          const productosClon = [...productos]
          productosClon.push(productoGuardado)
          setProductos(productosClon)
      }

      setProducto(prodClear)
  }

  return (
    <div className="alta">
      <h1>Alta de Productos</h1>

      <form className="alta-form" onSubmit={agregar}>
          {/* <!-- campo nombre --> */}
          <div className="input-group">
              <label htmlFor="nombre">nombre</label>
              <input id="nombre" type="text" name="nombre" value={producto.nombre} onChange={
                e => {
                  setProducto({...producto, nombre: e.target.value})
                }
              } />
              <div className="error-detail"></div>
          </div>

          {/* <!-- campo precio --> */}
          <div className="input-group">
              <label htmlFor="precio">precio</label>
              <input id="precio" type="number" name="precio" value={producto.precio} onChange={
                e => setProducto({...producto, precio: +e.target.value})
              } />
              <div className="error-detail"></div>
          </div>

          {/* <!-- campo stock --> */}
          <div className="input-group">
              <label htmlFor="stock">stock</label>
              <input id="stock" type="number" name="stock" value={producto.stock} onChange={
                e => setProducto({...producto, stock: parseInt(e.target.value)})
              } />
              <div className="error-detail"></div>
          </div>

          {/* <!-- campo marca --> */}
          <div className="input-group">
              <label htmlFor="marca">marca</label>
              <input id="marca" type="text" name="marca" value={producto.marca} onChange={
                e => setProducto({...producto, marca: e.target.value})
              }/>
              <div className="error-detail"></div>
          </div>

          {/* <!-- campo categoria --> */}
          <div className="input-group">
              <label htmlFor="categoria">categoría</label>
              <input id="categoria" type="text" name="categoria" value={producto.categoria} onChange={
                e => setProducto({...producto, categoria: e.target.value})
              } />
              <div className="error-detail"></div>
          </div>

          {/* <!-- campo detalles --> */}
          <div className="input-group">
              <label htmlFor="detalles">detalles</label>
              <input id="detalles" type="text" name="detalles" value={producto.detalles} onChange={
                e => setProducto({...producto, detalles: e.target.value})
              }/>
              <div className="error-detail"></div>
          </div>

          {/* <!-- campo foto --> */}
          <div className="input-group">
              <label htmlFor="foto">foto</label>
              <input id="foto" type="text" name="foto" value={producto.foto} onChange={
                e => setProducto({...producto, foto: e.target.value})
              } />

              {/* Obtiene la foto del producto para subir al servidor por input file o drag and drop */}
              <ObtenerFoto />
              
              <div className="error-detail"></div>
          </div>

          {/* <!-- campo envío --> */}
          <div className="input-group">
              <input id="envio" type="checkbox" name="envio" checked={producto.envio} onChange={
                e => setProducto({...producto, envio: e.target.checked})
              }/>
              <label htmlFor="envio">envío</label>
          </div>

          <button className={editarID? 'btnActualizar': 'btnAgregar'}>
            { editarID? 'Actualizar': 'Agregar' }
          </button>
      </form>

      <hr/>

      <h2>Lista de productos disponibles</h2>

      { productos.length > 0 &&
        <table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>nombre</th>
                  <th>precio</th>
                  <th>stock</th>
                  <th>marca</th>
                  <th>categoría</th>
                  <th>detalles</th>
                  <th>foto</th>
                  <th>envío</th>
                  <th>acciones</th>
              </tr>
          </thead>
          <tbody>
            {
              productos.map((producto, i) => 
                <tr key={i}>
                  <td className="centrar">{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td className="centrar">${producto.precio}</td>
                    <td className="centrar">{producto.stock}</td>
                    <td>{producto.marca}</td>
                    <td>{producto.categoria}</td>
                    <td>{producto.detalles}</td>
                    <td><img width="75" src={producto.foto} alt={"foto de " + producto.nombre + ' ' + producto.marca} /></td>
                    <td className="centrar">{producto.envio? 'Si':'No'}</td>
                    <td>
                        <button disabled={editarID} className="borrar-editar btnBorrar" onClick={
                          () => borrar(producto.id)
                        }>Borrar</button>

                        { editarID && (editarID == producto.id)
                          ?<button className="borrar-editar btnCancelar" onClick={
                            () => cancelar(producto.id)
                          }>Cancelar</button>

                          :<button className="borrar-editar btnEditar" onClick={
                            () => editar(producto.id)
                          }>Editar</button>
                        }
                    </td>                
                </tr>
              )
            }
          </tbody>
        </table>
      }
      { !productos.length && <h2>No se encontraron productos para mostrar</h2> }
    </div>
  )
}