import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Definimos el Grid: Sidebar (dinámico) y Contenido (1fr)
    <div>
      <Topbar onToggle={() => setIsOpen(!isOpen)} />

      <div className="flex">
        <Sidebar isOpen={isOpen} />

        <main
          className={`flex-1 min-h-screen pt-20 transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}
        >
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
