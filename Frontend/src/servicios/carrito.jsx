import axios from "axios"
import { production } from "./productos"

//const url = 'https://68bee8d29c70953d96ee2758.mockapi.io/api/pedidos/'

//const url = 'http://localhost:8080/api/pedidos/'      // para ambiente de desarrollo
//const url = '/api/pedidos/'                             // para ambiente de producción

const url =  production? '/api/pedidos/' : 'http://localhost:8080/api/pedidos/'

const enviar = async pedido => (await axios.post(url, pedido)).data

/* ---------------------------------- */
/*            exportación             */
/* ---------------------------------- */
export default {
    enviar,        // POST
}

