import { useState } from 'react'
import './Index.css'
import { useStateLocalStorage } from '../../Hooks/useStateLocalStorage'

import servicioCarrito from '../../servicios/carrito'

export function Index() {
  const [ carrito, setCarrito ] = useStateLocalStorage('carrito', [])

  function borrarCarrito() {
    console.log('borrarCarrito')

    if(confirm('¿Está seguro que quiere eliminar todos los productos del carrito?')) {
        setCarrito([])
    }
  }

  async function generarPedido() {
      if(confirm('¿Está seguro de generar el pedido?')) {
          const pedido = { fyh: new Date().toLocaleString(), pedido: carrito }

          console.error('Enviar pedido...')
          await servicioCarrito.enviar(pedido)
          console.warn('Pedido recibido!')

          setCarrito([])
      }
  }

  
  function incrementarItem(id) {
    console.log('incrementarItem', id)
    const carritoClon = [...carrito]
    const producto = carritoClon.find(p => p.id == id)
    if(producto.cantidad < producto.stock) {
        producto.cantidad++
        setCarrito(carritoClon)
    }
  }

  function decrementarItem(id) {
    console.log('decrementarItem', id)
    const carritoClon = [...carrito]
    const producto = carritoClon.find(p => p.id == id)
    if(producto.cantidad > 1) {
        producto.cantidad--
        setCarrito(carritoClon)
    }
  }  

  function borrarItem(id) {
    console.log('borrarItem', id)

    if(confirm(`¿Está seguro de borrar el producto de id ${id}?`)) {
      const carritoClon = [...carrito]
      const index = carritoClon.findIndex(p => p.id == id)
      carritoClon.splice(index, 1)
      setCarrito(carritoClon)
    }
  }  

  return (
    <div className="carrito">
        <h1>Carrito de Compras</h1>
        <br/><br/>

        { carrito.length
          ?<>
            <button className="carrito__borrar__pedir carrito_borrar" onClick={borrarCarrito}>Borrar</button>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>nombre</th>
                  <th>precio</th>
                  <th>stock</th>
                  <th>cantidad</th>
                  <th>marca</th>
                  <th>foto</th>
                  <th>acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  carrito.map((producto,i) =>
                    <tr key={i}>
                        <td className="centrar">{producto.id}</td>
                        <td>{producto.nombre}</td>
                        <td className="centrar">${producto.precio}</td>
                        <td className="centrar">{producto.stock}</td>
                        <td className="centrar">
                            {producto.cantidad}
                            <button className="btnIncDec" onClick={
                              () => decrementarItem(producto.id)
                            }>-</button>
                            <button className="btnIncDec" onClick={
                              () => incrementarItem(producto.id)
                            }>+</button>
                        </td>
                        <td>{producto.marca}</td>
                        <td><img width="75" src={producto.foto} alt={"foto de " + producto.nombre + ' ' + producto.marca} /></td>
                        <td>
                            <button className="btnBorrar" onClick={
                              () => borrarItem(producto.id)
                            }>Borrar</button>
                        </td>
                    </tr>              
                  )
                }
              </tbody>            
            </table>
            <button className="carrito__borrar__pedir carrito_pedir" onClick={generarPedido}>Pedir</button>
          </>
          : <h2>No se encontraron pedidos para mostrar</h2>
        }
    </div>    
  )
}