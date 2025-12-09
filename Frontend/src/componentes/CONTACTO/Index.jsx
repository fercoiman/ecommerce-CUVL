import { useState } from 'react'

export function Index() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    })
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Contacto</h1>
        <p className="text-gray-400">Estamos aquí para ayudarte</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-6">Información de Contacto</h2>
          
          <div className="space-y-6">
            <div className="border-b border-slate-700 pb-6">
              <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                <span>📍</span> Dirección
              </h3>
              <div className="text-gray-300 space-y-1">
                <p>Av. Principal 1234, Piso 5</p>
                <p>Buenos Aires, Argentina</p>
                <p>Código Postal: C1425</p>
              </div>
            </div>

            <div className="border-b border-slate-700 pb-6">
              <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                <span>📞</span> Teléfonos
              </h3>
              <div className="text-gray-300 space-y-1">
                <p>Teléfono: +54 11 1234-5678</p>
                <p>WhatsApp: +54 11 9876-5432</p>
                <p>Horario: Lunes a Viernes 9:00 - 18:00</p>
              </div>
            </div>

            <div className="border-b border-slate-700 pb-6">
              <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                <span>✉️</span> Email
              </h3>
              <div className="text-gray-300 space-y-1">
                <p>Ventas: ventas@ecommerce-cuvl.com</p>
                <p>Soporte: soporte@ecommerce-cuvl.com</p>
                <p>General: info@ecommerce-cuvl.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                <span>🌐</span> Redes Sociales
              </h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Facebook
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Instagram
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Twitter
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="input-dark w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-dark w-full"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="input-dark w-full"
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-2">
                Asunto *
              </label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="input-dark w-full"
              >
                <option value="">Seleccione un asunto</option>
                <option value="consulta">Consulta General</option>
                <option value="ventas">Información de Ventas</option>
                <option value="soporte">Soporte Técnico</option>
                <option value="devolucion">Devolución/Reembolso</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="input-dark w-full"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
