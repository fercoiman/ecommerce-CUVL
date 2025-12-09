const Footer = props => 
    <footer className="bg-slate-800 border-t border-slate-700 py-6 mt-auto">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="text-gray-300 font-medium">&copy; {props.texto}</h3>
                <div className="flex gap-4 text-sm text-gray-400">
                    <span>Ecommerce CUVL</span>
                    <span>•</span>
                    <span>Todos los derechos reservados</span>
                </div>
            </div>
        </div>
    </footer>

export default Footer