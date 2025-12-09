export function Index() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center mb-12 shadow-2xl">
        <h1 className="text-5xl font-bold text-white mb-4">Sobre Nosotros</h1>
        <p className="text-xl text-indigo-100">Tu tienda de confianza desde 2015</p>
      </div>

      <div className="space-y-8">
        <section className="card">
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3">
            Nuestra Historia
          </h2>
          <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>
              Ecommerce CUVL nació en 2015 con la visión de ofrecer productos de calidad 
              a precios accesibles para todos. Comenzamos como una pequeña tienda física 
              en Buenos Aires y, gracias a la confianza de nuestros clientes, hemos crecido 
              hasta convertirnos en una de las plataformas de comercio electrónico más 
              reconocidas de la región.
            </p>
            <p>
              A lo largo de estos años, hemos expandido nuestro catálogo, mejorado nuestros 
              servicios y siempre mantenido nuestro compromiso con la excelencia y la 
              satisfacción del cliente.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card border-l-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <span>🎯</span> Nuestra Misión
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Proporcionar productos de alta calidad a través de una experiencia de compra 
              excepcional, manteniendo siempre los más altos estándares de servicio al cliente 
              y contribuyendo al bienestar de nuestras comunidades.
            </p>
          </div>

          <div className="card border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <span>👁️</span> Nuestra Visión
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ser la plataforma de ecommerce líder en Latinoamérica, reconocida por nuestra 
              innovación, calidad de productos y compromiso con la satisfacción total del cliente.
            </p>
          </div>
        </section>

        <section className="card">
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3 flex items-center gap-2">
            <span>💎</span> Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Calidad', desc: 'Ofrecemos solo productos que cumplen con nuestros estándares de excelencia.' },
              { title: 'Confianza', desc: 'Construimos relaciones duraderas basadas en la transparencia y honestidad.' },
              { title: 'Innovación', desc: 'Estamos siempre buscando nuevas formas de mejorar tu experiencia de compra.' },
              { title: 'Compromiso', desc: 'Nos comprometemos con la satisfacción total de nuestros clientes.' },
              { title: 'Sustentabilidad', desc: 'Cuidamos el medio ambiente y promovemos prácticas responsables.' },
              { title: 'Servicio', desc: 'Nuestro equipo está siempre disponible para ayudarte cuando lo necesites.' }
            ].map((valor, i) => (
              <div key={i} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-colors border border-slate-600">
                <h3 className="text-xl font-bold text-indigo-400 mb-3">{valor.title}</h3>
                <p className="text-gray-300">{valor.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3 flex items-center gap-2">
            <span>👥</span> Nuestro Equipo
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Contamos con un equipo de más de 50 profesionales dedicados, desde expertos en 
            logística hasta especialistas en atención al cliente. Todos compartimos la pasión 
            por brindar el mejor servicio posible.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '50+', label: 'Empleados' },
              { num: '10+', label: 'Años de Experiencia' },
              { num: '50,000+', label: 'Clientes Satisfechos' },
              { num: '1000+', label: 'Productos Disponibles' }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-center shadow-lg">
                <h3 className="text-4xl font-bold text-white mb-2">{stat.num}</h3>
                <p className="text-indigo-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-indigo-500 pb-3 flex items-center gap-2">
            <span>🤝</span> Nuestro Compromiso
          </h2>
          <ul className="space-y-3">
            {[
              'Garantía de satisfacción en todos nuestros productos',
              'Envíos rápidos y seguros a todo el país',
              'Atención al cliente disponible 24/7',
              'Política de devoluciones sin complicaciones',
              'Precios competitivos y transparentes',
              'Protección de datos personales'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-emerald-400 font-bold text-xl">✅</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
