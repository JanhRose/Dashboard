import { DollarSign, Users, ShoppingBag, BarChart3 } from "lucide-react";
import StatCard from "../Components/StatCard";

function Dashboard() {
  return (
    // En tu archivo de Página (ej. Home.jsx o Dashboard.jsx)
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm">
          Bienvenido de vuelta, aqui esta su resumen
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <StatCard
          title="Ingresos"
          value="$23,000"
          percentage="12%"
          icon={DollarSign}
        />

        <StatCard title="Usuarios" value="1,200" percentage="5%" icon={Users} />

        <StatCard
          title="Ventas"
          value="450"
          percentage="8%"
          icon={ShoppingBag}
        />

        <StatCard
          title="Visitas"
          value="10,000"
          percentage="2%"
          icon={BarChart3}
        />
      </div>
    </>
  );
}

export default Dashboard;
