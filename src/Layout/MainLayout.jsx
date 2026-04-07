import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Definimos el Grid: Sidebar (dinámico) y Contenido (1fr)
    <div
      className={`grid h-screen w-full transition-all duration-300 ${
        isOpen ? "grid-cols-[260px_1fr]" : "grid-cols-[0px_1fr]"
      } grid-rows-[64px_1fr] overflow-hidden bg-[#F9FAFB]`}
    >
      <div className="row-span-2">
        <Sidebar />
      </div>

      <Topbar onToggle={() => setIsOpen(!isOpen)} />

      <main className="p-6 bg-gray-100 overflow-y-auto">{children}</main>
    </div>
  );
}

export default MainLayout;
