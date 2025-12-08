import { useEffect, useState } from 'react'
import './Index.css'

import servicioProductos from '../../servicios/productos'
import { useStateLocalStorage } from '../../Hooks/useStateLocalStorage'

export function Index() {
  // estado local del componente
  const [ productos, setProductos ] = useState([])
  //const [ carrito, setCarrito ] = useState([])
  const [ carrito, setCarrito ] = useStateLocalStorage('carrito', [])

  // Hook de efecto
  useEffect(() => {
    console.warn('Componente inicio (montado)')

    ;( async () => {
      // Obtengo los productos del recurso remoto
      const productos = await servicioProductos.getAll()
      console.log(productos)

      // Guardamos esos productos en el recurso local
      setProductos(productos)
    })()

    return () => {
      console.error('Componente inicio (desmontado)')
    }
  },[])


  function agregar(producto) {
    //console.log(producto)
    const carritoClon = [...carrito]
    const id = producto.id

    const productoExistente = carritoClon.find(p => p.id == id)
    console.log(productoExistente)

    if(!productoExistente) {
        producto.cantidad = 1
        carritoClon.push(producto)
    }
    else {
        productoExistente.cantidad++
        const index = carritoClon.findIndex(p => p.id == id)
        carritoClon.splice(index, 1, productoExistente)
    }
    setCarrito(carritoClon)
  }

  return (
    <div className="inicio">
        <div className="section-cards">
            <div className="section-cards-header">
                <h1>Listado de Productos</h1>
            </div>

            {/* <!-- https://www.iconfinder.com/free_icons --> */}
            <div className="section-cards-body">
                {
                  productos.length                  
                    ? productos.map((producto,i) => 
                      <section key={i}>
                          <h3>{producto.nombre}</h3>
                          <img src={producto.foto} alt={"foto de " + producto.nombre + ' ' + producto.marca}/>
                          <p><b>Precio: </b>${producto.precio}</p>
                          <p><b>Stock: </b>{producto.stock}</p>
                          <p><b>Marca: </b>{producto.marca}</p>
                          <p><b>Categoría: </b>{producto.categoria}</p>
                          <p><b>Detalles: </b>{producto.detalles}</p>
                          <br/> 
                          <p><b style={{color:'gold'}}>Envío: </b>{producto.envio? 'Si' : 'No'}</p>

                          <button className="btnComprar" onClick={
                            () => agregar(producto)
                          }>Agregar al carrito</button>
                      </section>              
                    )
                    : <h2>No se encontraron productos para mostrar</h2>
                }
            </div>
        </div>
    </div>
  )
}