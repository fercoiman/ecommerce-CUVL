import { NavLink } from "react-router"

const Navbar = () =>
    <nav className="bg-slate-800 border-b border-slate-700 shadow-lg">
        <ul className="flex justify-center items-center gap-1 py-2 px-4 flex-wrap">
            <li>
                <NavLink 
                    to="/inicio" 
                    className={({ isActive }) => 
                        `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            isActive 
                                ? 'bg-indigo-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`
                    }
                >
                    Inicio
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/alta" 
                    className={({ isActive }) => 
                        `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            isActive 
                                ? 'bg-indigo-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`
                    }
                >
                    Alta
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/carrito" 
                    className={({ isActive }) => 
                        `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            isActive 
                                ? 'bg-indigo-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`
                    }
                >
                    Carrito
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/contacto" 
                    className={({ isActive }) => 
                        `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            isActive 
                                ? 'bg-indigo-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`
                    }
                >
                    Contacto
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/nosotros" 
                    className={({ isActive }) => 
                        `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            isActive 
                                ? 'bg-indigo-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`
                    }
                >
                    Nosotros
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/otra" 
                    className={({ isActive }) => 
                        `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                            isActive 
                                ? 'bg-indigo-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`
                    }
                >
                    Políticas
                </NavLink>
            </li>
        </ul>
    </nav>   
    
export default Navbar