import { Menu, Search, Bell, ChevronDown } from "lucide-react";

const Topbar = ({ onToggle }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* botton hamburguesa */}
            <button
              className="p-2 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Toggle Sidebar"
              onClick={onToggle}
            >
              <Menu size={22} />
            </button>
            {/* botton hamburguesa */}

            {/* texto dashboard */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-md">
                <span className="font-bold text-lg">D</span>
              </div>
              <h1 className="hidden sm:block text-xl font-bold text-gray-800 tracking-tight">
                Dashboard
              </h1>
            </div>
          </div>
          {/* texto dashboard */}

          {/* centro que se adapta al centro */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="w-4 h-4 text-gray-400 group-focus-within:text-blue-500" />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-200 text-gray-500 text-sm rounded-lg focus:ring-blue-500/20 focus:border-blue-500 block w-full pl-10 p-2.5 outline-none transition-all"
                placeholder="Text..."
              />
            </div>
          </div>
          {/* centro que se adapta al centro */}
          <div className="flex items-center gap-2">
            {/* botton de notificaciones */}
            <button className="p-2 text-gray-500 rounded-xl hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white "></span>
            </button>
            {/* botton de notificaciones */}

            {/* perfil de usuario */}
            <div className="flex items-center gap-3 ml-2 pl-3 border-1 border-gray-200 cursor-pointer group ">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-gray-200 flex items-center justify-center text-sm font-semibold text-slate-700">
                JD
              </div>
              <ChevronDown
                size={14}
                className="text-gray-200 group-hover:text-gray-600 transition-transform group-hover:translate-y-0.5"
              />
            </div>
            {/* perfil de usuario */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
