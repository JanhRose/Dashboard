import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Definimos el Grid: Sidebar (dinámico) y Contenido (1fr)
    <div>
      <Topbar onToggle={() => setIsOpen(!isOpen)} />

      <div className="row-span-2">{/* <Sidebar /> */}</div>

      <main className="p-6 bg-gray-100 overflow-y-auto">{children}</main>
    </div>
  );
}

export default MainLayout;
