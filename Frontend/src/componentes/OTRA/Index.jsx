export function Index() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Políticas y Términos</h1>
        <p className="text-gray-400">Información importante sobre nuestros servicios</p>
      </div>
      
      <div className="space-y-6">
        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3 flex items-center gap-2">
            <span>📋</span> Términos y Condiciones
          </h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">1. Aceptación de los Términos</h3>
              <p className="leading-relaxed">
                Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos 
                y condiciones. Si no está de acuerdo con alguna parte de estos términos, 
                no debe utilizar nuestro servicio.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">2. Uso del Sitio</h3>
              <p className="leading-relaxed">
                El sitio web está destinado únicamente para uso personal y no comercial. 
                No está permitido copiar, modificar, distribuir, transmitir, mostrar, 
                realizar ingeniería inversa, reproducir, publicar, licenciar o crear 
                trabajos derivados de cualquier información obtenida del sitio.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">3. Productos y Precios</h3>
              <p className="leading-relaxed">
                Nos reservamos el derecho de modificar los precios de nuestros productos 
                en cualquier momento sin previo aviso. Todos los precios están expresados 
                en pesos argentinos e incluyen IVA cuando corresponda.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">4. Pagos</h3>
              <p className="leading-relaxed">
                Aceptamos diversos métodos de pago. Todos los pagos se procesan de forma 
                segura. Una vez confirmado el pago, procederemos con el envío del producto.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3 flex items-center gap-2">
            <span>🔒</span> Política de Privacidad
          </h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Recopilación de Información</h3>
              <p className="leading-relaxed">
                Recopilamos información que usted nos proporciona directamente, como cuando 
                crea una cuenta, realiza una compra o se comunica con nosotros. Esta información 
                puede incluir nombre, dirección de correo electrónico, dirección postal, 
                número de teléfono y información de pago.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Uso de la Información</h3>
              <p className="leading-relaxed">
                Utilizamos la información recopilada para procesar transacciones, enviar 
                actualizaciones sobre pedidos, responder a consultas y mejorar nuestros 
                servicios. No vendemos ni compartimos su información personal con terceros 
                sin su consentimiento.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Seguridad</h3>
              <p className="leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger 
                su información personal contra acceso no autorizado, alteración, divulgación 
                o destrucción.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3 flex items-center gap-2">
            <span>🔄</span> Política de Devoluciones
          </h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Plazo para Devoluciones</h3>
              <p className="leading-relaxed">
                Tienes 30 días desde la fecha de recepción para solicitar una devolución 
                o cambio. Los productos deben estar en su estado original, sin usar y con 
                todos los accesorios y embalajes originales.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Proceso de Devolución</h3>
              <p className="leading-relaxed">
                Para iniciar una devolución, contacta a nuestro servicio de atención al cliente. 
                Una vez aprobada la devolución, te proporcionaremos una etiqueta de envío. 
                El reembolso se procesará una vez recibido y verificado el producto.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Productos No Elegibles</h3>
              <p className="leading-relaxed">
                Algunos productos como artículos personalizados, productos perecederos o 
                productos de higiene personal no son elegibles para devolución por razones 
                de salud y seguridad.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3 flex items-center gap-2">
            <span>🚚</span> Política de Envíos
          </h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Zonas de Entrega</h3>
              <p className="leading-relaxed">
                Realizamos envíos a todo el territorio argentino. Los tiempos de entrega 
                varían según la ubicación y el método de envío seleccionado.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Tiempos de Entrega</h3>
              <div className="bg-slate-700/50 p-4 rounded-lg space-y-2">
                <p><strong className="text-white">Capital Federal y GBA:</strong> 24-48 horas hábiles</p>
                <p><strong className="text-white">Interior del país:</strong> 3-7 días hábiles</p>
                <p><strong className="text-white">Zonas remotas:</strong> 7-14 días hábiles</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Costos de Envío</h3>
              <p className="leading-relaxed">
                Los costos de envío se calculan según el peso, dimensiones y destino del 
                producto. Ofrecemos envío gratis para compras superiores a $50,000.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">Seguimiento</h3>
              <p className="leading-relaxed">
                Una vez despachado tu pedido, recibirás un número de seguimiento por email 
                para que puedas rastrear tu envío en tiempo real.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3 flex items-center gap-2">
            <span>❓</span> Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: '¿Cómo puedo rastrear mi pedido?',
                a: 'Recibirás un email con el número de seguimiento una vez que tu pedido sea despachado. Puedes usar este número en la página de la empresa de envío para rastrear tu paquete.'
              },
              {
                q: '¿Qué métodos de pago aceptan?',
                a: 'Aceptamos tarjetas de crédito y débito, transferencias bancarias, y plataformas de pago digital como Mercado Pago.'
              },
              {
                q: '¿Puedo cancelar mi pedido?',
                a: 'Puedes cancelar tu pedido antes de que sea despachado. Contacta a nuestro servicio de atención al cliente lo antes posible.'
              },
              {
                q: '¿Ofrecen garantía en los productos?',
                a: 'Sí, todos nuestros productos cuentan con garantía del fabricante. Los detalles específicos varían según el producto y se indican en cada página de producto.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-700/50 p-5 rounded-lg border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
