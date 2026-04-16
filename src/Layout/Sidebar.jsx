import {
  Home,
  Bell,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
} from "lucide-react";

const Sidebar = ({ isOpen }) => {
  // Clases para el contenedor principal
  // En PC: Cambia el ancho de 64 (256px) a 20 (80px)
  // En Móvil: Se oculta desplazándose a la izquierda (-left-full)

  const menuItems = [
    { icon: <Home size={22} />, label: "Dashboard" },
    { icon: <BarChart2 size={22} />, label: "Estadísticas" },
    { icon: <Users size={22} />, label: "Usuarios" },
    { icon: <Settings size={22} />, label: "Configuración" },
  ];

  return (
    <aside
      className={`
  fixed top-0 left-0 z-40 h-screen pt-20 
  bg-white border-r border-gray-200
  transition-all duration-300 ease-in-out
  

    w-[280px] ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    
    md:translate-x-0 ${isOpen ? "md:w-64" : "md:w-20"}
`}
    >
      <div className=" h-full px-3 pb-4 overflow-y-auto overflow-x-hidden bg-white">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 group transition-colors"
              >
                <div className="w-8 flex justify-center items-center flex-shrink-0">
                  {item.icon}
                </div>
                {/* El texto desaparece en PC si está cerrado, pero en móvil siempre se intenta mostrar si está abierto */}
                <span
                  className={`ml-3 whitespace-nowrap transition-opacity duration-300 
                  ${!isOpen ? "lg:hidden opacity-0" : "opacity-100"}`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}

          {/* la campana que solo aparecera en pc */}
          <li className="sm:hidden">
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 group transition-colors ms:hidden"
            >
              <div className="w-8 flex justify-center items-center flex-shrink-0">
                <Bell size={20} />
              </div>
              {/* El texto desaparece en PC si está cerrado, pero en móvil siempre se intenta mostrar si está abierto */}
              <span
                className={`ml-3 whitespace-nowrap transition-opacity duration-300 
                  ${!isOpen ? "lg:hidden opacity-0" : "opacity-100"}`}
              >
                notificaciones
              </span>
            </a>
          </li>
        </ul>

        {/* Sección inferior opcional */}
        <div className="absolute bottom-5 left-0 w-full px-3">
          <a
            href="#"
            className="flex items-center p-3 text-gray-500 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            {/* El icono siempre se queda */}
            <HelpCircle size={22} className="flex-shrink-0" />

            {/* El texto se oculta con opacidad y ancho cero */}
            <span
              className={`ml-3 overflow-hidden whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
            >
              Ayuda
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
